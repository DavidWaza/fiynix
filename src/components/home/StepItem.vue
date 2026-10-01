<script setup lang="ts">
import { ref } from 'vue'
import type { Step } from '@/types'
import { useReveal } from '@/composables/useReveal'

const props = defineProps<{ step: Step; index: number }>()

const el = ref<HTMLElement | null>(null)
const { visible } = useReveal(el)
</script>

<template>
  <li
    ref="el"
    :style="{ transitionDelay: `${props.index * 120}ms` }"
    :class="[
      'relative flex gap-5 motion-safe:transition motion-safe:duration-700 motion-safe:ease-out lg:flex-col lg:items-center lg:gap-6 lg:text-center',
      visible ? 'translate-y-0 opacity-100' : 'motion-safe:translate-y-6 motion-safe:opacity-0',
    ]"
  >
    <span
      class="relative z-10 inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-primary font-display text-xl font-bold text-white ring-8 ring-ink"
      aria-hidden="true"
    >
      {{ step.number }}
    </span>
    <div class="pt-2 lg:pt-0">
      <h3 class="text-xl font-bold text-white">
        <span class="sr-only">Step {{ step.number }}: </span>{{ step.title }}
      </h3>
      <p class="mt-1.5 text-white/75">{{ step.description }}</p>
    </div>
  </li>
</template>
