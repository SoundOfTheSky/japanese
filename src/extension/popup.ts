import { Dictionary, State, stateGet, storageGet, storageSet } from './shared'

const $enabled = document.getElementById('enabled') as HTMLInputElement
const $ankiInput = document.getElementById('anki-url') as HTMLInputElement
const $ankiQueryInput = document.getElementById(
  'anki-query',
) as HTMLInputElement
const $ankiExpressionFieldInput = document.getElementById(
  'anki-expression-field',
) as HTMLInputElement
const $ankiKanjiQueryInput = document.getElementById(
  'anki-kanji-query',
) as HTMLInputElement
const $ankiKanjiFieldInput = document.getElementById(
  'anki-kanji-field',
) as HTMLInputElement
const $ankiEnabled = document.getElementById('anki-enabled') as HTMLInputElement
const $ankiKanjiEnabled = document.getElementById(
  'anki-kanji-enabled',
) as HTMLInputElement
const $furiganaField = document.getElementById('furigana') as HTMLSelectElement
const $dictionaryField = document.getElementById(
  'dictionary',
) as HTMLSelectElement
const $dictionaryStatus = document.getElementById('dictionary-status')!
const $ankiVocabStatus = document.getElementById('anki-vocab-status')!
const $ankiKanjiStatus = document.getElementById('anki-kanji-status')!
for (const $input of [
  $ankiEnabled,
  $ankiExpressionFieldInput,
  $ankiInput,
  $ankiKanjiEnabled,
  $ankiKanjiFieldInput,
  $ankiKanjiQueryInput,
  $ankiQueryInput,
  $enabled,
  $furiganaField,
  $dictionaryField,
])
  $input.addEventListener('change', update)

const data = await storageGet()
$ankiEnabled.checked = data.ankiEnabled
$ankiExpressionFieldInput.value = data.ankiExpressionField
$ankiInput.value = data.ankiUrl
$ankiKanjiEnabled.checked = data.ankiKanjiEnabled
$ankiKanjiFieldInput.value = data.ankiKanjiField
$ankiKanjiQueryInput.value = data.ankiKanjiQuery
$ankiQueryInput.value = data.ankiQuery
$enabled.checked = data.enabled
$furiganaField.value = data.furigana.toString()
$dictionaryField.value = data.dictionary
updateUI()
stateUpdated(await stateGet())

chrome.runtime.onMessage.addListener(
  (message: { type: string; state: State }) => {
    if (message.type === 'state') stateUpdated(message.state)
    return true
  },
)

async function update() {
  updateUI()
  await storageSet({
    ankiUrl: $ankiInput.value.trim(),
    ankiQuery: $ankiQueryInput.value.trim(),
    ankiExpressionField: $ankiExpressionFieldInput.value.trim(),
    ankiKanjiQuery: $ankiKanjiQueryInput.value.trim(),
    ankiKanjiField: $ankiKanjiFieldInput.value.trim(),
    ankiEnabled: $ankiEnabled.checked,
    ankiKanjiEnabled: $ankiKanjiEnabled.checked,
    furigana: +$furiganaField.value,
    dictionary: $dictionaryField.value as Dictionary,
    enabled: $enabled.checked,
  })
}

function updateUI() {
  if ($enabled.checked) {
    for (const x of [
      ...document.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
        'input, select',
      ),
    ].slice(1))
      x.disabled = false
    $ankiQueryInput.disabled = !$ankiEnabled.checked
    $ankiExpressionFieldInput.disabled = !$ankiEnabled.checked
    $ankiKanjiQueryInput.disabled = !$ankiKanjiEnabled.checked
    $ankiKanjiFieldInput.disabled = !$ankiKanjiEnabled.checked
  } else
    for (const x of [
      ...document.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
        'input, select',
      ),
    ].slice(1))
      x.disabled = true
}

function stateUpdated(state: State) {
  updateBulb($ankiVocabStatus, state.ankiVocabAvailable)
  updateBulb($dictionaryStatus, state.isTokenizerReady)
  updateBulb($ankiKanjiStatus, state.ankiKanjiAvailable)
}

function updateBulb($bulb: HTMLElement, status: boolean | null) {
  $bulb.style.removeProperty('background-color')
  if (status === null) return
  $bulb.style.backgroundColor = status ? 'lawngreen' : 'red'
}
