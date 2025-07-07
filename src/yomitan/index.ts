import { file } from 'bun'

import { downloadWK, loadWKFile } from '../wanikani'

import { generateKanji } from './kanji'
import { generateTerms } from './term'
import YomitanDictionary from './yomitan-dictionary'

const dictionary = new YomitanDictionary({
  author: 'SoundOfTheSky',
  description: '',
  downloadUrl:
    'https://github.com/SoundOfTheSky/japanese/raw/refs/heads/main/dist/Sky.zip',
  format: 3,
  indexUrl:
    'https://github.com/SoundOfTheSky/japanese/raw/refs/heads/main/dist/Sky.json',
  isUpdatable: true,
  revision: '1.5.2-' + new Date().toISOString().split('T')[0],
  sequenced: true,
  sourceLanguage: 'ja',
  targetLanguage: 'en',
  title: 'Sky',
  attribution: 'This dictionary simply combines following sources:',
  url: 'https://github.com/SoundOfTheSky/japanese',
})

// === Download assets and merge ===
if (!(await file('assets/WK.json').exists())) await downloadWK()
dictionary.index.attribution += `\n\n=== WaniKani ===\nLink: https://www.wanikani.com\n© Tofugu LLC`
await loadWKFile()
await dictionary.merge(
  'jitendex',
  'https://github.com/stephenmk/stephenmk.github.io/releases/latest/download/jitendex-yomitan.zip',
)
await dictionary.merge(
  'kanjidic',
  'https://github.com/yomidevs/jmdict-yomitan/releases/latest/download/KANJIDIC_english.zip',
)

// === Process ===
dictionary.kanji.sort(
  (a, b) =>
    (a[5].freq ? +a[5].freq : Infinity) - (b[5].freq ? +b[5].freq : Infinity),
)
dictionary.term.sort((a, b) => a[4] - b[4])
dictionary.tag.push(['wk', 'misc', 0, 'WaniKani level', 0])
generateTerms(dictionary)
generateKanji(dictionary)

await dictionary.save()
