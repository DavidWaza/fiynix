export interface NavLink {
  label: string
  to: string
}

export interface NavGroup {
  label: string
  children: NavLink[]
}

export type NavItem = NavLink | NavGroup

export function isNavGroup(item: NavItem): item is NavGroup {
  return 'children' in item
}

export type FeatureIcon = 'shield' | 'dollar' | 'chevrons' | 'chat'

export interface Feature {
  number: string
  title: string
  description: string
  icon: FeatureIcon
}

export interface Step {
  number: string
  title: string
  description: string
}

export type SocialPlatform = 'instagram' | 'facebook' | 'x' | 'linkedin'

export interface SocialLink {
  platform: SocialPlatform
  label: string
  href: string
}

export interface FooterColumn {
  title: string
  links: NavLink[]
}

export type StorePlatform = 'ios' | 'android'

export interface StoreLink {
  platform: StorePlatform
  /** Small line above the store name, e.g. "Download on the" */
  caption: string
  store: string
  href: string
}

// A type alias (not an interface) so it is assignable to vue-router's RouteMeta
export type PageMeta = {
  title: string
  description: string
}

export type LegalBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'list'; items: string[] }

export interface LegalSection {
  heading: string
  /** Simple sections: plain paragraphs */
  paragraphs?: string[]
  /** Rich sections: paragraphs, sub-headings and bullet lists in order */
  blocks?: LegalBlock[]
}

export interface LegalPage extends PageMeta {
  slug: string
  /** Visible H1; falls back to `title` */
  heading?: string
  updated: string
  /** Shown as "Effective …" when set */
  effective?: string
  /** Extra URL slugs that show this page (e.g. the live site's URL) */
  aliases?: string[]
  /** Interactive form rendered after the content */
  form?: 'delete-account'
  /** 'faq' renders each section as an expandable question */
  layout?: 'faq'
  intro: string
  sections: LegalSection[]
}

export interface ContactForm {
  firstName: string
  lastName: string
  email: string
  address: string
  /** Dial code, e.g. "+1"; empty when not chosen */
  dialCode: string
  phone: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactForm, string>>

export interface DeletionRequest {
  fullName: string
  email: string
  phone: string
  reason: string
  /** User confirmed they understand deletion is permanent */
  confirmed: boolean
}

export type DeletionErrors = Partial<Record<keyof DeletionRequest, string>>
