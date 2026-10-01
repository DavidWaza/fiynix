import type { LegalBlock, LegalSection } from '@/types'

export interface ParsedLegalText {
  /** Paragraphs before the first `## ` heading */
  intro: string[]
  sections: LegalSection[]
}

const BULLET = /^\s*(?:[-*•]|\d+[.)])\s+/
const INLINE_BULLET = /\s+•\s+/

/**
 * Turns paste-friendly legal text into page sections.
 *
 *   ## Section heading        → new section
 *   ### Sub-heading           → sub-heading inside the current section
 *   - item / * item / • item  → bullet list (consecutive lines)
 *   blank line                → paragraph break
 *   // comment                → ignored
 *
 * Paragraphs written with inline bullets ("Lead text: • one • two") are split
 * into the lead paragraph plus a list, which matches how the text is often copied.
 */
export function parseLegalText(source: string): ParsedLegalText {
  const intro: string[] = []
  const sections: LegalSection[] = []
  let current: LegalSection | null = null
  let paragraph: string[] = []
  let list: string[] = []

  const push = (block: LegalBlock) => {
    if (current) current.blocks!.push(block)
    else if (block.type === 'paragraph') intro.push(block.text)
  }

  const flushParagraph = () => {
    if (!paragraph.length) return
    const text = paragraph.join(' ').trim()
    paragraph = []
    const [lead, ...items] = text.split(INLINE_BULLET)
    // "• a • b" at the start: the lead itself is the first item
    const leadIsItem = /^•\s*/.test(lead!)
    const leadText = lead!.replace(/^•\s*/, '').trim()
    if (items.length) {
      if (leadIsItem) push({ type: 'list', items: [leadText, ...items.map((i) => i.trim())] })
      else {
        if (leadText) push({ type: 'paragraph', text: leadText })
        push({ type: 'list', items: items.map((i) => i.trim()) })
      }
    } else if (leadText) {
      push({ type: 'paragraph', text: leadText })
    }
  }

  const flushList = () => {
    if (!list.length) return
    push({ type: 'list', items: list })
    list = []
  }

  for (const rawLine of source.split(/\r?\n/)) {
    const line = rawLine.trim()

    if (line.startsWith('//')) continue

    if (!line) {
      flushParagraph()
      flushList()
      continue
    }

    if (line.startsWith('## ')) {
      flushParagraph()
      flushList()
      current = { heading: line.slice(3).trim(), blocks: [] }
      sections.push(current)
      continue
    }

    if (line.startsWith('### ')) {
      flushParagraph()
      flushList()
      push({ type: 'subheading', text: line.slice(4).trim() })
      continue
    }

    if (BULLET.test(line)) {
      flushParagraph()
      // "• a • b" on one line → two items
      list.push(
        ...line
          .replace(BULLET, '')
          .split(INLINE_BULLET)
          .map((item) => item.trim()),
      )
      continue
    }

    flushList()
    paragraph.push(line)
  }

  flushParagraph()
  flushList()

  return { intro, sections }
}
