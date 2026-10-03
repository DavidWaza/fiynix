<script setup lang="ts">
import { computed, ref, useId, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useWindowScroll } from '@vueuse/core'
import { mainNav } from '@/data/navigation'
import { isNavGroup } from '@/types'
import AppLogo from '@/components/ui/AppLogo.vue'
import GetStartedButton from '@/components/ui/GetStartedButton.vue'
import MobileMenu from './MobileMenu.vue'
import NavDropdown from './NavDropdown.vue'

const route = useRoute()
const { y } = useWindowScroll()

const mobileOpen = ref(false)
const mobileMenuId = useId()

/** Transparent only on routes that opt in (pages with a full-bleed hero) */
const transparent = computed(() => route.meta.transparentHeader === true && y.value <= 16)

watch(
  () => route.fullPath,
  () => (mobileOpen.value = false),
)
</script>

<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-300',
      transparent && 'bg-transparent',
      !transparent && 'bg-cream',
      !transparent && y > 16 && 'shadow-[0_4px_20px_-8px_rgb(0_0_0/0.15)]',
    ]"
  >
    <div class="page-container flex h-(--header-height) items-center justify-between gap-6">
      <AppLogo :class="transparent && 'focus-visible:outline-white'" />

      <nav aria-label="Main" class="hidden lg:block">
        <ul class="flex items-center gap-1">
          <li v-for="item in mainNav" :key="item.label">
            <NavDropdown v-if="isNavGroup(item)" :group="item" :light="transparent" />
            <RouterLink
              v-else
              :to="item.to"
              :class="[
                'rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors',
                transparent
                  ? 'text-white hover:bg-white/15 focus-visible:outline-white'
                  : 'text-ink hover:bg-ink/5',
              ]"
              :exact-active-class="transparent ? 'bg-white/15' : 'text-primary-dark'"
            >
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-2">
        <!-- Desktop only: on smaller screens it lives in the mobile menu.
             Hidden via a wrapper because the button's own inline-flex would override `hidden`. -->
        <div class="hidden lg:block">
          <GetStartedButton
            :variant="transparent ? 'inverse' : 'primary'"
            size="sm"
            :class="transparent && 'focus-visible:outline-white'"
          />
        </div>

        <button
          type="button"
          :class="[
            'inline-flex size-11 items-center justify-center rounded-full lg:hidden',
            transparent
              ? 'text-white hover:bg-white/15 focus-visible:outline-white'
              : 'text-ink hover:bg-ink/5',
          ]"
          :aria-expanded="mobileOpen"
          :aria-controls="mobileMenuId"
          aria-label="Open menu"
          @click="mobileOpen = true"
        >
          <!-- staggered lines: short / long / medium -->
          <svg
            class="size-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path d="M3.5 6.5h9M3.5 12h17M3.5 17.5h13" />
          </svg>
        </button>
      </div>
    </div>

    <MobileMenu :id="mobileMenuId" :open="mobileOpen" @close="mobileOpen = false" />
  </header>
</template>
