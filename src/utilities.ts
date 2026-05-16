const punctuation = new Set(['.', ':', '!', '?', ';'])
export function removeWholeSentenceWithSubstring(
  text: string,
  substring: string,
) {
  while (true) {
    let left = text.indexOf(substring) - 1
    if (left === -2) return text
    let right = left + substring.length
    while (left !== -1 && !punctuation.has(text[left]!)) left--
    while (right !== text.length && !punctuation.has(text[right]!)) right++
    text = (text.slice(0, left + 1) + text.slice(right + 1)).trim()
  }
}

export function cleanupHTML(
  text: string,
  whitelist: string[] = [
    'radical',
    'kanji',
    'vocabulary',
    'meaning',
    'reading',
  ],
) {
  text = text
    .replaceAll('\n', ' ')
    .replaceAll('&nbsp;', ' ')
    .replaceAll(/<(\S+)(>|\s[^>]*>)\s*<\/\1>/g, '') // empty tags
    .trim() // final trim
  return [...text.matchAll(/<.+?>/g)]
    .map(
      (element) =>
        [element[0].slice(1, -1).split(' ')[0], element.index] as const,
    )
    .filter(([t]) => whitelist.every((w) => t !== w && t !== `/${w}`))
    .reverse()
    .reduce(
      (accumulator, [, index]) =>
        accumulator.slice(0, index) +
        accumulator.slice(accumulator.indexOf('>', index) + 1),
      text,
    )
}

export function extractKanji(text: string): string[] {
  return text.match(/\p{Script=Han}/gu) ?? []
}
