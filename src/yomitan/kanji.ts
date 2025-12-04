import { extractKanji } from '../utilities'
import { WK, WKKanji, WKObject, WKRadical } from '../wanikani'

import YomitanDictionary from './yomitan-dictionary'

export function generateKanji(dictionary: YomitanDictionary) {
  console.log('Building kanji bank...')
  // Find WK object by kanji
  const WKKanjiCharMap = new Map<string, WKObject<WKKanji>>()
  // Find WK object by kanji
  const WKRadicalCharMap = new Map<string, WKObject<WKRadical>>()
  // Find WK object by id
  const WKIdMap = new Map<number, WKObject>()
  // Filtered subjects
  const subjects: WKObject[] = []
  // Build maps for faster lookups
  for (const subject of WK) {
    if (subject.data.hidden_at) continue
    const s = subject as WKObject
    if (s.data.characters) {
      if (s.object === 'kanji')
        WKKanjiCharMap.set(s.data.characters, s as WKObject<WKKanji>)
      else if (s.object === 'radical')
        WKRadicalCharMap.set(s.data.characters, s as WKObject<WKRadical>)
    }
    WKIdMap.set(s.id, s)
    subjects.push(s)
  }
  for (let index = 0; index < dictionary.kanji.length; index++) {
    const item = dictionary.kanji[index]!
    const wkKanji = WKKanjiCharMap.get(item[0])
    const wkRadical = WKRadicalCharMap.get(item[0])
    if (!wkKanji && !wkRadical) continue
    // Similar kanji
    const similar = wkKanji
      ? subjects.filter(
          (subject) =>
            subject.object === 'kanji' &&
            subject.id !== wkKanji.id &&
            (wkKanji.data.visually_similar_subject_ids.includes(subject.id) ||
              ((subject.data as WKKanji).component_subject_ids.length ===
                wkKanji.data.component_subject_ids.length &&
                wkKanji.data.component_subject_ids.every((d) =>
                  (subject.data as WKKanji).component_subject_ids.includes(d),
                ))),
        )
      : []
    // Other kanji with same radicals
    const componentSubjectIds: number[] = []
    if (wkKanji) componentSubjectIds.push(...wkKanji.data.component_subject_ids)
    if (wkRadical && !componentSubjectIds.includes(wkRadical.id))
      componentSubjectIds.push(wkRadical.id)
    const kanjiWithRadical = componentSubjectIds.map((id) => {
      const radical = WKIdMap.get(id)! as WKObject<WKRadical>
      return [
        `${radical.data.characters ?? ''}(${radical.data.slug})`,
        subjects
          .filter(
            (s) =>
              s.data.characters !== item[0] &&
              s.object === 'kanji' &&
              (s.data as WKKanji).component_subject_ids.includes(id),
          )
          .map((s) => (s.data as WKKanji).characters)
          .join(''),
      ]
    })
    if (wkKanji) {
      // Add onyomi from WK
      item[1] = [
        ...new Set([
          ...wkKanji.data.readings
            .filter((r) => r.type === 'onyomi')
            .sort((a, b) => (a.primary ? 0 : 1) - (b.primary ? 0 : 1))
            .map((x) => x.reading),
          ...item[1].split(' '),
        ]),
      ].join(' ')
      // Add kunyomi from WK
      item[2] = [
        ...new Set([
          ...wkKanji.data.readings
            .filter((r) => r.type === 'kunyomi')
            .sort((a, b) => (a.primary ? 0 : 1) - (b.primary ? 0 : 1))
            .map((x) => x.reading),
          ...item[2].split(' '),
        ]),
      ].join(' ')
      // Set WK level data
      item[5].wk = wkKanji.data.level.toString()
    }
    // Add meanings from WK
    item[4] = [
      ...new Set(
        [
          ...(wkKanji?.data.meanings
            .sort((a, b) => (a.primary ? 0 : 1) - (b.primary ? 0 : 1))
            .map((x) => x.meaning) ?? []),
          ...(wkRadical?.data.meanings
            .sort((a, b) => (a.primary ? 0 : 1) - (b.primary ? 0 : 1))
            .map((x) => x.meaning) ?? []),
          ...item[4],
        ].map((x) => x.toLowerCase()),
      ),
      clearWKText(
        `WaniKani Meaning:\n${wkRadical && !wkRadical.data.meaning_mnemonic.includes('radical is the same') ? wkRadical.data.meaning_mnemonic : wkKanji!.data.meaning_mnemonic}`,
      ),
    ]
    if (wkKanji)
      item[4].push(
        clearWKText(`WaniKani Reading:\n${wkKanji.data.reading_mnemonic}`),
      )
    if (similar.length > 0)
      item[4].push('Similar: ' + similar.map((x) => x.data.characters).join(''))
    for (const [radical, words] of kanjiWithRadical)
      item[4].push(`${radical}: ${words}`)
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
      // No duplicates, if long, check there are no words that already start the same.
      if (
        x.includes(item[0]) ||
        (item[0].length > 3 && x.some((x) => item[0].startsWith(x)))
      )
        continue
      x.push(item[0])
    }
  }
  // Add additional fields after WK population
  for (let index = 0; index < dictionary.kanji.length; index++) {
    const item = dictionary.kanji[index]!
    const getFromMap = (map: Map<string, string[]>) => [
      ...new Set(
        item[1]
          .split(' ')
          .filter(Boolean)
          .flatMap((x) => map.get(x) ?? [])
          .filter((x) => x !== item[0]),
      ),
    ]
    const sameOnyomi = getFromMap(onyomiMap)
    const sameKunyomi = getFromMap(kunyomiMap)
    const sameMeaning = getFromMap(meaningMap)
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
