<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { contactDetails } from '@/data/contact'
import { socialLinks } from '@/data/site'
import SocialIcon from '@/components/ui/SocialIcon.vue'

const isExternal = (href: string) => /^(https?:|mailto:)/.test(href)
</script>

<template>
  <aside aria-label="Other ways to reach us">
    <ul class="space-y-12 rounded-3xl bg-primary-soft px-5 py-9">
      <li v-for="item in contactDetails" :key="item.label" class="flex gap-3">
        <span
          class="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-primary"
          aria-hidden="true"
        >
          <svg
            v-if="item.icon === 'mail'"
            class="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
          >
            <rect x="3" y="6" width="18" height="13" rx="1.5" />
            <path d="m3.5 7 8.5 6.5L20.5 7" />
            <circle cx="12" cy="4.5" r="2.5" fill="currentColor" stroke="none" />
          </svg>
          <svg
            v-else-if="item.icon === 'pin'"
            class="size-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"
            />
          </svg>
          <svg
            v-else
            class="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.4"
          >
            <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
            <rect x="3" y="14" width="4.5" height="6" rx="1.5" fill="currentColor" />
            <rect x="16.5" y="14" width="4.5" height="6" rx="1.5" fill="currentColor" />
          </svg>
        </span>
        <div class="pt-0.5">
          <p class="text-taupe">{{ item.label }}</p>
          <a
            v-if="isExternal(item.href)"
            :href="item.href"
            :target="item.href.startsWith('http') ? '_blank' : undefined"
            :rel="item.href.startsWith('http') ? 'noopener noreferrer' : undefined"
            class="font-bold text-ink underline underline-offset-2 hover:text-primary-dark"
          >
            {{ item.value }}
          </a>
          <RouterLink
            v-else
            :to="item.href"
            class="font-bold text-ink underline underline-offset-2 hover:text-primary-dark"
          >
            {{ item.value }}
          </RouterLink>
        </div>
      </li>
    </ul>

    <ul class="mt-6 flex gap-2.5" aria-label="Follow us">
      <li v-for="social in socialLinks" :key="social.platform">
        <a
          :href="social.href"
          :aria-label="social.label"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex size-10 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-primary-dark"
        >
          <SocialIcon :platform="social.platform" class="size-5" />
        </a>
      </li>
    </ul>
  </aside>
</template>
