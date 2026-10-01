<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { BRAND_NAME } from '@/data/site'
import { media } from '@/data/media'

// The logo artwork includes the wordmark, so no separate brand text is rendered.
withDefaults(defineProps<{ size?: 'md' | 'lg' }>(), { size: 'md' })
</script>

<template>
  <RouterLink to="/" class="inline-flex shrink-0 rounded-lg">
    <img
      :src="media.logo"
      :alt="`${BRAND_NAME} Remittance — home`"
      width="233"
      height="320"
      :class="size === 'lg' ? 'h-32 w-auto sm:h-40' : 'h-14 w-auto'"
    />
  </RouterLink>
</template>
