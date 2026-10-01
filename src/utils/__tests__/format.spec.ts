import { describe, expect, it } from 'vitest'
import { plural, shortDate, timeAgo } from '../format'

const now = new Date(2026, 9, 1, 18, 30) // Oct 1 2026, 6:30pm local

describe('timeAgo', () => {
  it('treats earlier the same day as today', () => {
    expect(timeAgo(new Date(2026, 9, 1, 0, 5).toISOString(), now)).toBe('today')
  })
  it('counts calendar days for date-only strings', () => {
    expect(timeAgo('2026-09-30', now)).toBe('yesterday')
    expect(timeAgo('2026-09-26', now)).toBe('5 days ago')
  })
})

describe('shortDate', () => {
  it('omits the year for the current year', () => {
    expect(shortDate('2026-08-12', now)).toBe('Aug 12')
    expect(shortDate('2025-08-12', now)).toBe('Aug 12, 2025')
  })
})

describe('plural', () => {
  it('pluralises counts', () => {
    expect(plural(1, 'comment')).toBe('1 comment')
    expect(plural(0, 'comment')).toBe('0 comments')
  })
})
