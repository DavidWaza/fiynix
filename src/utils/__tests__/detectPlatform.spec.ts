import { describe, expect, it } from 'vitest'
import { detectPlatform } from '../detectPlatform'

const UA = {
  iphone:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1',
  ipadLegacy:
    'Mozilla/5.0 (iPad; CPU OS 12_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1',
  // iPadOS 13+ Safari sends a desktop Mac user agent
  ipadDesktopMode:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15',
  android:
    'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Mobile Safari/537.36',
  windows:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36',
}

describe('detectPlatform', () => {
  it('detects iPhone and older iPads as iOS', () => {
    expect(detectPlatform({ userAgent: UA.iphone })).toBe('ios')
    expect(detectPlatform({ userAgent: UA.ipadLegacy })).toBe('ios')
  })

  it('detects iPadOS 13+ (desktop user agent with touch) as iOS', () => {
    expect(
      detectPlatform({ userAgent: UA.ipadDesktopMode, platform: 'MacIntel', maxTouchPoints: 5 }),
    ).toBe('ios')
  })

  it('treats a real Mac (no touch) as other', () => {
    expect(
      detectPlatform({ userAgent: UA.ipadDesktopMode, platform: 'MacIntel', maxTouchPoints: 0 }),
    ).toBe('other')
  })

  it('detects Android', () => {
    expect(detectPlatform({ userAgent: UA.android })).toBe('android')
  })

  it('treats desktop browsers as other', () => {
    expect(detectPlatform({ userAgent: UA.windows, platform: 'Win32' })).toBe('other')
  })
})
