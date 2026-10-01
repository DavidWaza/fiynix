import type { SocialLink, StoreLink } from '@/types'

/** Change the brand name here; every page, title and footer reads from it. */
export const BRAND_NAME = 'Fiynix'

export const site = {
  name: BRAND_NAME,
  url: 'https://www.fiynix.com',
  defaultDescription: `${BRAND_NAME} lets you send money worldwide from your phone — fast transfers, bank-grade security, transparent fees and great exchange rates.`,
  /** Bottom-bar line — replace with your licensing / regulator statement. */
  contact: {
    address: ['Finksburg, MD 21048'],
    email: 'info@fiynix.com',
    phone: '+1 (000) 000-0000',
  },
}

export const storeLinks: StoreLink[] = [
  {
    platform: 'ios',
    caption: 'Download on the',
    store: 'App Store',
    href: 'https://apps.apple.com/us/app/fiynix-remittance/id6781421962',
  },
  {
    platform: 'android',
    caption: 'Get it on',
    store: 'Google Play',
    href: 'https://play.google.com/store/apps/details?id=com.fiynix.app',
  },
]

export const socialLinks: SocialLink[] = [
  {
    platform: 'instagram',
    label: `${BRAND_NAME} on Instagram`,
    href: 'https://www.instagram.com/fiynixremit',
  },
  {
    platform: 'facebook',
    label: `${BRAND_NAME} on Facebook`,
    href: 'https://www.facebook.com/FiynixRemit/',
  },
  { platform: 'x', label: `${BRAND_NAME} on X`, href: 'https://x.com/fiynixRemit' },
  {
    platform: 'linkedin',
    label: `${BRAND_NAME} on LinkedIn`,
    href: 'https://www.linkedin.com/company/fiynix',
  },
]
