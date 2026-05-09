import { JPDBKanjiMap } from '../jpdb'
import { KANJI_TEXTBOOK, KANJI_TEXTBOOK_MAP } from '../kanji-textbook'
import { kanjidicMap } from '../kanjidic'
import { getKanjiVG, KanjiVG } from '../kanjivg'
import { cleanupHTML } from '../utilities'
import {
  cutUnnecessary,
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
function buildKVGPartsTree(
  kanji: string,
  source: KanjiVG | 'wk' | 'jpdb',
  includeInitial?: boolean,
) {
  let text = ''
  const note = processed.get(kanji)
  const wkKanji = source === 'wk' && getWKKanjiComposed(kanji)
  const jpdb = source === 'jpdb' && JPDBKanjiMap.get(kanji)?.composed
  const childFree =
    (source === 'wk' && !wkKanji) ||
    (source === 'jpdb' && !jpdb) ||
    (typeof source === 'object' && source.children.length === 0)
  if (includeInitial) {
    text += kanji
    if (typeof source === 'object' && source.original)
      text += ` [${source.original}]`
    if (note) text += ` - ${note.Meaning}`
  } else if (childFree) return ''

  if (!childFree) {
    text += '<ul>'
    if (wkKanji)
      for (const child of wkKanji)
        text += `<li>${buildKVGPartsTree(child, 'wk', true)}</li>`
    else if (jpdb)
      for (const child of jpdb)
        text += `<li>${buildKVGPartsTree(child, 'jpdb', true)}</li>`
    else
      for (const child of (source as KanjiVG).children)
        text += `<li>${buildKVGPartsTree(child.element, child, true)}</li>`
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
    PartsWK: '',
    PartsJPDB: '',
    Meaning: [...new Set(meanings.map((x) => x.toLowerCase().trim()))].join(
      '; ',
    ),
    Mnemonic: note?.fields.Mnemonic?.value ?? '',
    MnemonicWK: (
      cleanupHTML(cutUnnecessary(wkRadical?.data.meaning_mnemonic ?? '')) ||
      cleanupHTML(cutUnnecessary(wkKanji?.data.meaning_mnemonic ?? ''))
    )
      .replaceAll('<radical>', '<span class="wk-radical">')
      .replaceAll('</radical>', '</span>')
      .replaceAll('<kanji>', '<span class="wk-kanji">')
      .replaceAll('</kanji>', '</span>')
      .replaceAll('<vocabulary>', '<span class="wk-vocabulary">')
      .replaceAll('</vocabulary>', '</span>')
      .replaceAll('<meaning>', '<span class="wk-meaning">')
      .replaceAll('</meaning>', '</span>')
      .replaceAll('<reading>', '<span class="wk-reading">')
      .replaceAll('</reading>', '</span>'),
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
  console.log(note ? 'Updating' : 'Creating', size, kanji)
  if (kvg) {
    for (const children of kvg.children) await processKanji(children.element)
    noteFields.Parts = buildKVGPartsTree(kanji, kvg)
  }
  for (const char of JPDBKanjiMap.get(kanji)?.composed ?? '')
    await processKanji(char)
  noteFields.PartsJPDB = buildKVGPartsTree(kanji, 'jpdb')
  for (const char of getWKKanjiComposed(kanji)) await processKanji(char)
  noteFields.PartsWK = buildKVGPartsTree(kanji, 'wk')
  noteFields.Order = size.toString()
  size++
  if (note) await ankiUpdateNoteFields(note.noteId, noteFields)
  else await ankiAddNote('JP Kanji', 'JP Kanji', noteFields)
}

for (let index = 0; index < KANJI_TEXTBOOK.length; index++) {
  console.log(`${index}/${KANJI_TEXTBOOK.length}`)
  await processKanji(KANJI_TEXTBOOK[index]!.kanji)
}

function getWKKanjiComposed(kanji: string) {
  return (
    WKKanjiMap.get(kanji)
      ?.data.component_subject_ids.map(
        (x) =>
          (WKIdMap.get(x) as WKObject<WKRadical> | undefined)?.data.characters,
      )
      .filter((x) => x && x !== kanji)
      .join('') ?? ''
  )
}
