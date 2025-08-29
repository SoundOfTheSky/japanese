import { appendFile } from 'node:fs/promises'

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
  revision: '1.6.0-' + new Date().toISOString().split('T')[0],
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
await dictionary.merge(
  'bccwj',
  'https://github.com/toasted-nutbread/yomichan-bccwj-frequency-dictionary/releases/latest/download/BCCWJ-LUW.zip',
)
await dictionary.merge('アクセント辞典v2', './dist/アクセント辞典v2.zip')

// === Add css ===
await appendFile(
  'dist/Sky/styles.css',
  `
div[data-sc-content="wkm"] {
  border-color: #0AF;
  background-color: color-mix(in srgb, #0AF 5%, transparent);
}
div[data-sc-content="wkr"] {
  border-color: #F0A;
  background-color: color-mix(in srgb, #F0A 5%, transparent);
}
  `,
)

// === Sort by popularity ===
dictionary.kanji.sort(
  (a, b) =>
    (a[5].freq ? +a[5].freq : Infinity) - (b[5].freq ? +b[5].freq : Infinity),
)
const termFrequence = new Map<string, number>()
// Build map for term frequency
for (const termMeta of dictionary.term_meta) {
  if (termMeta[1] !== 'freq') continue
  termFrequence.set(
    termMeta[0],
    typeof termMeta[2] === 'object'
      ? 'frequency' in termMeta[2]
        ? +termMeta[2].frequency
        : termMeta[2].value
      : +termMeta[2],
  )
}
dictionary.term.sort(
  (a, b) =>
    (termFrequence.get(a[0]) ?? Infinity) -
    (termFrequence.get(b[0]) ?? Infinity),
)

dictionary.tag.push(['wk', 'misc', 0, 'WaniKani level', 0])
generateTerms(dictionary)
generateKanji(dictionary)

await dictionary.save()
