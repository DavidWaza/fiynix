import { describe, expect, it } from 'vitest'
import { parseLegalText } from '../parseLegalText'

describe('parseLegalText', () => {
  it('splits intro, sections, sub-headings, paragraphs and lists', () => {
    const { intro, sections } = parseLegalText(`
// comments are ignored
Read these terms carefully.

## 1. About us
First paragraph
continues here.

### 1.1 Contact
- Email us
- Or use the app

Last paragraph.
`)
    expect(intro).toEqual(['Read these terms carefully.'])
    expect(sections).toHaveLength(1)
    expect(sections[0]!.heading).toBe('1. About us')
    expect(sections[0]!.blocks).toEqual([
      { type: 'paragraph', text: 'First paragraph continues here.' },
      { type: 'subheading', text: '1.1 Contact' },
      { type: 'list', items: ['Email us', 'Or use the app'] },
      { type: 'paragraph', text: 'Last paragraph.' },
    ])
  })

  it('splits inline • bullets into a lead paragraph and a list', () => {
    const { sections } = parseLegalText('## Limits\nStandard: • Daily $3,000 • Weekly $10,000')
    expect(sections[0]!.blocks).toEqual([
      { type: 'paragraph', text: 'Standard:' },
      { type: 'list', items: ['Daily $3,000', 'Weekly $10,000'] },
    ])
  })

  it('treats a paragraph that starts with • as a list', () => {
    const { sections } = parseLegalText('## Events\n• Outages • Natural disasters')
    expect(sections[0]!.blocks).toEqual([{ type: 'list', items: ['Outages', 'Natural disasters'] }])
  })
})
