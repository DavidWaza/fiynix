import type { PageMeta } from '@/types'
import { BRAND_NAME } from './site'

/** Icon names rendered by components/about/AboutIcon.vue */
export type AboutIconName =
  | 'target'
  | 'globe'
  | 'wallet'
  | 'shield'
  | 'search'
  | 'check'
  | 'id-card'
  | 'screen'
  | 'chart'
  | 'bars'
  | 'lock'

export interface AboutItem {
  title: string
  description: string
  icon?: AboutIconName
}

export const aboutMeta: PageMeta = {
  title: 'About',
  description: `${BRAND_NAME} is a financial services company building simpler, safer international transfers.`,
}

export const aboutHero = {
  eyebrow: `About ${BRAND_NAME}`,
  title: 'Money should move as freely as the people who earn it.',
  body: `${BRAND_NAME} is a financial services company building simpler, safer international transfers.`,
  badge: 'Registered money services business',
}

export const aboutStory = {
  titleLine1: 'A payment platform built',
  titleLine2: 'for sending money home',
  lead: 'Bringing you closer to the people who matter.',
  paragraphs: [
    'Behind every transfer is a reason. A parent to support. A school fee to cover. A milestone to celebrate.',
    `At ${BRAND_NAME} we’re making international transfers simpler, faster, and more affordable so you can keep showing up for the people who count on you. With clear fees before you confirm and fast delivery through our payout partners, we help turn money sent into moments that matter.`,
  ],
  cta: { label: 'Read our story', to: '/blog' },
  phone: { balanceLabel: 'Total balance', balance: '482,750.00' },
}

export const aboutPurpose = {
  eyebrow: 'Our purpose',
  title: "What we're building, and why",
  mission: {
    title: 'Mission',
    icon: 'target',
    description: `To build a trusted financial platform that simplifies global money movement and expands access to secure, reliable, and inclusive financial services worldwide.`,
  } satisfies AboutItem,
  vision: {
    title: 'Vision',
    icon: 'globe',
    description: `To empower individuals, families, and businesses to move money across borders quickly, securely, and transparently, while maintaining strong regulatory compliance.`,
  } satisfies AboutItem,
}

export const aboutBusinessModel = {
  eyebrow: 'Business Model',
  title: `How money moves through ${BRAND_NAME}`,
  steps: [
    {
      title: 'Wallet-based transmission',
      description:
        'Users fund a stored value wallet, then draw on that balance to initiate cross border payment',
    },
    {
      title: 'Funds are safeguarded',
      description:
        'Funds received through approved payment methods are held in safeguarded accounts at U.S. financial institutions, separate from company funds.',
    },
    {
      title: 'Compliance at every step',
      description:
        'dentity verification, sanctions screening and transaction monitoring run on every transfer.',
    },
  ] satisfies AboutItem[],
  flow: [
    { title: 'Wallet-based transmission', description: 'Card or bank transfer', icon: 'wallet' },
    {
      title: 'Held in safeguarded accounts',
      description: 'U.S. financial institutions',
      icon: 'shield',
    },
    { title: 'Screened and verified', description: 'ID, sanctions, monitoring', icon: 'search' },
    { title: 'Paid out locally', description: 'Licensed payout partners', icon: 'check' },
  ] satisfies AboutItem[],
}

export const aboutSecurity = {
  eyebrow: 'Trust and safety',
  title: 'Security and compliance',
  intro: `${BRAND_NAME} operates under a compliance framework aligned with U.S. financial regulations. These controls run on every transfer, not on a sample`,
  controls: [
    {
      title: 'KYC verification',
      description: 'Identity verified before the first transfer is released',
      icon: 'id-card',
    },
    {
      title: 'Sanctions screening',
      description: 'Every party checked against OFAC and global watchlists.',
      icon: 'screen',
    },
    {
      title: 'AML monitoring',
      description: 'Patterns reviewed continuously, not sampled after the fact.',
      icon: 'chart',
    },
    {
      title: 'Fraud and risk scoring',
      description: 'Each transfer scored for risk before any funds move',
      icon: 'shield',
    },
    {
      title: 'Limits and audit trails',
      description: 'Every action logged and fully reconstructable on request',
      icon: 'bars',
    },
    {
      title: 'Encryption and safeguarding',
      description: 'Encrypted in transit and at rest customer funds held separetly',
      icon: 'lock',
    },
  ] satisfies AboutItem[],
}
