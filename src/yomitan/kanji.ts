import { WK, WKKanji, WKObject, WKRadical } from '../wanikani'

import YomitanDictionary from './yomitan-dictionary'

export function generateKanji(dictionary: YomitanDictionary) {
  console.log('Building kanji bank...')
  dictionary.kanji.sort(
    (a, b) =>
      (a[5].freq ? +a[5].freq : Infinity) - (b[5].freq ? +b[5].freq : Infinity),
  )
  const WKKanjiCharMap = new Map<string, WKObject>()
  const WKIdMap = new Map<number, WKObject>()
  const subjects: WKObject[] = []
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
    console.log(
      `1. ${index}/${dictionary.kanji.length} ${Math.round((index / dictionary.kanji.length) * 100)}%`,
    )
    const wkItem = WKKanjiCharMap.get(item[0]) as WKObject<WKKanji> | undefined
    if (!wkItem) continue
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
    const wordsWithRadical = wkItem.data.component_subject_ids.map((id) => {
      const radical = WKIdMap.get(id)! as WKObject<WKRadical>
      return [
        `${radical.data.characters ?? ''}(${radical.data.slug})`,
        subjects
          .filter(
            (s) =>
              s.object === 'kanji' &&
              (s.data as WKKanji).component_subject_ids.includes(id),
          )
          .map((s) => (s.data as WKKanji).characters)
          .join(''),
      ]
    })
    item[1] = [
      ...new Set([
        ...wkItem.data.readings
          .filter((r) => r.type === 'onyomi')
          .sort((a, b) => (a.primary ? 0 : 1) - (b.primary ? 0 : 1))
          .map((x) => x.reading),
        ...item[1].split(' '),
      ]),
    ].join(' ')
    item[2] = [
      ...new Set([
        ...wkItem.data.readings
          .filter((r) => r.type === 'kunyomi')
          .sort((a, b) => (a.primary ? 0 : 1) - (b.primary ? 0 : 1))
          .map((x) => x.reading),
        ...item[2].split(' '),
      ]),
    ].join(' ')
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
        `WaniKani Meaning:\n${
          wkItem.data.meaning_mnemonic
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
    for (const [radical, words] of wordsWithRadical)
      item[4].push(`${radical}: ${words}`)
    item[5].wk = wkItem.data.level.toString()
  }
  // This is optimizable but i'm lazy
  for (let index = 0; index < dictionary.kanji.length; index++) {
    const item = dictionary.kanji[index]!
    console.log(
      `2. ${index}/${dictionary.kanji.length} ${Math.round((index / dictionary.kanji.length) * 100)}%`,
    )
    const sameOnyomi = []
    const sameKunyomi = []
    const sameMeaning = []
    for (const item2 of dictionary.kanji) {
      if (item[0] === item2[0]) continue
      const on1 = item[1].split(' ').filter(Boolean)
      const on2 = new Set(item2[1].split(' ').filter(Boolean))
      const kun1 = item[2].split(' ').filter(Boolean)
      const kun2 = new Set(item2[2].split(' ').filter(Boolean))
      const r1 = item[4].filter((x) => x && !x.includes(':'))
      const r2 = new Set(item2[4].filter((x) => x && !x.includes(':')))
      if (on1.some((x) => on2.has(x))) sameOnyomi.push(item2[0])
      if (kun1.some((x) => kun2.has(x))) sameKunyomi.push(item2[0])
      if (r1.some((x) => r2.has(x))) sameMeaning.push(item2[0])
    }
    if (sameMeaning.length > 0) item[4].push('Meaning: ' + sameMeaning.join(''))
    if (sameKunyomi.length > 0) item[4].push('Kunyomi: ' + sameKunyomi.join(''))
    if (sameOnyomi.length > 0) item[4].push('Onyomi: ' + sameOnyomi.join(''))
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
