import { ref, type Ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

/**
 * Flips `visible` to true the first time `target` scrolls into view.
 * Pair with `motion-safe:` classes so reduced-motion users see content immediately.
 */
export function useReveal(target: Ref<HTMLElement | null>, threshold = 0.2) {
  const visible = ref(false)

  const { stop, isSupported } = useIntersectionObserver(
    target,
    ([entry]) => {
      if (entry?.isIntersecting) {
        visible.value = true
        stop()
      }
    },
    { threshold },
  )

  if (!isSupported.value) visible.value = true

  return { visible }
}
