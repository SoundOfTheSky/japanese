// ==UserScript==
// @name         JPDB anki export
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Export JPDB page to anki
// @match        https://jpdb.io/kanji/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @connect      localhost

// ==/UserScript==

;(async function () {
  'use strict'

  const statusEl = createStatusUI()

  function ankiInvoke(action, params = {}) {
    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        method: 'POST',
        url: 'http://localhost:8765',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          action,
          version: 6,
          params,
        }),
        onload: function (res) {
          try {
            const data = JSON.parse(res.responseText)
            if (data.error) {
              reject(new Error(data.error))
            } else {
              resolve(data.result)
            }
          } catch (e) {
            reject(e)
          }
        },
        onerror: function (err) {
          reject(err)
        },
      })
    })
  }

  function createStatusUI() {
    const el = document.createElement('div')
    el.id = '__jpdb_anki_status__'
    Object.assign(el.style, {
      position: 'fixed',
      bottom: '16px',
      right: '16px',
      zIndex: 999999,
      padding: '8px',
      borderRadius: '8px',
      color: '#fff',
      background: '#333',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      width: '320px',
      opacity: '0',
      transition: 'opacity 0.15s ease',
    })
    document.body.appendChild(el)
    return el
  }

  function setStatus(type, message, timeout = 2000) {
    const colors = {
      progress: '#3b82f6',
      success: '#16a34a',
      error: '#dc2626',
    }

    statusEl.textContent = message
    statusEl.style.background = colors[type] || '#333'
    statusEl.style.opacity = '1'

    if (timeout) {
      clearTimeout(setStatus._t)
      setStatus._t = setTimeout(() => {
        statusEl.style.opacity = '0'
      }, timeout)
    }
  }

  async function sortKanji() {
    setStatus('progress', 'Sorting...')
    try {
      const noteIds = await ankiInvoke('findNotes', {
        query: '"note:JP Kanji"',
      })
      const notes = await ankiInvoke('notesInfo', { notes: noteIds })
      const cardIds = []
      for (const note of notes) {
        cardIds.push(note.cards[0])
      }
      const cards = await ankiInvoke('cardsInfo', { cards: cardIds })
      cards.sort((a, b) => a.due - b.due)
      const byKanji = new Map()
      for (const n of notes) {
        const k = n.fields.Kanji.value.trim()
        const parts = Array.from(n.fields.JPDBParts.value.trim())
        byKanji.set(k, {
          id: n.noteId,
          parts,
          card: n.cards[0],
        })
      }
      const visited = new Set()
      const temp = new Set()
      const result = []

      function visit(k) {
        if (visited.has(k) || temp.has(k)) {
          return
        }
        temp.add(k)
        const node = byKanji.get(k)
        if (node) {
          for (const p of node.parts) {
            if (byKanji.has(p)) {
              visit(p)
            }
          }
        }

        temp.delete(k)
        visited.add(k)
        result.push(k)
      }

      for (const k of byKanji.keys()) {
        visit(k)
      }
      for (let i = 0; i < result.length; i++) {
        const note = byKanji.get(result[i])
        setStatus('progress', `${i}/${result.length}`)
        await ankiInvoke('updateNoteFields', {
          note: {
            id: note.id,
            fields: {
              Order: i.toString(),
            },
          },
        })
        // await ankiInvoke('setSpecificValueOfCard', {
        //   card: note.card,
        //   keys: ['due'],
        //   newValues: [cards[i].due],
        // })
      }
      setStatus('success', `Repositioned ${noteIds.length}`)
    } catch (error) {
      setStatus('error', error.toString())
    }
  }

  async function updateKanji(force) {
    try {
      setStatus('progress', 'In Progress')
      const kanji = document.querySelector('#q')?.value.trim()
      if (!kanji) throw new Error('Empty input')
      const Parts = [
        ...document.querySelectorAll(
          '.hbox .subsection-composed-of-kanji .plain',
        ),
      ].map((x) => x.textContent.trim())
      let partAbsent = false
      for (let i = 0; i < Parts.length; i++) {
        const char = Parts[i]
        if (!(await ankiInvoke('findNotes', { query: `Kanji:${char}` }))[0]) {
          if (!force) {
            window.open(
              `https://jpdb.io/kanji/${encodeURIComponent(char)}#a`,
              '_blank',
            )
          }
          partAbsent = true
        }
      }

      if (partAbsent) throw new Error('Add parts first')
      const id = (await ankiInvoke('findNotes', { query: `Kanji:${kanji}` }))[0]
      if (!id) throw new Error('Create with yomitan first.')
      await ankiInvoke('updateNoteFields', {
        note: {
          id,
          fields: {
            JPDBParts: Parts.join(''),
            JPDBMeaning: document.querySelector('.hbox .vbox.gap .subsection')
              .textContent,
            JPDBMnemonic:
              document.querySelector('.mnemonic')?.textContent.trim() ?? '',
            Vocab: [...document.querySelectorAll('.subsection-used-in .plain')]
              .map((x) => {
                const c = x.cloneNode(true)
                c.querySelectorAll('ruby').forEach((ruby) => {
                  const $rt = ruby.querySelector('rt')
                  if ($rt) {
                    $rt.replaceWith(
                      document.createTextNode(`[${$rt.textContent}]`),
                    )
                    ruby.replaceWith(
                      document.createTextNode(` ${ruby.textContent}`),
                    )
                  } else
                    ruby.replaceWith(document.createTextNode(ruby.textContent))
                })
                return c.textContent.trim()
              })
              .join(', '),
          },
        },
      })
      setStatus('success', 'Successfully updated ' + id)
    } catch (err) {
      setStatus('error', err.toString())
      throw err
    }
  }

  async function populateList(text, immediate) {
    if (!text) return
    if (immediate) {
      try {
        await updateKanji(true)
      } catch (error) {
        await GM_setValue('kanjiQueue', '')
        throw error
      }
    }
    while (true) {
      try {
        const char = text[0]
        text = text.slice(1)
        await GM_setValue('kanjiQueue', text)
        setStatus('progress', `Populating ${text.length} ${char}`)
        window.location.href = `https://jpdb.io/kanji/${encodeURIComponent(char)}#a`
        break
      } catch {
        continue
      }
    }
  }

  async function exportAnki() {
    const noteIds = await ankiInvoke('findNotes', {
      query: '"note:JP Kanji"',
    })
    const notes = await ankiInvoke('notesInfo', { notes: noteIds })
    return notes.map((n) => n.fields.Kanji.value.trim()).join('')
  }

  // Shift + A hotkey
  document.addEventListener('keydown', async (e) => {
    if (e.shiftKey && e.key.toLowerCase() === 'a') {
      updateKanji()
    }
    if (e.shiftKey && e.key.toLowerCase() === 's') {
      sortKanji()
    }
    if (e.shiftKey && e.key.toLowerCase() === 'e') {
      console.log(await exportAnki())
    }
    if (e.shiftKey && e.key.toLowerCase() === 'p') {
      if (await GM_getValue('kanjiQueue', '')) {
        await GM_setValue('kanjiQueue', '')
      } else {
        populateList(await exportAnki())
      }
    }
  })

  populateList(await GM_getValue('kanjiQueue', ''), true)
})()
