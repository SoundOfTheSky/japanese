import { JPDBKanjiMap } from '../jpdb'
import { KANJI_TEXTBOOK, KANJI_TEXTBOOK_MAP } from '../kanji-textbook'
import { kanjidicMap } from '../kanjidic'
import { getKanjiVG, KanjiVG } from '../kanjivg'
import {
  WKIdMap,
  WKKanjiMap,
  WKObject,
  WKRadical,
  WKRadicalMap,
} from '../wanikani'

import {
  ankiAddNote,
  ankiFindNotes,
  ankiNotesInfo,
  ankiUpdateNoteFields,
} from './anki'

type NoteFields = {
  Kanji: string
  Parts: string
  PartsWK: string
  PartsJPDB: string
  Meaning: string
  Vocab: string
  Frequency: string
  Kunyomi: string
  Onyomi: string
  Mnemonic: string
  MnemonicWK: string
  MnemonicJPDB: string
  Order: string
}

const noteIds = await ankiFindNotes('"note:JP Kanji"')
const notes = await ankiNotesInfo(noteIds)
const notesMap = new Map(notes.map((x) => [x.fields.Kanji!.value, x]))

const processed = new Map<string, NoteFields>()
let size = 0
function buildKanjiPartsTree(kvg: KanjiVG, includeInitial?: boolean) {
  let text = ''
  if (includeInitial) {
    text += kvg.element
    if (kvg.original) text += ` [${kvg.original}]`
    const note = processed.get(kvg.element)
    if (note) text += ` - ${note.Meaning}`
  } else if (kvg.children.length === 0) return ''
  if (kvg.children.length !== 0) {
    text += '<ul>'
    for (const child of kvg.children)
      text += `<li>${buildKanjiPartsTree(child, true)}</li>`
    text += '</ul>'
  }
  return text
}

async function processKanji(kanji: string) {
  if (!kanji || processed.has(kanji)) return // Stop infinite cycle
  const note = notesMap.get(kanji)
  const textbook = KANJI_TEXTBOOK_MAP.get(kanji)
  const kanjidic = kanjidicMap.get(kanji)
  const wkKanji = WKKanjiMap.get(kanji)
  const wkRadical = WKRadicalMap.get(kanji)
  const jpdb = JPDBKanjiMap.get(kanji)

  // Aggregate list of meanings from all sources
  const meanings: string[] = []
  if (textbook) meanings.push(...textbook.meaning)
  if (wkRadical)
    meanings.push(
      ...wkRadical.data.meanings.filter((x) => x.primary).map((x) => x.meaning),
    )
  if (wkKanji)
    meanings.push(
      ...wkKanji.data.meanings.filter((x) => x.primary).map((x) => x.meaning),
    )
  if (jpdb?.keyword) meanings.push(jpdb.keyword)
  if (kanjidic) meanings.push(...kanjidic[4])
  if (wkRadical)
    meanings.push(
      ...wkRadical.data.meanings
        .filter((x) => !x.primary)
        .map((x) => x.meaning),
    )
  if (wkKanji)
    meanings.push(
      ...wkKanji.data.meanings.filter((x) => !x.primary).map((x) => x.meaning),
    )

  const noteFields: NoteFields = {
    Kanji: kanji,
    Parts: '',
    PartsWK:
      wkKanji?.data.component_subject_ids
        .map(
          (x) =>
            (WKIdMap.get(x) as WKObject<WKRadical> | undefined)?.data
              .characters,
        )
        .filter((x) => x && x !== kanji)
        .join('') ?? '',
    PartsJPDB: jpdb?.composed ?? '',
    Meaning: [...new Set(meanings.map((x) => x.toLowerCase().trim()))].join(
      '; ',
    ),
    Mnemonic: '',
    MnemonicWK:
      wkRadical?.data.meaning_mnemonic ?? wkKanji?.data.meaning_mnemonic ?? '',
    MnemonicJPDB: jpdb?.mnemonic ?? '',
    Vocab: textbook
      ? `<table><tbody>${textbook.vocabulary
          .map(
            (x) =>
              `<tr><td class="jp">${x.jp}</td><td class="en">${x.en}</td></tr>`,
          )
          .join('\n')}</tbody></table>`
      : '',
    Frequency: kanjidic?.[5].freq ?? jpdb?.frequency ?? '',
    Kunyomi: kanjidic?.[2].split(' ').join('; ') ?? '',
    Onyomi: kanjidic?.[1].split(' ').join('; ') ?? '',
    Order: '',
  }
  processed.set(kanji, noteFields)
  // Add all children
  const kvg = await getKanjiVG(kanji)
  console.log(size, kanji)
  if (kvg) {
    for (const children of kvg.children) await processKanji(children.element)
    noteFields.Parts = buildKanjiPartsTree(kvg)
  }
  for (const char of noteFields.PartsJPDB) await processKanji(char)
  for (const char of noteFields.PartsWK) await processKanji(char)
  noteFields.Order = size.toString()
  size++
  if (note) await ankiUpdateNoteFields(note.noteId, noteFields)
  else await ankiAddNote('JP Kanji', 'JP Kanji', noteFields)
}

for (let index = 0; index < KANJI_TEXTBOOK.length; index++) {
  console.log(`${index}/${KANJI_TEXTBOOK.length}`)
  await processKanji(KANJI_TEXTBOOK[index]!.kanji)
}
