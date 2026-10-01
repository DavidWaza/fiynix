export type DevicePlatform = 'ios' | 'android' | 'other'

export interface PlatformHints {
  userAgent: string
  /** navigator.platform, e.g. "MacIntel", "iPhone" */
  platform?: string
  /** navigator.maxTouchPoints */
  maxTouchPoints?: number
}

/**
 * Works out which app store a visitor should be sent to.
 * iPadOS 13+ reports itself as a Mac ("MacIntel"), so a touch-capable "Mac" is treated as iOS.
 */
export function detectPlatform({
  userAgent,
  platform = '',
  maxTouchPoints = 0,
}: PlatformHints): DevicePlatform {
  const ua = userAgent.toLowerCase()

  if (/android/.test(ua)) return 'android'
  if (/iphone|ipad|ipod/.test(ua)) return 'ios'
  if (platform === 'MacIntel' && maxTouchPoints > 1) return 'ios'

  return 'other'
}

/** Reads the hints from the current browser; returns 'other' outside a browser. */
export function currentPlatform(): DevicePlatform {
  if (typeof navigator === 'undefined') return 'other'
  return detectPlatform({
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    maxTouchPoints: navigator.maxTouchPoints,
  })
}
