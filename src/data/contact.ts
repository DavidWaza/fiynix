import type { ContactForm, PageMeta } from '@/types'
import { BRAND_NAME, site } from './site'

export const contactMeta: PageMeta = {
  title: 'Contact',
  description: `Questions about a transfer or your account? Contact the ${BRAND_NAME} team — support is available around the clock.`,
}

export const contactHero = {
  eyebrow: 'Contact',
  title: 'How can we help?',
  body: 'Most messages get a reply within two hours. transfer problems are handled around the clock',
}

export interface ContactField {
  key: keyof ContactForm
  label: string
  type: 'text' | 'email' | 'tel'
  autocomplete?: string
  required?: boolean
  /** Spans both columns on desktop */
  wide?: boolean
}

export const contactForm = {
  title: 'Contact information',
  submit: 'Submit',
  successTitle: 'Thanks — your message has been sent.',
  successBody: "We'll get back to you shortly.",
  sendAnother: 'Send another message',
  fields: [
    {
      key: 'firstName',
      label: 'First name',
      type: 'text',
      autocomplete: 'given-name',
      required: true,
    },
    { key: 'lastName', label: 'Last name', type: 'text', autocomplete: 'family-name' },
    { key: 'email', label: 'Email', type: 'email', autocomplete: 'email', required: true },
    { key: 'address', label: 'Address', type: 'text', autocomplete: 'street-address' },
    { key: 'phone', label: 'Phone', type: 'tel', autocomplete: 'tel-national', wide: true },
    { key: 'message', label: 'Additional information', type: 'text', wide: true },
  ] satisfies ContactField[],
}

/** Dial codes offered in the phone field; extend as you add corridors. */
export const dialCodes = [
  { code: 'US', dial: '+1', name: 'United States' },
  { code: 'CA', dial: '+1', name: 'Canada' },
  { code: 'GB', dial: '+44', name: 'United Kingdom' },
  { code: 'NG', dial: '+234', name: 'Nigeria' },
  { code: 'GH', dial: '+233', name: 'Ghana' },
  { code: 'KE', dial: '+254', name: 'Kenya' },
  { code: 'ZA', dial: '+27', name: 'South Africa' },
  { code: 'IN', dial: '+91', name: 'India' },
  { code: 'PH', dial: '+63', name: 'Philippines' },
  { code: 'MX', dial: '+52', name: 'Mexico' },
]

export type ContactInfoIcon = 'mail' | 'pin' | 'headset'

export const contactDetails: {
  label: string
  value: string
  href: string
  icon: ContactInfoIcon
}[] = [
  {
    label: 'Email',
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    icon: 'mail',
  },
  {
    label: 'Address',
    value: site.contact.address.join(', '),
    href: `https://maps.google.com/?q=${encodeURIComponent(site.contact.address.join(', '))}`,
    icon: 'pin',
  },
  {
    label: 'Support',
    value: 'Real humans, available any time',
    href: '/customer-care',
    icon: 'headset',
  },
]
