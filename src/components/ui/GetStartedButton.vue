<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { primaryCta } from '@/data/navigation'
import { storeLinks } from '@/data/site'
import { currentPlatform, type DevicePlatform } from '@/utils/detectPlatform'
import BaseButton from './BaseButton.vue'

/**
 * "Get Started" CTA that sends iPhone/iPad visitors to the App Store and Android
 * visitors to Google Play. Everyone else (desktop) goes to the fallback route.
 */
withDefaults(
  defineProps<{
    variant?: 'primary' | 'outline' | 'ghost' | 'inverse'
    size?: 'sm' | 'md' | 'lg'
    block?: boolean
  }>(),
  { variant: 'primary', size: 'md', block: false },
)

// Detected after mount so the first render is identical everywhere
const platform = ref<DevicePlatform>('other')
onMounted(() => (platform.value = currentPlatform()))

const storeHref = computed(() =>
  platform.value === 'other'
    ? undefined
    : storeLinks.find((l) => l.platform === platform.value)?.href,
)
</script>

<template>
  <!-- Store links open in the same tab so mobile browsers hand straight off to the store app -->
  <BaseButton
    v-if="storeHref"
    :href="storeHref"
    :new-tab="false"
    :variant="variant"
    :size="size"
    :block="block"
  >
    <slot>{{ primaryCta.label }}</slot>
  </BaseButton>
  <BaseButton v-else :to="primaryCta.to" :variant="variant" :size="size" :block="block">
    <slot>{{ primaryCta.label }}</slot>
  </BaseButton>
</template>
