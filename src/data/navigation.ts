import type { NavItem, NavLink } from '@/types'

export const supportLinks: NavLink[] = [
  { label: 'Your Transfer Rights', to: '/your-transfer-rights' },
  { label: 'Customer Care', to: '/customer-care' },
]

export const legalLinks: NavLink[] = [
  { label: 'Regulatory Overview', to: '/regulatory-overview' },
  { label: 'Delete My Account', to: '/delete-my-account' },
  { label: 'Grand Junction Guidelines', to: '/grand-junction-guidelines' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-of-use' },
]

export const mainNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const primaryCta: NavLink = { label: 'Get Started', to: '/contact' }
