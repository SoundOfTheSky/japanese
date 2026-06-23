export type YomitanTokenizerResult = {
  id: string
  source: string
  dictionary: unknown
  index: number
  content: YomitanTokenizerItem[][]
}[]

export type YomitanTokenizerItem = {
  text: string
  reading: string
  headwords?: YomitanTokenizerHeadword[][]
}

export type YomitanTokenizerHeadword = {
  term: string
  reading: string
  sources: {
    deinflectedText: string
    isPrimary: boolean
    matchSource: string
    matchType: string
    originalText: string
    transformedText: string
  }[]
  frequencies?: {
    index: number
    headwordIndex: number
    dictionary: string
    dictionaryIndex: number
    dictionaryAlias: string
    hasReading: boolean
    frequencyMode: string
    frequency: number
    displayValue: string
    displayValueParsed: boolean
  }[]
}

export type TokenizeResult = {
  text: string
  position: number
  pitch?: number
  furigana?: {
    text: string
    start: number
    end: number
  }
  interval?: number
}

export enum FuriganaMode {
  NONE = 0,
  HIRAGANA = 1,
  KATAKANA = 2,
  ROMAJI = 3,
}

export enum Dictionary {
  UNIDIC = 'unidic',
  IPADIC = 'ipadic',
  IPADIC_NEOLOGD = 'ipadic-neologd',
}

export type SyncStorage = {
  enabled: boolean
  ankiUrl: string
  ankiQuery: string
  ankiExpressionField: string
  ankiKanjiQuery: string
  ankiKanjiField: string
  ankiEnabled: boolean
  ankiKanjiEnabled: boolean
  furigana: FuriganaMode
  dictionary: Dictionary
}

export type State = {
  ankiVocabAvailable: boolean
  ankiKanjiAvailable: boolean
  isTokenizerReady: boolean
}

export type KanjiIntervals = Map<string, number> | undefined

export const DICTIONARIES: Record<
  Dictionary,
  { title: string; url: string; reading: number; forms: number[] }
> = {
  [Dictionary.UNIDIC]: {
    title: 'unidic (50 MB)',
    url: 'https://github.com/lindera/lindera/releases/download/v4.0.0/lindera-unidic-4.0.0.zip',
    reading: 9,
    forms: [3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
  [Dictionary.IPADIC]: {
    title: 'ipadic (15 MB)',
    url: 'https://github.com/lindera/lindera/releases/download/v4.0.0/lindera-ipadic-4.0.0.zip',
    reading: 7,
    forms: [2, 3, 4, 5, 6, 7, 8],
  },
  [Dictionary.IPADIC_NEOLOGD]: {
    title: 'ipadic-neologd (291 MB)',
    url: 'https://github.com/lindera/lindera/releases/download/v4.0.0/lindera-ipadic-neologd-4.0.0.zip',
    reading: 7,
    forms: [2, 3, 4, 5, 6, 7, 8],
  },
}
/** Get kanji intervals */
export function getKanjiIntervals(): Promise<KanjiIntervals> {
  return chrome.runtime.sendMessage({
    type: 'getKanjiIntervals',
  })
}

/** Run tokenizer */
export function tokenize(text: string): Promise<TokenizeResult[]> {
  return chrome.runtime.sendMessage({
    type: 'tokenize',
    text,
  })
}

/** Check connection to services */
export function checkConnection(): Promise<boolean> {
  return chrome.runtime.sendMessage({
    type: 'checkConnection',
  })
}

/** Get data from storage */
export function storageGet<T extends keyof SyncStorage>(): Promise<
  Pick<SyncStorage, T>
> {
  return chrome.runtime.sendMessage({
    type: 'storageGet',
  })
}

/** Set data to storage */
export function storageSet(data: Partial<SyncStorage>) {
  return chrome.runtime.sendMessage({
    type: 'storageSet',
    data,
  })
}

/** Get data from storage */
export function stateGet(): Promise<State> {
  return chrome.runtime.sendMessage({
    type: 'stateGet',
  })
}

/** Request with timeout and auto json */
export function request<T>(
  resource: string,
  options: RequestInit = {},
  ms = 15000,
): Promise<T> {
  const controller = new AbortController()
  const id = setTimeout(() => {
    controller.abort()
  }, ms)
  return fetch(resource, { signal: controller.signal, ...options })
    .then((x) => x.json())
    .finally(() => {
      clearTimeout(id)
    })
}
