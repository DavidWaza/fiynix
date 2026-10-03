<script setup lang="ts">
import type { FeatureIcon } from '@/types'

defineProps<{ name: FeatureIcon }>()
</script>

<template>
  <!-- Solid brand-orange shapes; the big number is layered over them on desktop -->
  <svg
    v-if="name === 'shield'"
    viewBox="0 0 120 160"
    class="text-primary"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M6 10C38 2 82 0 116 6c3 1 4 3 4 6l-2 66c-2 32-24 58-56 78-2 2-5 2-7 0C27 136 8 110 4 80L2 16c0-3 1-5 4-6Z"
    />
  </svg>

  <svg
    v-else-if="name === 'dollar'"
    viewBox="0 0 110 160"
    class="text-primary"
    aria-hidden="true"
    focusable="false"
  >
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <path stroke-width="16" d="M58 10v140" />
      <path
        stroke-width="22"
        d="M90 46C84 30 66 24 50 26 30 28 18 40 20 56c2 18 22 24 38 28 18 4 36 10 36 30 0 18-18 28-38 28-18 0-34-8-40-22"
      />
    </g>
  </svg>

  <svg
    v-else-if="name === 'chevrons'"
    viewBox="0 0 120 100"
    class="text-primary"
    aria-hidden="true"
    focusable="false"
  >
    <path fill="currentColor" d="M4 6h30l34 44-34 44H4l34-44L4 6Z" />
    <path fill="currentColor" d="M52 6h30l34 44-34 44H52l34-44L52 6Z" />
  </svg>

  <svg v-else viewBox="0 0 160 140" class="text-primary" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M10 8c48-4 96-6 140-6 6 0 9 4 8 10l-4 74c0 8-6 14-14 14l-72 4-48 34c-3 2-6 0-6-3L8 104 4 16c0-5 2-8 6-8Z"
    />
    <g fill="white">
      <ellipse cx="54" cy="50" rx="12" ry="9" />
      <ellipse cx="86" cy="48" rx="12" ry="9" />
      <ellipse cx="118" cy="46" rx="12" ry="9" />
    </g>
  </svg>
</template>
