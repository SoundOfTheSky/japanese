import { mkdirSync, readFileSync, writeFileSync } from 'fs'

import { file } from 'bun'

import joyouKanji from './joyou-kanji.txt'
import { cleanupHTML } from './utilities'

export type JPDBKanjiItem = {
  kanji: string
  keyword?: string
  frequency?: string
  type?: string[]
  kanken?: string
  heisig?: string
  mnemonic?: string
  readings?: {
    common: {
      reading: string
      percent: number
    }[]
    other: string[]
  }
  usedInVocabulary?: {
    vocab: string
    meaning: string[]
  }[]
  usedInKanji?: string
  composed?: string
  examples?: {
    example: string
    translation: string
  }[]
}

async function JPDBFetch(url: string) {
  mkdirSync('./assets/jpdb', { recursive: true })
  const fileName = './assets/jpdb/' + url.replaceAll('/', '_')
  try {
    return readFileSync(fileName, 'utf8')
  } catch {
    const text = await fetch('https://jpdb.io/' + url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:151.0) Gecko/20100101 Firefox/151.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Sec-GPC': '1',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        Priority: 'u=0, i',
        Cookie: process.env.JPDB!,
      },
      referrer: 'https://jpdb.io',
      method: 'GET',
      mode: 'cors',
    }).then((x) => x.text())
    writeFileSync(fileName, text)
    return text
  }
}

function extractText(
  html: string,
  start: string[],
  end: string,
  startIndex = 0,
) {
  let index = startIndex
  for (let startIndex = 0; startIndex < start.length; startIndex++) {
    const substring = start[startIndex]!
    const htmlI = html.indexOf(substring, index)
    if (htmlI === -1) return
    index = htmlI + substring.length
  }
  const endIndex = html.indexOf(end, index)
  if (endIndex === -1) return
  return { index, text: html.slice(index, endIndex), endIndex }
}

async function downloadKanji(kanji: string) {
  const html = await JPDBFetch(`kanji/${kanji}`)
  const jpdbKanji: JPDBKanjiItem = {
    kanji,
    keyword: extractText(
      html,
      ['Keyword&nbsp;', '<div class="subsection">'],
      '</div>',
    )?.text,
    frequency: extractText(html, ['<td>Frequency</td>', '<td>'], '</td>')?.text,
    kanken: extractText(html, ['<td>Kanken</td>', '<td>'], '</td>')?.text,
    heisig: extractText(html, ['<td>Heisig</td>', '<td>'], '</td>')?.text,
  }
  const type = extractText(
    html,
    ['<td>Type</td>', '<td class="space-between">'],
    '</td>',
  )
  let htmlIndex = type?.endIndex ?? 0
  if (type) {
    jpdbKanji.type = [cleanupHTML(type.text, []).replaceAll('?', '').trim()]
    while (htmlIndex !== -1) {
      const type = extractText(
        html,
        ['<td></td>', '<td class="space-between">'],
        '</td>',
        htmlIndex,
      )
      if (!type) break
      jpdbKanji.type.push(cleanupHTML(type.text, []).replaceAll('?', '').trim())
      htmlIndex = type.endIndex
    }
  }

  htmlIndex = html.indexOf('<td class="kanji-reading-list-common">')
  if (htmlIndex !== -1) {
    jpdbKanji.readings = {
      common: [],
      other: [],
    }
    while (htmlIndex !== -1) {
      const reading = extractText(
        html,
        ['<a href="/kanji-reading/', '">'],
        '</a>',
        htmlIndex,
      )
      if (!reading) break
      htmlIndex = reading.endIndex
      const percent = extractText(html, ['">('], '%)</div>', htmlIndex)
      if (!percent) break
      jpdbKanji.readings.common.push({
        reading: reading.text,
        percent: +percent.text,
      })
      htmlIndex = percent.endIndex
    }
  }

  htmlIndex = html.indexOf('<td class="kanji-reading-list">')
  if (htmlIndex !== -1) {
    jpdbKanji.readings ??= {
      common: [],
      other: [],
    }
    while (htmlIndex !== -1) {
      const reading = extractText(
        html,
        ['<a href="/kanji-reading/', '">'],
        '</a>',
        htmlIndex,
      )
      if (!reading) break
      jpdbKanji.readings.other.push(reading.text)
      htmlIndex = reading.endIndex
    }
  }

  htmlIndex = html.indexOf('<h6 class="subsection-label">Composed of</h6>')
  const endIndex = html.indexOf('Mnemonic&nbsp;', htmlIndex)
  if (htmlIndex !== -1) {
    jpdbKanji.composed = ''
    while (htmlIndex !== -1) {
      const kanji = extractText(
        html,
        ['<a class="plain" href="/kanji/', '">'],
        '</a>',
        htmlIndex,
      )
      if (!kanji) break
      if (kanji.endIndex > endIndex) break
      htmlIndex = kanji.endIndex
      jpdbKanji.composed += kanji.text
    }
  }

  const mnemonic = extractText(
    html,
    ['Mnemonic&nbsp;', '<div class="mnemonic">', '<p>'],
    '</p>',
  )
  if (mnemonic) jpdbKanji.mnemonic = mnemonic.text

  htmlIndex = html.indexOf('Used in kanji')
  if (htmlIndex !== -1) {
    jpdbKanji.usedInKanji = ''
    while (htmlIndex !== -1) {
      const kanji = extractText(
        html,
        ['<a class="plain" href="/kanji/', '">'],
        '</a>',
        htmlIndex,
      )
      if (!kanji) break
      htmlIndex = kanji.endIndex
      jpdbKanji.usedInKanji += kanji.text
    }
  }

  htmlIndex = html.indexOf('Used in vocabulary')
  if (htmlIndex !== -1) {
    jpdbKanji.usedInVocabulary = []
    while (htmlIndex !== -1) {
      const vocabulary = extractText(
        html,
        ['<a class="plain" href="/vocabulary/', '>'],
        '</a>',
        htmlIndex,
      )
      if (!vocabulary) break
      htmlIndex = vocabulary.endIndex
      const meaning = extractText(
        html,
        ['<div class="en">'],
        '</div>',
        htmlIndex,
      )
      if (!meaning) break
      jpdbKanji.usedInVocabulary.push({
        vocab: vocabulary.text,
        meaning: meaning.text.split(';').map((x) => x.trim()),
      })
      htmlIndex = meaning.endIndex
    }
  }

  htmlIndex = html.indexOf('Examples (')
  if (htmlIndex !== -1) {
    jpdbKanji.examples = []
    while (htmlIndex !== -1) {
      const example = extractText(
        html,
        ['<div class="jp">'],
        '</div>',
        htmlIndex,
      )
      if (!example) break
      htmlIndex = example.endIndex
      const translation = extractText(
        html,
        ['<div class="en">'],
        '</div>',
        htmlIndex,
      )
      if (!translation) break
      jpdbKanji.examples.push({
        example: example.text,
        translation: translation.text,
      })
      htmlIndex = translation.endIndex
    }
  }

  return jpdbKanji
}

export async function loadJPDBFile() {
  JPDBKanji.splice(
    0,
    Infinity,
    ...((await file('assets/JPDBKanji.json').json()) as JPDBKanjiItem[]),
  )
}

export const JPDBKanji: JPDBKanjiItem[] = []
export const JPDBKanjiMap = new Map<string, JPDBKanjiItem>()

if (await file('assets/JPDBKanji.json').exists()) {
  JPDBKanji.splice(
    0,
    Infinity,
    ...((await file('assets/JPDBKanji.json').json()) as JPDBKanjiItem[]),
  )
} else {
  const kanjiList = []
  const kanjiToParse = joyouKanji.split('')
  for (let index = 0; index < kanjiToParse.length; index++) {
    const kanji = kanjiToParse[index]!
    console.log(kanji, index, kanjiToParse.length)
    const item = await downloadKanji(kanji)
    for (const x of item.composed ?? [])
      if (!kanjiToParse.includes(x)) kanjiToParse.push(x)
    for (const x of item.usedInKanji ?? [])
      if (!kanjiToParse.includes(x)) kanjiToParse.push(x)
    kanjiList.push(item)
  }

  await file('./assets/JPDBKanji.json').write(
    JSON.stringify(kanjiList, undefined, 2),
  )
}
for (const item of JPDBKanji) JPDBKanjiMap.set(item.kanji, item)
