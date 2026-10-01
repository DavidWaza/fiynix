export type InlineSegment =
  { type: 'text'; text: string } | { type: 'link'; text: string; href: string; internal: boolean }

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g

/** Splits "See our [Privacy Policy](/privacy-policy)." into text and link segments. */
export function parseInlineLinks(input: string): InlineSegment[] {
  const segments: InlineSegment[] = []
  let last = 0
  for (const match of input.matchAll(LINK)) {
    const [whole, text, href] = match
    if (match.index > last) segments.push({ type: 'text', text: input.slice(last, match.index) })
    segments.push({ type: 'link', text: text!, href: href!, internal: href!.startsWith('/') })
    last = match.index + whole.length
  }
  if (last < input.length) segments.push({ type: 'text', text: input.slice(last) })
  return segments
}
