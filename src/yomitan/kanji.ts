import { extractKanji } from '../utilities'
import { WK, WKKanji, WKObject, WKRadical } from '../wanikani'

import YomitanDictionary from './yomitan-dictionary'

export function generateKanji(dictionary: YomitanDictionary) {
  console.log('Building kanji bank...')
  // Find WK object by kanji
  const WKKanjiCharMap = new Map<string, WKObject>()
  // Find WK object by id
  const WKIdMap = new Map<number, WKObject>()
  // Filtered subjects
  const subjects: WKObject[] = []
  // Build maps for faster lookups
  for (const subject of WK) {
    if (subject.data.hidden_at) continue
    const s = subject as WKObject
    if (s.data.characters && s.object === 'kanji')
      WKKanjiCharMap.set(s.data.characters, s)
    WKIdMap.set(s.id, s)
    subjects.push(s)
  }
  for (let index = 0; index < dictionary.kanji.length; index++) {
    const item = dictionary.kanji[index]!
    const wkItem = WKKanjiCharMap.get(item[0]) as WKObject<WKKanji> | undefined
    if (!wkItem) continue
    // Similar kanji
    const similar = subjects.filter(
      (subject) =>
        subject.object === 'kanji' &&
        subject.id !== wkItem.id &&
        (wkItem.data.visually_similar_subject_ids.includes(subject.id) ||
          ((subject.data as WKKanji).component_subject_ids.length ===
            wkItem.data.component_subject_ids.length &&
            wkItem.data.component_subject_ids.every((d) =>
              (subject.data as WKKanji).component_subject_ids.includes(d),
            ))),
    )
    // Other kanji with same radicals
    const kanjiWithRadical = wkItem.data.component_subject_ids.map((id) => {
      const radical = WKIdMap.get(id)! as WKObject<WKRadical>
      return [
        `${radical.data.characters ?? ''}(${radical.data.slug})`,
        subjects
          .filter(
            (s) =>
              s.id !== wkItem.id &&
              s.object === 'kanji' &&
              (s.data as WKKanji).component_subject_ids.includes(id),
          )
          .map((s) => (s.data as WKKanji).characters)
          .join(''),
      ]
    })
    // Add onyomi from WK
    item[1] = [
      ...new Set([
        ...wkItem.data.readings
          .filter((r) => r.type === 'onyomi')
          .sort((a, b) => (a.primary ? 0 : 1) - (b.primary ? 0 : 1))
          .map((x) => x.reading),
        ...item[1].split(' '),
      ]),
    ].join(' ')
    // Add kunyomi from WK
    item[2] = [
      ...new Set([
        ...wkItem.data.readings
          .filter((r) => r.type === 'kunyomi')
          .sort((a, b) => (a.primary ? 0 : 1) - (b.primary ? 0 : 1))
          .map((x) => x.reading),
        ...item[2].split(' '),
      ]),
    ].join(' ')
    // Add meanings from WK
    item[4] = [
      ...new Set(
        [
          ...wkItem.data.meanings
            .sort((a, b) => (a.primary ? 0 : 1) - (b.primary ? 0 : 1))
            .map((x) => x.meaning),
          ...item[4],
        ].map((x) => x.toLowerCase()),
      ),
      clearWKText(
        // If only one component, we replace kanji mnemonic with a radical one
        `WaniKani Meaning:\n${
          wkItem.data.component_subject_ids.length === 1
            ? (
                WKIdMap.get(
                  wkItem.data.component_subject_ids[0]!,
                ) as WKObject<WKRadical>
              ).data.meaning_mnemonic
            : wkItem.data.meaning_mnemonic
        }${wkItem.data.meaning_hint ? '\n' + wkItem.data.meaning_hint : ''}`,
      ),
      clearWKText(
        `WaniKani Reading:\n${
          wkItem.data.reading_mnemonic
        }${wkItem.data.reading_hint ? '\n' + wkItem.data.reading_hint : ''}`,
      ),
    ]
    if (similar.length > 0)
      item[4].push('Similar: ' + similar.map((x) => x.data.characters).join(''))
    for (const [radical, words] of kanjiWithRadical)
      item[4].push(`${radical}: ${words}`)
    item[5].wk = wkItem.data.level.toString()
  }

  // Build maps for faster lookups
  const onyomiMap = new Map<string, string[]>()
  const kunyomiMap = new Map<string, string[]>()
  const meaningMap = new Map<string, string[]>()
  const kanjiTermMap = new Map<string, string[]>()
  for (let index = 0; index < dictionary.kanji.length; index++) {
    const item = dictionary.kanji[index]!
    const on = item[1].split(' ').filter(Boolean)
    const kun = item[2].split(' ').filter(Boolean)
    const m = item[4].filter((x) => x && !x.includes(':'))
    for (let index = 0; index < on.length; index++) {
      let x = onyomiMap.get(on[index]!)
      if (!x) {
        x = []
        onyomiMap.set(on[index]!, x)
      }
      x.push(item[0])
    }
    for (let index = 0; index < kun.length; index++) {
      let x = kunyomiMap.get(kun[index]!)
      if (!x) {
        x = []
        kunyomiMap.set(kun[index]!, x)
      }
      x.push(item[0])
    }
    for (let index = 0; index < m.length; index++) {
      let x = meaningMap.get(m[index]!)
      if (!x) {
        x = []
        meaningMap.set(m[index]!, x)
      }
      x.push(item[0])
    }
  }
  // Same for vocab kanji
  for (let index = 0; index < dictionary.term.length; index++) {
    const item = dictionary.term[index]!
    const kanji = extractKanji(item[0])
    for (let index = 0; index < kanji.length; index++) {
      let x = kanjiTermMap.get(kanji[index]!)
      if (!x) {
        x = []
        kanjiTermMap.set(kanji[index]!, x)
      }
      // If short check that where are no duplicates.
      // If long, check there are no words that already start the same.
      if (
        item[0].length > 3
          ? x.some((x) => item[0].startsWith(x))
          : x.includes(item[0])
      )
        continue
      x.push(item[0])
    }
  }
  // Add additional fields after WK population
  for (let index = 0; index < dictionary.kanji.length; index++) {
    const item = dictionary.kanji[index]!
    const sameOnyomi = item[1]
      .split(' ')
      .filter(Boolean)
      .flatMap((x) => onyomiMap.get(x) ?? [])
    const sameKunyomi = item[2]
      .split(' ')
      .filter(Boolean)
      .flatMap((x) => kunyomiMap.get(x) ?? [])
    const sameMeaning = item[4]
      .filter((x) => x && !x.includes(':'))
      .flatMap((x) => meaningMap.get(x) ?? [])
    const termsInclude = kanjiTermMap.get(item[0]) ?? []
    if (sameMeaning.length > 0) item[4].push('Meaning: ' + sameMeaning.join(''))
    if (sameKunyomi.length > 0) item[4].push('Kunyomi: ' + sameKunyomi.join(''))
    if (sameOnyomi.length > 0) item[4].push('Onyomi: ' + sameOnyomi.join(''))
    if (termsInclude.length > 0)
      item[4].push('Terms: ' + termsInclude.join(','))
  }
}

const clearWKText = (text: string) =>
  text
    .replaceAll('<radical>', '{')
    .replaceAll('</radical>', '}')
    .replaceAll('<kanji>', '[')
    .replaceAll('</kanji>', ']')
    .replaceAll('<vocabulary>', '{')
    .replaceAll('</vocabulary>', '}')
    .replaceAll('<reading>', '{')
    .replaceAll('</reading>', '}')
    .replaceAll('<meaning>', '{')
    .replaceAll('</meaning>', '}')
