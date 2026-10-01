import type { Step } from '@/types'

export const stepsHeading = {
  eyebrow: 'How it works',
  title: 'Four steps to your first transfer',
  subtitle: 'Under 10 minutes, start to finish',
  cta: { label: 'Get Started', to: '/contact' },
}

export const steps: Step[] = [
  { number: '01', title: 'Download', description: 'Get the app on iOS or Android' },
  { number: '02', title: 'Verify ID', description: 'Confirm your identity in two minutes' },
  { number: '03', title: 'Send Money', description: 'Pick a recipient, confirm the amount' },
  { number: '04', title: 'Delivered', description: 'Funds arrive in minutes' },
]
