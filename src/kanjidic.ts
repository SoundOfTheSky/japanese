import { file } from 'bun'

import { DictionaryKanjiBankV3 } from './yomitan/types'

export const kanjidicBank: DictionaryKanjiBankV3 = []
export const kanjidicMap = new Map<string, DictionaryKanjiBankV3[0]>()

for (let index = 1; ; index++) {
  if (
    !(await file(`./assets/KANJIDIC_english/kanji_bank_${index}.json`).exists())
  )
    break
  const batch = (await file(
    `./assets/KANJIDIC_english/kanji_bank_${index}.json`,
  ).json()) as DictionaryKanjiBankV3
  for (let index = 0; index < batch.length; index++) {
    const term = batch[index]!
    kanjidicBank.push(term)
    kanjidicMap.set(term[0], term)
  }
}
