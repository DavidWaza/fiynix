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
  title: 'Sending money home should be as easy as earning it.',
  body: `${BRAND_NAME} is a financial services company making international transfers simpler and safer.`,
  badge: 'Registered money services business',
}

export const aboutStory = {
  titleLine1: 'A payment platform built',
  titleLine2: 'for sending money home',
  lead: 'Every transfer brings you closer to someone who matters.',
  paragraphs: [
    'Each payment has a story behind it — support for a parent, tuition for a sibling, a gift for a celebration back home.',
    `${BRAND_NAME} makes cross-border transfers faster, simpler and more affordable. Fees are shown up front and delivery runs through trusted payout partners, so the money you send arrives when it counts.`,
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
    description:
      'Build a trusted platform that makes moving money across borders simple, and opens up secure, reliable financial services to more people worldwide.',
  } satisfies AboutItem,
  vision: {
    title: 'Vision',
    icon: 'globe',
    description:
      'A world where individuals, families and businesses send money across borders quickly, securely and transparently, backed by strong regulatory compliance.',
  } satisfies AboutItem,
}

export const aboutBusinessModel = {
  eyebrow: 'Business Model',
  title: `How money moves through ${BRAND_NAME}`,
  steps: [
    {
      title: 'Wallet-based transmission',
      description:
        'Customers add funds to a stored-value wallet, then use that balance to send cross-border payments.',
    },
    {
      title: 'Funds are safeguarded',
      description:
        'Money received through approved payment methods is kept in safeguarded accounts at U.S. financial institutions, separate from company funds.',
    },
    {
      title: 'Compliance at every step',
      description:
        'Every transfer goes through identity verification, sanctions screening and transaction monitoring.',
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
  intro: `${BRAND_NAME} runs a compliance framework aligned with U.S. financial regulations, and these controls apply to every transfer — not just a sample.`,
  controls: [
    {
      title: 'KYC verification',
      description: 'Identity is confirmed before a first transfer is released.',
      icon: 'id-card',
    },
    {
      title: 'Sanctions screening',
      description: 'Every sender and recipient is checked against OFAC and global watchlists.',
      icon: 'screen',
    },
    {
      title: 'AML monitoring',
      description: 'Activity is reviewed continuously, not spot-checked after the fact.',
      icon: 'chart',
    },
    {
      title: 'Fraud and risk scoring',
      description: 'Each transfer gets a risk score before any money moves.',
      icon: 'shield',
    },
    {
      title: 'Limits and audit trails',
      description: 'Every action is logged and can be fully reconstructed on request.',
      icon: 'bars',
    },
    {
      title: 'Encryption and safeguarding',
      description: 'Data is encrypted in transit and at rest; customer funds are held separately.',
      icon: 'lock',
    },
  ] satisfies AboutItem[],
}
