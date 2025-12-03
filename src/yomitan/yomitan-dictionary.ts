import { mkdirSync, rmSync } from 'node:fs'
import { cp, readdir, rename } from 'node:fs/promises'
import Path from 'node:path'

import { chunk } from '@softsky/utils'
import { $, file } from 'bun'

import {
  DictionaryIndex,
  DictionaryKanjiBankV3,
  DictionaryKanjiMetaBankV3,
  DictionaryTagBankV3,
  DictionaryTermBankV3,
  DictionaryTermMetaBankV3,
} from './types'

type Bank = 'term' | 'tag' | 'kanji' | 'kanji_meta' | 'term_meta'
const BANKS: Bank[] = ['term', 'tag', 'kanji', 'kanji_meta', 'term_meta']

export default class YomitanDictionary {
  public term: DictionaryTermBankV3 = []
  public tag: DictionaryTagBankV3 = []
  public kanji: DictionaryKanjiBankV3 = []
  public kanji_meta: DictionaryKanjiMetaBankV3 = []
  public term_meta: DictionaryTermMetaBankV3 = []

  public constructor(public index: DictionaryIndex) {
    rmSync(Path.join('assets', index.title), {
      force: true,
      recursive: true,
    })
    mkdirSync(Path.join('assets', index.title), {
      recursive: true,
    })
    rmSync(Path.join('dist', index.title) + '.zip', {
      force: true,
    })
  }

  public async save() {
    const path = Path.join('assets', this.index.title)
    const indexPath = Path.join(path, 'index.json')
    await file(indexPath).write(JSON.stringify(this.index))
    for (const bank of BANKS) await this.saveBank(bank)
    await $`7z a -tzip -mx=9 ../../dist/${this.index.title}.zip ./*`.cwd(path)
    await rename(indexPath, Path.join('dist', this.index.title + '.json'))
    // rmSync(path, {
    //   force: true,
    //   recursive: true,
    // })
  }

  public async merge(name: string) {
    const path = Path.join('assets', name)
    const indexPath = Path.join(path, 'index.json')
    if (!(await file(indexPath).exists())) {
      console.log(`Unzipping ${name}...`)
      await $`unzip ${path}.zip -d ${path}`
      rmSync(path + '.zip', {
        force: true,
      })
    }
    console.log(`Merging ${name}...`)
    for (const bank of BANKS) await this.mergeBanks(name, bank)
    for (const fileName of await readdir(path)) {
      if (fileName.endsWith('.json')) continue
      await cp(
        Path.join(path, fileName),
        Path.join('assets', this.index.title, fileName),
        {
          recursive: true,
        },
      )
    }
    const index = (await file(indexPath).json()) as DictionaryIndex
    this.index.attribution ??= ''
    this.index.attribution += `\n\n=== ${name} ===\n`
    if (index.attribution) this.index.attribution += index.attribution
  }

  private async mergeBanks(name: string, bankName: Bank) {
    const bank = this[bankName]
    for (let index = 1; ; index++)
      try {
        bank.push(
          ...((await file(
            `assets/${name}/${bankName}_bank_${index}.json`,
          ).json()) as never[]),
        )
      } catch (error) {
        if (
          error instanceof Error &&
          (error as NodeJS.ErrnoException).code === 'ENOENT'
        )
          break
        else throw error
      }
  }

  private async saveBank(bankName: Bank) {
    console.log(`Saving bank ${bankName}...`)
    const parts = chunk(this[bankName] as unknown[], 10_000)
    // const parts = [this[bankName] as unknown[]]
    for (let index = 0; index < parts.length; index++)
      await file(
        Path.join(
          'assets',
          this.index.title,
          `${bankName}_bank_${index + 1}.json`,
        ),
      ).write(JSON.stringify(parts[index]))
  }
}
