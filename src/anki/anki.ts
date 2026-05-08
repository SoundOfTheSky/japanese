export function ankiInvoke<T>(action: string, params = {}) {
  return fetch('http://localhost:8765', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      action,
      version: 6,
      params,
    }),
  })
    .then((x) => x.json() as Promise<{ result: T; error?: string }>)
    .then((data) => {
      if (data.error) throw new Error(data.error)
      return data.result
    })
}

export function ankiUpdateNoteFields<T extends Record<string, string>>(
  id: number,
  fields: Partial<T>,
) {
  return ankiInvoke('updateNoteFields', {
    note: {
      id,
      fields,
    },
  })
}

export function ankiFindNotes(query: string) {
  return ankiInvoke<number[]>('findNotes', { query })
}

export function ankiSetCardDue(card: number, due: number) {
  return ankiInvoke('setSpecificValueOfCard', {
    card,
    keys: ['due'],
    newValues: [due],
  })
}

export function ankiAddNote(
  deckName: string,
  modelName: string,
  fields: Record<string, string>,
) {
  return ankiInvoke<number | null>('addNote', {
    note: {
      deckName,
      modelName,
      fields,
    },
  })
}

export function ankiUpdateNote(id: number, fields: Record<string, string>) {
  return ankiInvoke<number | null>('addNote', {
    note: {
      id,
      fields,
    },
  })
}

export function ankiDeleteNotes(notes: number[]) {
  return ankiInvoke('deleteNotes', { notes })
}

export function ankiNotesInfo(notes: number[]) {
  return ankiInvoke<
    {
      noteId: number
      profile: string
      modelName: string
      tags: string[]
      fields: Record<string, { value: string; order: number }>
      mod: string
      cards: number[]
    }[]
  >('notesInfo', { notes })
}

export function ankiCardsInfo(cards: number[]) {
  return ankiInvoke<
    {
      answer: string
      question: string
      deckName: string
      modelName: string
      fieldOrder: number
      fields: Record<string, { value: string; order: number }>
      css: string
      cardId: number
      interval: number
      note: number
      ord: number
      type: 0 | 1
      queue: number
      due: number
      reps: number
      lapses: number
      left: number
      mod: number
    }[]
  >('cardsInfo', { cards })
}
