<script setup lang="ts">
import { useLike } from '@/composables/useLike'

const props = defineProps<{ slug: string; title: string }>()
const { isLiked, toggle } = useLike(props.slug)
</script>

<template>
  <button
    type="button"
    class="relative z-10 inline-flex size-6 items-center justify-center rounded-full text-heart"
    :aria-pressed="isLiked"
    :aria-label="`Like ${title}`"
    @click.prevent="toggle"
  >
    <svg
      class="size-4.5"
      viewBox="0 0 24 24"
      :fill="isLiked ? 'currentColor' : 'none'"
      stroke="currentColor"
      stroke-width="1.6"
      aria-hidden="true"
    >
      <path
        d="M12 20.5s-7.5-4.6-9-9.4C1.9 7.7 4 4.5 7.3 4.5c2 0 3.6 1.1 4.7 2.8 1.1-1.7 2.7-2.8 4.7-2.8 3.3 0 5.4 3.2 4.3 6.6-1.5 4.8-9 9.4-9 9.4Z"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>
