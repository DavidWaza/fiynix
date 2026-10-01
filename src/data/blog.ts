import type { PageMeta } from '@/types'
import { BRAND_NAME } from './site'
import { media } from './media'

export type BlogBlock = { type: 'paragraph'; text: string } | { type: 'heading'; text: string }

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  author: string
  /** ISO dates */
  published: string
  updated: string
  readMinutes: number
  views: number
  cover: string
  /** Responsive sources for the cover, e.g. "a.webp 800w, b.webp 1480w" */
  coverSrcset?: string
  coverAlt: string
  body: BlogBlock[]
}

export const blogMeta: PageMeta = {
  title: 'Blog',
  description: `Stories, guides and updates from the ${BRAND_NAME} team.`,
}

export const blogLabels = {
  allPosts: 'All Posts',
  comments: 'Comments',
  commentPlaceholder: 'Write a comment...',
  publish: 'Publish',
  cancel: 'Cancel',
  updated: 'Updated',
}

/*
 * Article copy below is placeholder text written for this build.
 * Paste your published article into `body` (one entry per paragraph / heading).
 */
export const posts: BlogPost[] = [
  {
    slug: 'more-than-a-transfer',
    title: 'More Than A Transfer: A way to show you care.',
    excerpt:
      'Every transfer carries a reason behind it. Here is why we built Fiynix around those reasons.',
    author: 'Emediong Idemeto',
    published: '2026-08-12',
    updated: '2026-09-26',
    readMinutes: 2,
    views: 20,
    cover: media.blogCover,
    coverSrcset: media.blogCoverSrcset,
    coverAlt: 'A smiling woman in a white shirt looking at her phone in a café',
    body: [
      {
        type: 'paragraph',
        text: 'Rent is due back home. A younger cousin has just been accepted to university. A grandmother is turning eighty, and the whole family is gathering without you.',
      },
      {
        type: 'paragraph',
        text: 'Moments like these are why people send money across borders. The amount on the screen is only part of it — what really travels is your presence, even when you cannot be there in person.',
      },
      { type: 'paragraph', text: `That idea sits at the heart of ${BRAND_NAME}.` },
      { type: 'heading', text: 'Distance changes the route, not the care' },
      {
        type: 'paragraph',
        text: 'Moving abroad rarely means stepping back from the people who raised you. For most of us it means finding new ways to stay involved, and sending money is one of the most practical.',
      },
      {
        type: 'paragraph',
        text: `We built ${BRAND_NAME} so that staying involved takes less effort: quicker transfers, simpler steps and costs that make sense, so helping out fits into an ordinary week.`,
      },
      { type: 'heading', text: 'No surprises at checkout' },
      {
        type: 'paragraph',
        text: 'You should never have to guess what a transfer will cost. Before you confirm, the app shows the fee and the amount your recipient will get, so you can decide with the full picture.',
      },
      { type: 'heading', text: 'Where this blog fits in' },
      {
        type: 'paragraph',
        text: 'Launching the app is a first step. Here we will publish plain-language guides on international transfers, news about new features, and stories from the people who use them.',
      },
      { type: 'heading', text: "What's your reason?" },
      {
        type: 'paragraph',
        text: `Tuition, a wedding gift, groceries for the week — whatever sends you to the app, we are glad to help it arrive. Wherever you are, ${BRAND_NAME} keeps you close to the people you care about.`,
      },
    ],
  },
]

export const findPost = (slug: string) => posts.find((post) => post.slug === slug)
