<script setup lang="ts">
import { computed, ref, useId, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { onClickOutside, onKeyStroke } from '@vueuse/core'
import type { NavGroup } from '@/types'

const props = defineProps<{ group: NavGroup; light: boolean }>()

const route = useRoute()
const open = ref(false)
const root = ref<HTMLElement | null>(null)
const button = ref<HTMLButtonElement | null>(null)
const menuId = useId()

const active = computed(() => props.group.children.some((c) => c.to === route.path))

watch(
  () => route.fullPath,
  () => (open.value = false),
)

/** Close when keyboard focus leaves the dropdown */
function onFocusOut(event: FocusEvent) {
  if (!root.value?.contains(event.relatedTarget as Node | null)) open.value = false
}

onClickOutside(root, () => (open.value = false))
onKeyStroke('Escape', () => {
  if (!open.value) return
  open.value = false
  button.value?.focus()
})
</script>

<template>
  <div ref="root" class="relative" @focusout="onFocusOut">
    <button
      ref="button"
      type="button"
      :aria-expanded="open"
      :aria-controls="menuId"
      :class="[
        'inline-flex items-center gap-1 rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors',
        light
          ? 'text-white hover:bg-white/15 focus-visible:outline-white'
          : 'text-ink hover:bg-ink/5',
        !light && active && 'text-primary-dark',
      ]"
      @click="open = !open"
    >
      {{ group.label }}
      <svg
        :class="['size-4 transition-transform motion-reduce:transition-none', open && 'rotate-180']"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.2 7.2a.75.75 0 0 1 1.06.02L10 11.17l3.74-3.95a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
        />
      </svg>
    </button>

    <Transition
      enter-active-class="transition duration-150 ease-out motion-reduce:transition-none"
      leave-active-class="transition duration-100 ease-in motion-reduce:transition-none"
      enter-from-class="opacity-0 -translate-y-1"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <ul
        v-show="open"
        :id="menuId"
        class="absolute right-0 mt-2 w-64 rounded-2xl bg-surface p-2 shadow-card-hover ring-1 ring-ink/5"
      >
        <li v-for="child in group.children" :key="child.to">
          <RouterLink
            :to="child.to"
            class="block rounded-xl px-4 py-2.5 text-sm text-ink transition-colors hover:bg-cream"
            active-class="bg-cream font-semibold text-primary-dark"
          >
            {{ child.label }}
          </RouterLink>
        </li>
      </ul>
    </Transition>
  </div>
</template>
