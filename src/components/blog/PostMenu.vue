<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import { onClickOutside, onKeyStroke, useClipboard } from '@vueuse/core'
import { site } from '@/data/site'

const props = withDefaults(defineProps<{ slug: string; light?: boolean }>(), { light: false })

const open = ref(false)
const root = ref<HTMLElement | null>(null)
const menuId = useId()
const url = computed(() => new URL(`/blog/${props.slug}`, site.url).href)
const { copy, copied } = useClipboard({ copiedDuring: 2000 })

onClickOutside(root, () => (open.value = false))
onKeyStroke('Escape', () => (open.value = false))

async function share() {
  if (navigator.share) {
    await navigator.share({ url: url.value }).catch(() => {})
  } else {
    await copy(url.value)
  }
  open.value = false
}
</script>

<template>
  <div ref="root" class="relative z-10">
    <button
      type="button"
      :class="[
        'inline-flex size-7 items-center justify-center rounded-full',
        light
          ? 'text-cream hover:bg-white/15 focus-visible:outline-white'
          : 'text-ink hover:bg-ink/5',
      ]"
      aria-label="More actions"
      :aria-expanded="open"
      :aria-controls="menuId"
      @click.prevent="open = !open"
    >
      <svg class="size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <circle cx="8" cy="3" r="1.4" />
        <circle cx="8" cy="8" r="1.4" />
        <circle cx="8" cy="13" r="1.4" />
      </svg>
    </button>
    <div
      v-show="open"
      :id="menuId"
      class="absolute right-0 mt-1 w-40 rounded-xl bg-surface p-1.5 text-sm shadow-card-hover ring-1 ring-ink/5"
    >
      <button
        type="button"
        class="block w-full rounded-lg px-3 py-2 text-left text-ink hover:bg-cream"
        @click.prevent="share"
      >
        Share post
      </button>
    </div>
    <span class="sr-only" aria-live="polite">{{ copied ? 'Link copied' : '' }}</span>
  </div>
</template>
