import type { Feature } from '@/types'

export const featuresHeading = {
  eyebrow: 'Key features',
  title: 'Everything you need to send money with confidence',
  subtitle: 'Built for the people you support — safe, clear and quick from the first tap.',
}

/** Copy for the small illustrations inside the wide cards */
export const featureVisuals = {
  security: {
    title: 'Transfer protected',
    checks: ['Identity verified', 'Data encrypted', 'Recipient screened'],
  },
  chat: {
    question: 'Has my transfer arrived?',
    answer: 'Yes — delivered 2 minutes ago.',
    agent: 'Support team',
  },
}

export const features: Feature[] = [
  {
    number: '01',
    title: 'Secure & Trusted',
    description:
      'Advanced encryption and bank-level security protect your money and personal data on every transfer.',
    icon: 'shield',
    link: { label: 'How we keep you safe', to: '/about#security' },
    visual: 'security',
  },
  {
    number: '02',
    title: 'Transparent Fees',
    description:
      'No hidden charges. See exactly what you pay and what your recipient gets before you hit send.',
    icon: 'receipt',
    link: { label: 'Know your rights', to: '/your-transfer-rights' },
  },
  {
    number: '03',
    title: 'Fast Transfers',
    description: 'Most transfers arrive in minutes, so your loved ones are never left waiting.',
    icon: 'bolt',
    link: { label: 'See how it works', to: '/#how-it-works' },
  },
  {
    number: '04',
    title: '24/7 Customer Support',
    description: 'Real people ready to help around the clock, whenever and wherever you need us.',
    icon: 'headset',
    link: { label: 'Talk to us', to: '/contact' },
    visual: 'chat',
  },
]
