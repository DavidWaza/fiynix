<script setup lang="ts">
import { computed } from 'vue'
import { useClipboard } from '@vueuse/core'
import { site } from '@/data/site'
import SocialIcon from '@/components/ui/SocialIcon.vue'
import type { SocialPlatform } from '@/types'

const props = defineProps<{ slug: string; title: string }>()

const url = computed(() => new URL(`/blog/${props.slug}`, site.url).href)
const { copy, copied } = useClipboard({ copiedDuring: 2000 })

const targets = computed<{ platform: SocialPlatform; label: string; href: string }[]>(() => {
  const u = encodeURIComponent(url.value)
  const t = encodeURIComponent(props.title)
  return [
    {
      platform: 'facebook',
      label: 'Share on Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
    },
    { platform: 'x', label: 'Share on X', href: `https://x.com/intent/post?url=${u}&text=${t}` },
    {
      platform: 'linkedin',
      label: 'Share on LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    },
  ]
})
</script>

<template>
  <ul class="flex items-center gap-5 py-4 text-ink" aria-label="Share this post">
    <li v-for="target in targets" :key="target.platform">
      <a
        :href="target.href"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="target.label"
        class="inline-flex size-6 items-center justify-center rounded hover:text-primary"
      >
        <SocialIcon :platform="target.platform" class="size-3.5" />
      </a>
    </li>
    <li>
      <button
        type="button"
        class="inline-flex size-6 items-center justify-center rounded hover:text-primary"
        :aria-label="copied ? 'Link copied' : 'Copy link'"
        @click="copy(url)"
      >
        <svg
          v-if="!copied"
          class="size-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path
            d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1.2 1.2M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1.2-1.2"
            stroke-linecap="round"
          />
        </svg>
        <svg
          v-else
          class="size-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.4"
          aria-hidden="true"
        >
          <path d="m5 12.5 4.5 4.5L19 7.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </li>
  </ul>
</template>
