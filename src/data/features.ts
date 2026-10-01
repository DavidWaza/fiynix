import type { Feature } from '@/types'

export const featuresHeading = {
  title: 'Key features',
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
      'Your transactions are protected with advanced encryption and bank-level security, ensuring every transfer is safe.',
    icon: 'shield',
    link: { label: 'How we keep you safe', to: '/about#security' },
    visual: 'security',
  },
  {
    number: '02',
    title: 'Transparent Fees',
    description:
      "No hidden charges, Know exactly what you're paying before you complete your transfer.",
    icon: 'receipt',
    link: { label: 'Know your rights', to: '/your-transfer-rights' },
  },
  {
    number: '03',
    title: 'Fast Transfers',
    description:
      'Send money in minutes with reliable processing and quick delivery to your recipients.',
    icon: 'bolt',
    link: { label: 'See how it works', to: '/#how-it-works' },
  },
  {
    number: '04',
    title: '24/7 Customer Support',
    description:
      'Our dedicated support team is available around the clock to assist you whenever you need help.',
    icon: 'headset',
    link: { label: 'Talk to us', to: '/contact' },
    visual: 'chat',
  },
]
