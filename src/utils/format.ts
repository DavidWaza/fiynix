/** Date-only strings (YYYY-MM-DD) are read as local midnight; full timestamps as-is */
const parse = (iso: string) => new Date(iso.length === 10 ? `${iso}T00:00:00` : iso)
const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()

/** "Aug 12" in the current year, "Aug 12, 2025" otherwise */
export function shortDate(iso: string, now = new Date()): string {
  const date = parse(iso)
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: date.getFullYear() === now.getFullYear() ? undefined : 'numeric',
  }).format(date)
}

const DAY = 24 * 60 * 60 * 1000

/** "today", "yesterday", "5 days ago", "3 months ago" */
export function timeAgo(iso: string, now = new Date()): string {
  // compare calendar days, so something posted earlier today reads "today"
  const days = Math.round((startOfDay(parse(iso)) - startOfDay(now)) / DAY)
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
  if (Math.abs(days) < 30) return rtf.format(days, 'day')
  if (Math.abs(days) < 365) return rtf.format(Math.round(days / 30), 'month')
  return rtf.format(Math.round(days / 365), 'year')
}

export const plural = (count: number, word: string) => `${count} ${word}${count === 1 ? '' : 's'}`
