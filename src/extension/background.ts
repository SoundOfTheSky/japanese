import { noop, Semaphore } from '@softsky/utils'
import __wbg_init, {
  Tokenizer,
  TokenizerBuilder,
  loadDictionaryFromBytes,
} from 'lindera-wasm-web'
import {
  downloadDictionary,
  listDictionaries,
  loadDictionaryFiles,
} from 'lindera-wasm-web/opfs'

import { kanaToRomaji, katakanaToHiragana } from './japanese'
import {
  DICTIONARIES,
  Dictionary,
  FuriganaMode,
  request,
  State,
  SyncStorage,
  TokenizeResult,
} from './shared'

type Message =
  | TokenizeMessage
  | StorageGetMessage
  | StorageSetMessage
  | StateGetMessage
  | StateSetMessage
  | GetKanjiIntervalsMessage
type TokenizeMessage = {
  type: 'tokenize'
  text: string
}
type StorageGetMessage = {
  type: 'storageGet'
}
type StorageSetMessage = {
  type: 'storageSet'
  data: Partial<SyncStorage>
}
type StateGetMessage = {
  type: 'stateGet'
}
type StateSetMessage = {
  type: 'stateSet'
  data: Partial<State>
}
type GetKanjiIntervalsMessage = {
  type: 'getKanjiIntervals'
}

const ankiIntervals = new Map<string, number>()
const ankiKanjiIntervals = new Map<string, number>()
const pitch = new Map<string, number>()
const ankiSemaphore = new Semaphore(1)
let lastAnkiIntervalsUpdate = 0
let storage: SyncStorage
const state: State = {
  ankiVocabAvailable: false,
  ankiKanjiAvailable: false,
  isTokenizerReady: false,
}
let tokenizer: Tokenizer
let isWBGInit = false
void initialize()

chrome.runtime.onMessage.addListener(async (message: Message) => {
  // Wait for initialization
  switch (message.type) {
    case 'tokenize':
      return tokenize(message.text)
    case 'storageGet':
      return chrome.storage.sync.get()
    case 'storageSet':
      return storageSet(message.data)
    case 'stateGet':
      return state
    case 'stateSet':
      return stateSet(message.data)
    case 'getKanjiIntervals':
      return getKanjiIntervals()
  }
})

async function getKanjiIntervals() {
  await updateAnkiIntervals()
  if (state.ankiKanjiAvailable) return ankiKanjiIntervals
}

function utf8Length(code: number): number {
  if (code <= 0x7f) return 1
  if (code <= 0x7ff) return 2
  if (code <= 0xffff) return 3
  return 4
}

/** Run tokenizer */
async function tokenize(text: string): Promise<TokenizeResult[]> {
  if (!state.isTokenizerReady) throw new Error('Tokenizer is not ready')
  await updateAnkiIntervals()
  let byteIndex = 0
  let charIndex = 0
  const dict = DICTIONARIES[storage.dictionary]
  return tokenizer.tokenize(text).map((token) => {
    while (byteIndex < token.byte_start) {
      const code = text.codePointAt(charIndex)!
      byteIndex += utf8Length(code)
      charIndex += code > 0xffff ? 2 : 1
    }
    const tokenSurface = token.surface
    const result: TokenizeResult = {
      text: tokenSurface,
      position: charIndex,
    }
    const tokenDetailsReading = token.details[dict.reading]!
    /**
     * Convert reading to furigana.
     * Strip out common parts between reading and text at the start and the end.
     */
    if (storage.furigana !== FuriganaMode.NONE) {
      let textReading = tokenSurface
      let tokenReading = tokenDetailsReading
      if (storage.furigana === FuriganaMode.HIRAGANA) {
        textReading = katakanaToHiragana(textReading)
        tokenReading = katakanaToHiragana(tokenReading)
      } else if (storage.furigana === FuriganaMode.ROMAJI) {
        textReading = kanaToRomaji(textReading)
        tokenReading = kanaToRomaji(tokenReading)
      }
      const l = tokenReading.length
      let startIndex = 0
      let endIndex = l - 1
      let textEndIndex = textReading.length - 1
      for (; startIndex < l; startIndex++)
        if (tokenReading[startIndex] !== textReading[startIndex]) break
      for (; endIndex !== -1; endIndex--, textEndIndex--)
        if (tokenReading[endIndex] !== textReading[textEndIndex]) break
      if (startIndex < endIndex)
        result.furigana = {
          text: tokenReading.slice(startIndex, endIndex + 1),
          start: startIndex,
          end: textEndIndex + 1,
        }
    }

    // Anki interval
    if (state.ankiVocabAvailable) {
      let max = -1
      for (let i = 0; i < dict.forms.length; i++) {
        const tokenForm = token.details[dict.forms[i]!]!
        if (tokenForm !== '*') {
          const n = ankiIntervals.get(tokenForm) ?? -1
          if (n > max) max = n
        }
      }
      result.interval = max
    }

    result.pitch = pitch.get(tokenDetailsReading)

    return result
  })
}

/** Make request to AnkiConnect */
async function ankiRequest<T>(body: any, ankiUrl: string): Promise<T> {
  const json = await request<{
    result: T
    error: string | null
  }>(ankiUrl, {
    method: 'POST',
    body: JSON.stringify({
      version: 6,
      ...body,
    }),
  })
  if (json.error) throw new Error(json.error)
  return json.result
}

/** Update the Anki intervals map. Cooldown 1 minute */
async function updateAnkiIntervals() {
  // Prevent multiple simultaneous updates
  await ankiSemaphore.acquire()
  try {
    const now = Date.now()
    // Cooldown
    if (now - lastAnkiIntervalsUpdate < 60000) return
    if (
      storage.ankiQuery &&
      storage.ankiExpressionField &&
      storage.ankiEnabled
    ) {
      try {
        const cards = await ankiRequest<
          { interval: number; fields: Record<string, { value: string }> }[]
        >(
          {
            action: 'cardsInfo',
            params: {
              cards: await ankiRequest<number[]>(
                {
                  action: 'findCards',
                  params: {
                    query: storage.ankiQuery,
                  },
                },
                storage.ankiUrl,
              ),
            },
          },
          storage.ankiUrl,
        )
        ankiIntervals.clear()
        for (let index = 0; index < cards.length; index++) {
          const card = cards[index]!
          ankiIntervals.set(
            card.fields[storage.ankiExpressionField]!.value,
            card.interval,
          )
        }
        await stateSet({ ankiVocabAvailable: true })
      } catch {
        await stateSet({ ankiVocabAvailable: false })
      }
    } else await stateSet({ ankiVocabAvailable: false })
    if (
      storage.ankiKanjiQuery &&
      storage.ankiKanjiField &&
      storage.ankiKanjiEnabled
    ) {
      try {
        const cards = await ankiRequest<
          { interval: number; fields: Record<string, { value: string }> }[]
        >(
          {
            action: 'cardsInfo',
            params: {
              cards: await ankiRequest<number[]>(
                {
                  action: 'findCards',
                  params: {
                    query: storage.ankiKanjiQuery,
                  },
                },
                storage.ankiUrl,
              ),
            },
          },
          storage.ankiUrl,
        )
        ankiKanjiIntervals.clear()
        for (let index = 0; index < cards.length; index++) {
          const card = cards[index]!
          ankiKanjiIntervals.set(
            card.fields[storage.ankiKanjiField]!.value,
            card.interval,
          )
        }
        await stateSet({ ankiKanjiAvailable: true })
      } catch {
        await stateSet({ ankiKanjiAvailable: false })
      }
    } else await stateSet({ ankiKanjiAvailable: false })
    lastAnkiIntervalsUpdate = now
  } finally {
    ankiSemaphore.release()
  }
}

/** Set data to storage */
async function storageSet(data: Partial<SyncStorage>) {
  if (data.dictionary && storage.dictionary !== data.dictionary)
    void setDictionary(data.dictionary)
  Object.assign(storage, data)
  await chrome.storage.sync.set(data)
  lastAnkiIntervalsUpdate = 0
  await updateAnkiIntervals()
  const tabs = await chrome.tabs.query({})
  for (let index = 0; index < tabs.length; index++) {
    const id = tabs[index]!.id
    if (id !== undefined)
      void chrome.tabs.sendMessage(id, { type: 'storage', storage }).catch(noop)
  }
  void chrome.runtime.sendMessage({ type: 'storage', storage }).catch(noop)
}

/** Set data to state */
async function stateSet(data: Partial<State>) {
  Object.assign(state, data)
  const tabs = await chrome.tabs.query({})
  for (let index = 0; index < tabs.length; index++) {
    const id = tabs[index]!.id
    if (id !== undefined)
      void chrome.tabs.sendMessage(id, { type: 'state', state }).catch(noop)
  }
  void chrome.runtime.sendMessage({ type: 'state', state }).catch(noop)
}

async function initializeStorage() {
  const DEFAULT_DATA: SyncStorage = {
    ankiEnabled: true,
    ankiExpressionField: 'Expression',
    ankiKanjiEnabled: true,
    ankiKanjiField: 'Kanji',
    ankiKanjiQuery: '"note:JP Kanji"',
    ankiQuery: '"note:JP Vocab"',
    ankiUrl: 'http://127.0.0.1:8765',
    enabled: true,
    furigana: FuriganaMode.NONE,
    dictionary: Dictionary.UNIDIC,
  }
  storage = await chrome.storage.sync.get<SyncStorage>()
  for (const key in DEFAULT_DATA)
    if (
      typeof storage[key as keyof SyncStorage] !==
      typeof DEFAULT_DATA[key as keyof SyncStorage]
    )
      storage[key as 'enabled'] = DEFAULT_DATA[key as 'enabled']
  await chrome.storage.sync.set<SyncStorage>(storage)
}

async function initializePitchAccents() {
  const pitchText = await fetch(chrome.runtime.getURL('assets/accents.txt'))
    .then((res) => res.text())
    .then((text) => text.split('\n'))
  for (let index = 0; index < pitchText.length; index++) {
    const [kanji, hiragana, pitchValue] = pitchText[index]!.split('	')
    const pitchValueNumber = parseInt(pitchValue!)
    pitch.set(kanji!, pitchValueNumber)
    pitch.set(hiragana!, pitchValueNumber)
  }
}

async function initializeWBG() {
  isWBGInit = false
  await __wbg_init()
  isWBGInit = true
  await setDictionary(storage.dictionary)
}

async function setDictionary(name: Dictionary) {
  if (!isWBGInit) return
  await stateSet({ isTokenizerReady: false })
  const dictMeta = DICTIONARIES[name]
  const dictionaries = await listDictionaries()
  if (!dictionaries.includes(name)) await downloadDictionary(dictMeta.url, name)
  // load and build tokenizer
  const files = await loadDictionaryFiles(name)
  const dict = loadDictionaryFromBytes(
    files.metadata,
    files.dictDa,
    files.dictVals,
    files.dictWordsIdx,
    files.dictWords,
    files.matrixMtx,
    files.charDef,
    files.unk,
  )
  const builder = new TokenizerBuilder()
  builder.setDictionaryInstance(dict)
  builder.setMode('normal')
  tokenizer = builder.build()
  await stateSet({ isTokenizerReady: true })
}

function initialize() {
  return Promise.all([
    initializeStorage(),
    initializePitchAccents(),
    initializeWBG(),
  ])
}
