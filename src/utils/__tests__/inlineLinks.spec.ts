import { describe, expect, it } from 'vitest'
import { parseInlineLinks } from '../inlineLinks'

describe('parseInlineLinks', () => {
  it('returns plain text unchanged', () => {
    expect(parseInlineLinks('No links here.')).toEqual([{ type: 'text', text: 'No links here.' }])
  })

  it('splits internal and external links', () => {
    expect(
      parseInlineLinks(
        'See our [Terms](/terms-and-conditions) or email [us](mailto:info@fiynix.com).',
      ),
    ).toEqual([
      { type: 'text', text: 'See our ' },
      { type: 'link', text: 'Terms', href: '/terms-and-conditions', internal: true },
      { type: 'text', text: ' or email ' },
      { type: 'link', text: 'us', href: 'mailto:info@fiynix.com', internal: false },
      { type: 'text', text: '.' },
    ])
  })
})
