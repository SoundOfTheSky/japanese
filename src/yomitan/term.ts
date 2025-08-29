import { cleanupHTML } from '../utilities'
import { cutUnnecessary, WK, WKKana, WKObject, WKVocab } from '../wanikani'

import {
  DefinitionContent,
  StructuredContent,
  StructuredContentText,
} from './types'
import YomitanDictionary from './yomitan-dictionary'

export function generateTerms(dictionary: YomitanDictionary) {
  console.log('Building term bank...')
  const WKMap = new Map<string, WKObject<WKVocab | WKKana>>()
  const subjects = []
  for (const subject of WK) {
    if (
      (subject.object !== 'vocabulary' &&
        subject.object !== 'kana_vocabulary') ||
      subject.data.hidden_at
    )
      continue
    const vocab = subject as WKObject<WKVocab | WKKana>
    WKMap.set(vocab.data.characters, vocab)
    subjects.push(vocab)
  }

  term: for (const item of dictionary.term) {
    const wkItem = WKMap.get(item[0]) ?? WKMap.get(item[1])
    if (!wkItem) continue
    let content = (item[5][0] as DefinitionContent).content
    while (!Array.isArray(content)) {
      if (typeof content !== 'object') continue term
      content = (content as unknown as DefinitionContent).content
    }
    content.unshift({
      tag: 'span',
      content: `WK ${wkItem.data.level}`,
      title: 'WaniKani level',
      style: {
        fontWeight: 'bold',
        fontSize: '0.8em',
        color: '#FFF',
        backgroundColor: '#565656',
        verticalAlign: 'text-bottom',
        borderRadius: '0.3em',
        marginRight: '0.25em',
        padding: '0.2em 0.3em',
        wordBreak: 'keep-all',
        cursor: 'help',
      },
    })
    const meaning = WKToStructure(
      'wkm',
      'WaniKani Meaning Mnemonic',
      wkItem.data.meaning_mnemonic,
    )
    if (meaning) content.push(meaning)
    const readingWKMnemonic = (wkItem.data as WKVocab).reading_mnemonic
    if (readingWKMnemonic) {
      const reading = WKToStructure(
        'wkr',
        'WaniKani Reading Mnemonic',
        readingWKMnemonic,
      )
      if (reading) content.push(reading)
    }
  }
}
function WKToStructure(
  type: string,
  title: string,
  text: string,
): StructuredContent | undefined {
  const content: StructuredContentText[] = [
    {
      tag: 'span',
      content: '',
    },
  ]
  let mode = 0
  let tag = ''
  text = cutUnnecessary(cleanupHTML(text))
  if (!text) return
  for (let index = 0; index < text.length; index++) {
    const char = text[index]!
    if (mode === 0 && char === '<') {
      mode = 1
      tag = ''
    } else if (mode === 1) {
      if (char === '>') {
        if (['radical', 'kanji', 'vocabulary'].includes(tag))
          content.push({
            tag: 'span',
            content: '',
            style: {
              backgroundColor: '#0AF',
              color: '#FFF',
              padding: '0px 2px',
              borderRadius: '2px',
            },
          })
        else if (tag === 'meaning')
          content.push({
            tag: 'span',
            content: '',
            style: {
              backgroundColor: '#0AF',
              color: '#FFF',
              padding: '0px 2px',
              borderRadius: '2px',
            },
          })
        else if (tag === 'reading')
          content.push({
            tag: 'span',
            content: '',
            style: {
              backgroundColor: '#F0A',
              color: '#FFF',
              padding: '0px 2px',
              borderRadius: '2px',
            },
          })
        mode = 2
      } else tag += char
    } else if (mode === 2 && char === '<') mode = 3
    else if (mode === 3) {
      if (char === '>') {
        mode = 0
        content.push({
          tag: 'span',
          content: '',
        })
      }
    } else (content.at(-1)!.content as string) += char
  }
  return {
    content: [
      {
        content: title,
        data: {
          type: '',
          class: 'extra-label',
        },
        tag: 'div',
      },
      {
        content,
        data: {
          type: '',
          class: 'extra-content',
        },
        tag: 'div',
      },
    ],
    data: {
      type: '',
      class: 'extra-box',
      content: type,
    },
    tag: 'div',
  }
}
