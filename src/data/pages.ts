import type { PageMeta } from '@/types'
import { BRAND_NAME, site } from './site'

export const homeMeta: PageMeta = {
  title: `${BRAND_NAME} — Send money worldwide from your phone`,
  description: site.defaultDescription,
}

export const notFound: PageMeta = {
  title: 'Page not found',
  description: 'The page you are looking for does not exist.',
}
