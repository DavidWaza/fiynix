import type { LegalPage } from '@/types'
import { BRAND_NAME } from './site'
import { parseLegalText } from '@/utils/parseLegalText'
import termsText from '@/content/terms-and-conditions.txt?raw'
import regulatoryText from '@/content/regulatory-overview.txt?raw'
import deleteAccountText from '@/content/delete-my-account.txt?raw'
import grandJunctionText from '@/content/grand-junction-guidelines.txt?raw'
import transferRightsText from '@/content/your-transfer-rights.txt?raw'
import customerCareText from '@/content/customer-care.txt?raw'
import privacyText from '@/content/privacy-policy.txt?raw'

const terms = parseLegalText(termsText)
const regulatory = parseLegalText(regulatoryText)
const deleteAccount = parseLegalText(deleteAccountText)
const grandJunction = parseLegalText(grandJunctionText)
const transferRights = parseLegalText(transferRightsText)
const customerCare = parseLegalText(customerCareText)
const privacy = parseLegalText(privacyText)

const LEGAL_ENTITY = 'Fiynix Corp, DBA Fiynix Remittance'

export const legalPages: LegalPage[] = [
  {
    slug: 'your-transfer-rights',
    aliases: ['your-transfer-right'],
    title: 'Your Transfer Rights',
    description: `Your rights when sending money from the U.S. with ${BRAND_NAME}: cancelling within 30 minutes, reporting errors and refunds.`,
    updated: '2026',
    // Content lives in src/content/your-transfer-rights.txt — paste the official text there.
    intro: transferRights.intro.join(' '),
    sections: transferRights.sections,
  },
  {
    slug: 'regulatory-overview',
    title: 'Regulatory Overview',
    heading: 'Regulatory overview and business model',
    description: `How ${LEGAL_ENTITY} is regulated, how the app and Grand Junction work, and what services we provide.`,
    updated: '2026',
    // Content lives in src/content/regulatory-overview.txt — paste the official text there.
    intro: regulatory.intro.join(' '),
    sections: regulatory.sections,
  },
  {
    slug: 'delete-my-account',
    title: 'Delete My Account',
    heading: 'Delete your Fiynix account',
    description: `Request permanent deletion of your ${BRAND_NAME} account and personal information.`,
    updated: '2026',
    // Content lives in src/content/delete-my-account.txt — paste the official text there.
    intro: deleteAccount.intro.join(' '),
    sections: deleteAccount.sections,
    form: 'delete-account',
  },
  {
    slug: 'grand-junction-guidelines',
    aliases: ['grand-junction-guideline'],
    title: 'Grand Junction Guidelines',
    heading: 'Fiynix Grand Junction Guidelines',
    description: `How Grand Junction works on ${BRAND_NAME}: eligibility, posting limits, matching, fees, cancellation rights and compliance.`,
    updated: '2026',
    effective: '2026',
    // Content lives in src/content/grand-junction-guidelines.txt — paste the official text there.
    intro: grandJunction.intro.join(' '),
    sections: grandJunction.sections,
  },
  {
    slug: 'customer-care',
    title: 'Customer Care',
    heading: 'Customer Care',
    description: `Answers to common questions about sending money with ${BRAND_NAME}, plus how to reach our support team.`,
    updated: '2026',
    layout: 'faq',
    // Content lives in src/content/customer-care.txt — paste the official answers there.
    intro: customerCare.intro.join(' '),
    sections: customerCare.sections,
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    description: `How ${LEGAL_ENTITY} collects, uses, shares and protects your personal information.`,
    updated: 'July 2026',
    effective: 'July 2026',
    // Content lives in src/content/privacy-policy.txt — paste the official text there.
    intro: privacy.intro.join(' '),
    sections: privacy.sections,
  },
  {
    slug: 'terms-of-use',
    aliases: ['terms-and-conditions'],
    title: 'Terms & Conditions',
    description: `The terms that govern your use of the ${BRAND_NAME} Remittance service and app.`,
    updated: '2026',
    effective: '2026',
    // Content lives in src/content/terms-and-conditions.txt — paste the official text there.
    intro: terms.intro.join(' '),
    sections: terms.sections,
  },
]
