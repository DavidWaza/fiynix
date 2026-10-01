import type { LegalPage } from '@/types'
import { BRAND_NAME, site } from './site'
import { parseLegalText } from '@/utils/parseLegalText'
import termsText from '@/content/terms-and-conditions.txt?raw'
import regulatoryText from '@/content/regulatory-overview.txt?raw'
import deleteAccountText from '@/content/delete-my-account.txt?raw'
import grandJunctionText from '@/content/grand-junction-guidelines.txt?raw'
import transferRightsText from '@/content/your-transfer-rights.txt?raw'
import customerCareText from '@/content/customer-care.txt?raw'

const terms = parseLegalText(termsText)
const regulatory = parseLegalText(regulatoryText)
const deleteAccount = parseLegalText(deleteAccountText)
const grandJunction = parseLegalText(grandJunctionText)
const transferRights = parseLegalText(transferRightsText)
const customerCare = parseLegalText(customerCareText)

const LEGAL_ENTITY = 'Fiynix Corp, DBA Fiynix Remittance'
const LEGAL_ADDRESS = '1201 Orange Street, Suite 600, Wilmington, DE 19801'

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
    /*
     * Mirrors the structure and facts of the live policy at fiynix.com/privacy-policy,
     * written as a plain-language version. Before launch, have legal review it or
     * paste the official wording into these blocks (one entry per paragraph / list).
     */
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    description: `How ${LEGAL_ENTITY} collects, uses, shares and protects your personal information.`,
    updated: 'July 2026',
    effective: 'July 2026',
    intro: `${LEGAL_ENTITY} is committed to protecting the privacy of the people who use our services. This statement summarises how we currently handle personal information. It may change from time to time, so please check back periodically.`,
    sections: [
      {
        heading: 'Scope',
        blocks: [
          {
            type: 'paragraph',
            text: `This statement covers ${LEGAL_ENTITY} (company file number 10343897) and the website at www.fiynix.com. Where a third party offers our services, it also applies if that third party expressly refers to it.`,
          },
          { type: 'subheading', text: 'Personal information we collect' },
          {
            type: 'paragraph',
            text: 'To provide our products and services we may need details such as your name, mailing address, phone number, email address, identity card or Social Security number, date of birth, place of work, transaction history, source of income and other financial information. If you cannot or choose not to provide this, we may be unable to offer the service you asked for.',
          },
          { type: 'paragraph', text: 'We collect this information:' },
          {
            type: 'list',
            items: [
              'Directly from you, through application forms, the mobile app, phone, email, our website, in person, or when you enter a promotion.',
              'From third parties, such as credit reporting agencies, business partners and service providers, your authorised representatives, or other companies in our international remittance group.',
              'From publicly available sources, such as directories and websites.',
            ],
          },
          { type: 'subheading', text: 'Sensitive information' },
          {
            type: 'paragraph',
            text: 'We only collect, use or disclose sensitive information when it is needed to provide a product or service and you have consented, or when the law requires it. Sensitive information includes things like religious beliefs, sexual orientation, racial or ethnic origin, political opinions, professional, trade association or union membership, criminal record and health information. We will always try to explain why we are asking for it.',
          },
        ],
      },
      {
        heading: 'Using your personal information',
        blocks: [
          { type: 'paragraph', text: 'We may use your personal information to:' },
          {
            type: 'list',
            items: [
              'Verify your identity and the transactions you make with us',
              'Give you information about a product or service',
              'Assess and fulfil your requests for products or services',
              'Tell you about other products and services that may interest you',
              'Promote and deliver our products and services',
              'Administer and manage our products and services',
              'Answer questions and complaints, and provide customer service',
              'Carry out operational work such as risk management, systems development and testing, staff training, and market or customer-satisfaction research',
              'Prevent or investigate fraud or crime, actual or suspected',
              'Meet our obligations under applicable laws, regulations, codes and payment-system rules',
            ],
          },
          {
            type: 'paragraph',
            text: 'We may also use it for purposes related to those above, but never in ways you would not reasonably expect, have not authorised, or that the law does not require.',
          },
          { type: 'subheading', text: 'Sharing with third parties' },
          {
            type: 'paragraph',
            text: 'We may share information with third parties when we outsource functions or tasks connected with our products and services, and where the law requires or permits it. If we use overseas agents, contractors or associated companies, your information may be sent to, or accessed from, other countries when needed to complete a transaction. We aim to work only with parties who take data protection as seriously as we do. When we share information, we:',
          },
          {
            type: 'list',
            items: [
              'Prohibit third parties from using it for anything other than the agreed purpose',
              'Put confidentiality and non-disclosure arrangements in place',
              'Make sure third parties do not disclose personal information other than as we permit',
            ],
          },
          { type: 'subheading', text: 'Keeping your information accurate' },
          {
            type: 'paragraph',
            text: 'Accurate information helps us serve you well. We take reasonable steps to keep your details correct, complete and current whenever we collect, use or disclose them. Please review your details regularly and let us know of any changes so we can update our records.',
          },
          { type: 'subheading', text: 'Accessing your information' },
          {
            type: 'paragraph',
            text: 'You can ask to see the personal information we hold about you or ask us to correct it. Except in limited circumstances, we will handle your request within a reasonable time. We will need to verify your identity, and in some cases may charge an administrative fee, which we will tell you about in advance. If we refuse access, we will explain why.',
          },
        ],
      },
      {
        heading: 'Security',
        blocks: [
          {
            type: 'paragraph',
            text: 'We keep personal information in electronic systems, paper files and other records, protected using current techniques and processes. Only authorised staff can access it, and storage access is restricted. When information is no longer needed, we delete or deactivate it.',
          },
          { type: 'subheading', text: 'Payment security and data protection' },
          {
            type: 'paragraph',
            text: 'Debit and credit card payments are processed by a third-party payment gateway that complies with the Payment Card Industry Data Security Standard (PCI DSS). Card details are encrypted and sent directly to our payment processor. Fiynix Corp does not store, process or keep sensitive authentication data such as full card numbers, CVV codes or PINs.',
          },
          {
            type: 'paragraph',
            text: 'We use administrative, technical and physical safeguards, including encryption, secure network protocols, access controls and continuous monitoring, to protect your information from unauthorised access, use, change or disclosure. No internet transmission or electronic storage is completely secure, however, so we cannot guarantee absolute security. By using our services you acknowledge and accept these practices.',
          },
          { type: 'subheading', text: 'Website security and cookies' },
          {
            type: 'paragraph',
            text: 'Our website may link to other sites that have their own privacy practices; please review their policies before using them. We use cookies (small text files placed on your device) to understand how our website is used and to offer more relevant services. Cookies do not identify you on their own, and you can choose whether and how to accept them in your browser settings.',
          },
        ],
      },
      {
        heading: 'Marketing',
        blocks: [
          {
            type: 'paragraph',
            text: 'We may use your information to let you know about products, services and promotions that could benefit you, or to invite you to customer surveys, by phone, email or mail. If you would rather not receive marketing, tell us and we will update our records.',
          },
          { type: 'subheading', text: 'Privacy Act' },
          {
            type: 'paragraph',
            text: 'Our policy references the Privacy Act of 1974, the U.S. federal law that sets a Code of Fair Information Practice for how personally identifiable information is collected, maintained, used and shared.',
          },
        ],
      },
      {
        heading: 'Electronic Fund Transfers (EFTs) and account balances',
        blocks: [
          {
            type: 'paragraph',
            text: `${LEGAL_ENTITY} works with a financial services software partner that is an FDIC member to provide electronic fund transfers. When you open an account, link a bank account or start an EFT, you authorise us to share your identity and banking information with that partner to support your account, and you agree to the partner's privacy policy (the "Partner Terms").`,
          },
          {
            type: 'paragraph',
            text: 'You are responsible for making sure the information you give us is accurate and complete so our partners can process EFTs for you. The Partner Terms may change over time; the current versions form part of this policy, and terms they define carry the same meaning here. Please read and understand the Partner Terms, as they include conditions about your account and how your personal information is used.',
          },
          { type: 'subheading', text: 'Deleting your account' },
          {
            type: 'paragraph',
            text: 'You can request deletion of your Fiynix account on our Delete My Account page (fiynix.com/delete-my-account).',
          },
        ],
      },
      {
        heading: 'Complaints',
        blocks: [
          {
            type: 'paragraph',
            text: `For more information about how we handle your personal information, or to make a complaint, contact ${LEGAL_ENTITY}:`,
          },
          {
            type: 'list',
            items: [`Mail: ${LEGAL_ADDRESS}`, `Email: ${site.contact.email}`],
          },
          {
            type: 'paragraph',
            text: 'We will respond to your enquiry within 2 business days of receiving it.',
          },
        ],
      },
    ],
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
