import { nextTick, watch, type Ref } from 'vue'
import { useEventListener } from '@vueuse/core'

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Keeps Tab / Shift+Tab focus inside `container` while `active` is true,
 * focuses the first focusable element on activation and restores focus to
 * the previously focused element on deactivation.
 */
export function useFocusTrap(container: Ref<HTMLElement | null>, active: Ref<boolean>) {
  let previouslyFocused: HTMLElement | null = null

  const focusables = () =>
    Array.from(container.value?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []).filter(
      (el) => !el.hasAttribute('inert') && el.offsetParent !== null,
    )

  watch(active, async (isActive) => {
    if (isActive) {
      previouslyFocused = document.activeElement as HTMLElement | null
      await nextTick()
      focusables()[0]?.focus()
    } else {
      previouslyFocused?.focus()
      previouslyFocused = null
    }
  })

  useEventListener(document, 'keydown', (event: KeyboardEvent) => {
    if (!active.value || event.key !== 'Tab') return
    const items = focusables()
    const first = items[0]
    const last = items[items.length - 1]
    if (!first || !last) return

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  })
}
