import { file } from 'bun'
import { ChildNode, Element } from 'domhandler'
import { ElementType, parseDocument } from 'htmlparser2'

export type KanjiVGPositionEnum =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'tare'
  | 'tarec'
  | 'nyo'
  | 'nyoc'
  | 'kamae'

export type KanjiVGStroke = {
  id?: string
  type?: string
  d: string
}

export type KanjiVG = {
  id?: string

  element: string
  original?: string
  phon?: string

  partial?: boolean
  variant?: boolean
  radicalForm?: boolean
  tradForm?: boolean

  number?: number
  part?: number

  radical?: string
  position?: KanjiVGPositionEnum

  children: KanjiVG[]
  strokes: KanjiVGStroke[]
}

export async function getKanjiVG(kanji: string): Promise<KanjiVG | undefined> {
  const path = `./kanjivg/kanji/${kanji.charCodeAt(0).toString(16).padStart(5, '0')}.svg`
  if (!(await file(path).exists())) return
  const doc = parseDocument(await file(path).text(), {
    xmlMode: true,
  })

  function walk(nodes: ChildNode[]): KanjiVG | null {
    for (const node of nodes) {
      if (node.type !== ElementType.Tag) continue
      if (node.name === 'g' && node.attribs.id?.startsWith('kvg:StrokePaths_'))
        for (const child of node.children)
          if (child.type === ElementType.Tag && child.name === 'g')
            return parseGroup(child)
      const found = walk(node.children)
      if (found) return found
    }

    return null
  }

  return walk(doc.children)!
}

function bool(v?: string) {
  return v === 'true'
}

function num(v?: string) {
  return v ? Number(v) : undefined
}

function parseGroup(el: Element): KanjiVG {
  const attrs = el.attribs
  const node: KanjiVG = {
    id: attrs.id,
    element: attrs['kvg:element'] ?? '',
    original: attrs['kvg:original'],
    phon: attrs['kvg:phon'],
    partial: bool(attrs['kvg:partial']),
    variant: bool(attrs['kvg:variant']),
    radicalForm: bool(attrs['kvg:radicalForm']),
    tradForm: bool(attrs['kvg:tradForm']),
    number: num(attrs['kvg:number']),
    part: num(attrs['kvg:part']),
    radical: attrs['kvg:radical'],
    position: attrs[`kvg:position`] as KanjiVGPositionEnum | undefined,
    children: [],
    strokes: [],
  }
  for (const child of el.children) {
    if (child.type !== ElementType.Tag) continue
    if (child.name === 'g') node.children.push(parseGroup(child))
    else if (child.name === 'path')
      node.strokes.push({
        id: child.attribs.id,
        type: child.attribs['kvg:type'],
        d: child.attribs.d!,
      })
  }
  return node
}
