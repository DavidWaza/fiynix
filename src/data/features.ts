import type { Feature } from '@/types'

export const featuresHeading = {
  title: 'Key features',
}

export const features: Feature[] = [
  {
    number: '01',
    title: 'Secure & Trusted',
    description:
      'Your transactions are protected with advanced encryption and bank-level security, ensuring every transfer is safe.',
    icon: 'shield',
  },
  {
    number: '02',
    title: 'Transparent Fees',
    description:
      "No hidden charges, Know exactly what you're paying before you complete your transfer.",
    icon: 'dollar',
  },
  {
    number: '03',
    title: 'Fast Transfers',
    description:
      'Send money in minutes with reliable processing and quick delivery to your recipients.',
    icon: 'chevrons',
  },
  {
    number: '04',
    title: '24/7 Customer Support',
    description:
      'Our dedicated support team is available around the clock to assist you whenever you need help.',
    icon: 'chat',
  },
]
