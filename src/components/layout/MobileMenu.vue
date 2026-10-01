<script setup lang="ts">
import { ref, toRef, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { onKeyStroke, useScrollLock } from '@vueuse/core'
import { mainNav } from '@/data/navigation'
import { isNavGroup } from '@/types'
import { useFocusTrap } from '@/composables/useFocusTrap'
import AppLogo from '@/components/ui/AppLogo.vue'
import GetStartedButton from '@/components/ui/GetStartedButton.vue'
import StoreBadges from '@/components/ui/StoreBadges.vue'

const props = defineProps<{ open: boolean; id: string }>()
const emit = defineEmits<{ close: [] }>()

const panel = ref<HTMLElement | null>(null)
const open = toRef(props, 'open')

useFocusTrap(panel, open)

const scrollLock = useScrollLock(typeof document !== 'undefined' ? document.body : null)
watch(open, (isOpen) => (scrollLock.value = isOpen))

onKeyStroke('Escape', () => {
  if (props.open) emit('close')
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300 motion-reduce:transition-none"
      leave-active-class="transition-opacity duration-200 motion-reduce:transition-none"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-50 bg-overlay lg:hidden"
        aria-hidden="true"
        @click="emit('close')"
      />
    </Transition>

    <Transition
      enter-active-class="transition-transform duration-300 ease-out motion-reduce:transition-none"
      leave-active-class="transition-transform duration-200 ease-in motion-reduce:transition-none"
      enter-from-class="translate-x-full"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="open"
        :id="id"
        ref="panel"
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        class="fixed inset-y-0 right-0 z-50 flex h-dvh w-full max-w-sm flex-col overflow-y-auto bg-surface shadow-2xl lg:hidden"
      >
        <div class="flex h-20 shrink-0 items-center justify-between px-4 sm:px-6">
          <AppLogo />
          <button
            type="button"
            class="inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-ink/5"
            aria-label="Close menu"
            @click="emit('close')"
          >
            <svg
              class="size-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6 6 18" stroke-linecap="round" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile" class="flex-1 px-4 pb-6 sm:px-6">
          <ul class="space-y-1">
            <template v-for="item in mainNav" :key="item.label">
              <li v-if="!isNavGroup(item)">
                <RouterLink
                  :to="item.to"
                  class="block rounded-xl px-3 py-3 font-display text-lg font-semibold text-ink hover:bg-cream"
                  active-class="text-primary-dark"
                  @click="emit('close')"
                >
                  {{ item.label }}
                </RouterLink>
              </li>
              <li v-else class="pt-4">
                <p class="eyebrow px-3 pb-2 text-muted">{{ item.label }}</p>
                <ul>
                  <li v-for="child in item.children" :key="child.to">
                    <RouterLink
                      :to="child.to"
                      class="block rounded-xl px-3 py-2.5 text-base text-ink hover:bg-cream"
                      active-class="text-primary-dark font-semibold"
                      @click="emit('close')"
                    >
                      {{ child.label }}
                    </RouterLink>
                  </li>
                </ul>
              </li>
            </template>
          </ul>
        </nav>

        <div class="space-y-5 border-t border-ink/10 px-4 py-6 sm:px-6">
          <GetStartedButton block @click="emit('close')" />
          <StoreBadges />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
