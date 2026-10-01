<script setup lang="ts">
import { storeLinks } from '@/data/site'

withDefaults(defineProps<{ tone?: 'dark' | 'light' }>(), { tone: 'dark' })
</script>

<template>
  <!--
    Styled stand-ins for the official store badges. Before launch, swap in the
    official artwork from Apple and Google to meet their brand guidelines.
  -->
  <ul class="flex flex-wrap gap-3" aria-label="Download the app">
    <li v-for="link in storeLinks" :key="link.platform">
      <a
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`${link.caption} ${link.store}`"
        :class="[
          'flex h-14 min-w-44 items-center gap-3 rounded-xl px-4 transition-transform duration-200 hover:-translate-y-0.5',
          tone === 'dark'
            ? 'bg-ink text-white ring-1 ring-white/15'
            : 'bg-white text-ink ring-1 ring-ink/10',
        ]"
      >
        <svg
          v-if="link.platform === 'ios'"
          class="size-7 shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.75 2.27-1.6 2.78-.41 6.9 1.15 9.15.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.66ZM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.66 1.37-.58.67-1.1 1.76-.96 2.8 1.01.08 2.05-.52 2.68-1.28Z"
          />
        </svg>
        <svg
          v-else
          class="size-6 shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M3.6 2.2 13.4 12l-9.8 9.8a1.5 1.5 0 0 1-.6-1.2V3.4c0-.5.2-.9.6-1.2Z" />
          <path d="m16.8 8.6-3.4 3.4-9.8-9.8c.4-.3 1-.3 1.5 0l11.7 6.4Z" opacity=".75" />
          <path d="m16.8 15.4-11.7 6.4c-.5.3-1.1.3-1.5 0l9.8-9.8 3.4 3.4Z" opacity=".55" />
          <path d="m20.4 13.4-3.6 2-3.4-3.4 3.4-3.4 3.6 2c1 .6 1 2.2 0 2.8Z" opacity=".85" />
        </svg>
        <span class="flex flex-col leading-tight">
          <span class="text-[0.6875rem] opacity-80">{{ link.caption }}</span>
          <span class="font-display text-lg font-semibold">{{ link.store }}</span>
        </span>
      </a>
    </li>
  </ul>
</template>
