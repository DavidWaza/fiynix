import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { homeMeta, notFound } from '@/data/pages'
import { contactMeta } from '@/data/contact'
import { blogMeta, findPost } from '@/data/blog'
import { aboutMeta } from '@/data/about'
import { legalPages } from '@/data/legal'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    description?: string
    /** Header starts transparent over a full-bleed hero */
    transparentHeader?: boolean
  }
}

const legalRoutes: RouteRecordRaw[] = legalPages.map((page) => ({
  path: `/${page.slug}`,
  // only set `alias` when present — vue-router iterates the key even if it is undefined
  ...(page.aliases ? { alias: page.aliases.map((slug) => `/${slug}`) } : {}),
  name: page.slug,
  component: () => import('@/views/LegalView.vue'),
  props: { slug: page.slug },
  meta: { title: page.title, description: page.description },
}))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: homeMeta,
    },
    // Route-level code splitting: each view below is its own chunk.
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: aboutMeta,
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogView.vue'),
      meta: blogMeta,
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: () => import('@/views/BlogPostView.vue'),
      props: true,
      beforeEnter(to) {
        const post = findPost(String(to.params.slug))
        if (!post) {
          return {
            name: 'not-found',
            params: { pathMatch: to.path.slice(1).split('/') },
            replace: true,
          }
        }
        to.meta.title = post.title
        to.meta.description = post.excerpt
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: contactMeta,
    },
    ...legalRoutes,
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
      meta: notFound,
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    // offset by the fixed header height
    if (to.hash) return { el: to.hash, top: 88, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
