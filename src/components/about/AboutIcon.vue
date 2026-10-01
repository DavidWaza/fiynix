<script setup lang="ts">
import type { AboutIconName } from '@/data/about'

defineProps<{ name: AboutIconName }>()
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <template v-if="name === 'target'">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="2" />
    </template>
    <template v-else-if="name === 'globe'">
      <circle cx="12" cy="12" r="9" />
      <path
        d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z"
      />
    </template>
    <template v-else-if="name === 'wallet'">
      <path
        d="M4 7.5h15a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 19 19.5H5A1.5 1.5 0 0 1 3.5 18V6A1.5 1.5 0 0 1 5 4.5h11"
      />
      <path d="M20.5 11.5h-4a2 2 0 0 0 0 4h4" />
    </template>
    <path
      v-else-if="name === 'shield'"
      d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6L12 3Z"
      fill="currentColor"
    />
    <template v-else-if="name === 'search'">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </template>
    <path v-else-if="name === 'check'" d="m5 12.5 4.5 4.5L19 7.5" stroke-width="2.6" />
    <template v-else-if="name === 'id-card'">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="currentColor" stroke="none" />
      <path d="M3 9.5h18" stroke="white" />
    </template>
    <template v-else-if="name === 'screen'">
      <rect x="3" y="4" width="18" height="13" rx="2" fill="currentColor" stroke="none" />
      <path d="M9 20.5h6M12 17v3.5" />
    </template>
    <template v-else-if="name === 'chart'">
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="m7 12 3-3 2.5 2.5L17 7M12 16v4.5M9 20.5h6" />
    </template>
    <template v-else-if="name === 'bars'">
      <path d="M6 20v-5M12 20V10M18 20V4" stroke-width="3.2" stroke-linecap="butt" />
    </template>
    <template v-else>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" fill="currentColor" stroke="none" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
      <circle cx="12" cy="15.5" r="1.4" fill="white" stroke="none" />
    </template>
  </svg>
</template>
