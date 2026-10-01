import type { FooterColumn } from '@/types'
import { legalLinks, supportLinks } from './navigation'

export const footerColumns: FooterColumn[] = [
  { title: 'Support', links: supportLinks },
  {
    title: 'Legal',
    links: legalLinks,
  },
]
