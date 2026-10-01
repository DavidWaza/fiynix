<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { usePageMeta } from '@/composables/usePageMeta'

const route = useRoute()
usePageMeta()
</script>

<template>
  <a
    href="#main"
    class="sr-only z-50 rounded-full bg-ink px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
  >
    Skip to content
  </a>
  <AppHeader />
  <!-- pages without a full-bleed hero are pushed below the fixed header -->
  <main
    id="main"
    tabindex="-1"
    :class="['outline-none', !route.meta.transparentHeader && 'pt-(--header-height)']"
  >
    <RouterView />
  </main>
  <AppFooter />
</template>
