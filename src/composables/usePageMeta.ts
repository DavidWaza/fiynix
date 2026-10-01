import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'
import { site } from '@/data/site'

/**
 * Sets <title>, meta description, canonical and Open Graph / Twitter tags
 * from the current route's `meta.title` / `meta.description`.
 * Called once in App.vue so every route gets tags automatically.
 */
export function usePageMeta() {
  const route = useRoute()

  const title = computed(() => {
    const pageTitle = route.meta.title
    if (!pageTitle) return site.name
    return pageTitle.includes(site.name) ? pageTitle : `${pageTitle} | ${site.name}`
  })
  const description = computed(() => route.meta.description ?? site.defaultDescription)
  const url = computed(() => new URL(route.path, site.url).href)

  useHead({
    htmlAttrs: { lang: 'en' },
    link: [{ rel: 'canonical', href: url }],
  })

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: url,
    ogSiteName: site.name,
    // Add a 1200×630 share image at public/og-image.png
    ogImage: `${site.url}/og-image.png`,
    twitterCard: 'summary_large_image',
  })
}
