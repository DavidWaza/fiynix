import { computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'

/**
 * Per-visitor "like" for a post, remembered in this browser only.
 * Swap for an API call once there is a backend.
 */
export function useLike(slug: string) {
  const liked = useLocalStorage<string[]>('blog-likes', [], {
    onError: () => {}, // storage blocked (private mode etc.) — fall back to in-memory
  })

  const isLiked = computed(() => liked.value.includes(slug))

  function toggle() {
    liked.value = isLiked.value ? liked.value.filter((s) => s !== slug) : [...liked.value, slug]
  }

  return { isLiked, toggle }
}
