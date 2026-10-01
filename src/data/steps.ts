import type { Step } from '@/types'

export const stepsHeading = {
  eyebrow: 'How it works',
  title: 'Four steps to your first transfer',
  subtitle: 'Under 10 Minutes, start to finish',
  cta: { label: 'Get Started', to: '/contact' },
}

export const steps: Step[] = [
  { number: '01', title: 'Download', description: 'iOS or Android' },
  { number: '02', title: 'Verify ID', description: 'In two minutes' },
  { number: '03', title: 'Send Money', description: 'Pick, confirm' },
  { number: '04', title: 'Delivered', description: 'In minutes' },
]
