import { computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'

export interface BlogComment {
  id: string
  author: string
  text: string
  /** ISO timestamp */
  createdAt: string
}

/**
 * Comments stored in this browser only — there is no backend yet.
 * Replace the storage with API calls when one exists.
 */
const store = useLocalStorage<Record<string, BlogComment[]>>(
  'blog-comments',
  {},
  { onError: () => {} },
)

export function useComments(slug: string) {
  const comments = computed(() => store.value[slug] ?? [])

  function add(author: string, text: string) {
    const comment: BlogComment = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      author: author.trim() || 'Guest',
      text: text.trim(),
      createdAt: new Date().toISOString(),
    }
    store.value = { ...store.value, [slug]: [...comments.value, comment] }
  }

  return { comments, count: computed(() => comments.value.length), add }
}
