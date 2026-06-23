/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { extractKanji } from '../utilities'
import {
  DictionaryKanjiBankV3,
  DictionaryKanjiMetaBankV3,
  DictionaryTermBankV3,
  DictionaryTermMetaBankV3,
} from '../yomitan/types'
import YomitanDictionary from '../yomitan/yomitan-dictionary'

export const kanjiMap = new Map<string, DictionaryKanjiBankV3[0]>()
export const termMap = new Map<string, DictionaryTermBankV3[0]>()
export const termMetaMap = new Map<string, DictionaryTermMetaBankV3[0]>()
export const kanjiMetaMap = new Map<string, DictionaryKanjiMetaBankV3[0]>()
export const termByKanji = new Map<string, DictionaryTermBankV3>()
export const SkyDictionary = new YomitanDictionary({
  revision: '',
  title: '',
})
await SkyDictionary.merge('Sky')
for (let index = 0; index < SkyDictionary.kanji.length; index++) {
  const x = SkyDictionary.kanji[index]!
  kanjiMap.set(x[0], x)
}
for (let index = 0; index < SkyDictionary.term.length; index++) {
  const x = SkyDictionary.term[index]!
  termMap.set(x[0], x)
  for (const kanji of extractKanji(x[0])) {
    const terms = termByKanji.get(kanji)
    if (terms) terms.push(x)
    else termByKanji.set(kanji, [x])
  }
}
for (let index = 0; index < SkyDictionary.term_meta.length; index++) {
  const x = SkyDictionary.term_meta[index]!
  termMetaMap.set(x[0], x)
}
for (let index = 0; index < SkyDictionary.kanji_meta.length; index++) {
  const x = SkyDictionary.kanji_meta[index]!
  kanjiMetaMap.set(x[0], x)
}

/**
 * AI generated, but works well
 */
export function getDefinitionsForTerm(term: string) {
  const visited = new Set()
  function findEntry(word: string) {
    let current = word

    while (current && !visited.has(current)) {
      visited.add(current)

      const entry = termMap.get(current)
      if (!entry) return null

      const structured = entry[5]

      // Redirect entries contain:
      // ["target", ["redirected from ..."]]
      for (const block of structured) {
        // @ts-ignore
        const content = block?.content

        if (
          content &&
          Array.isArray(content) &&
          typeof content[0] === 'string'
        ) {
          // eslint-disable-next-line no-useless-assignment
          current = content[0]
          continue
        }
      }

      return entry
    }

    return null
  }

  const entry = findEntry(term)
  if (!entry) return []

  const definitions = new Set()

  function walk(node: unknown, insideGlossary = false) {
    if (node == null) return

    if (typeof node === 'string') {
      if (insideGlossary) {
        definitions.add(node.trim())
      }
      return
    }

    if (Array.isArray(node)) {
      for (const child of node) {
        walk(child, insideGlossary)
      }
      return
    }

    if (typeof node !== 'object') return
    //@ts-ignore
    const isGlossary = node?.data?.content === 'glossary'
    //@ts-ignore
    walk(node.content, insideGlossary || isGlossary)
  }

  for (const block of entry[5] ?? [])
    //@ts-ignore
    if (block.type === 'structured-content') walk(block.content)

  return [...definitions]
}

console.log(getDefinitionsForTerm('行きます'))
