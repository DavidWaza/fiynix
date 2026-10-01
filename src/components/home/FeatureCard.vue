<script setup lang="ts">
import type { Feature } from '@/types'
import FeatureIcon from './FeatureIcon.vue'
import FeatureVisual from './FeatureVisual.vue'

defineProps<{ feature: Feature; revealed: boolean }>()

/** Spotlight follows the pointer (mouse / pen only) */
function onPointerMove(event: PointerEvent) {
  if (event.pointerType === 'touch') return
  const el = event.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
  el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
}
</script>

<template>
  <article
    :class="[
      'group relative isolate flex h-full flex-col gap-8 overflow-hidden rounded-3xl border border-ink/8 bg-surface p-7 shadow-card sm:p-8',
      'transition duration-500 ease-out hover:-translate-y-1 hover:border-primary/50 hover:shadow-card-hover',
      'focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/20',
      'motion-reduce:transition-none motion-reduce:hover:translate-y-0',
      feature.visual && 'md:flex-row md:items-center',
    ]"
    @pointermove="onPointerMove"
  >
    <!-- cursor spotlight -->
    <div
      class="spotlight pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      aria-hidden="true"
    />

    <span
      class="absolute top-7 right-7 font-display text-sm font-bold tracking-widest text-ink/20 transition-colors duration-300 group-hover:text-primary sm:top-8 sm:right-8"
      aria-hidden="true"
    >
      {{ feature.number }}
    </span>

    <div class="flex flex-1 flex-col">
      <span
        class="inline-flex size-14 items-center justify-center rounded-2xl bg-primary-soft text-primary-dark transition duration-300 group-hover:-rotate-6 group-hover:scale-105 group-hover:bg-primary group-hover:text-white group-focus-within:bg-primary group-focus-within:text-white motion-reduce:group-hover:rotate-0"
      >
        <FeatureIcon :name="feature.icon" class="size-7" />
      </span>
      <h3 class="mt-3 text-xl font-bold sm:text-2xl">{{ feature.title }}</h3>
      <p class="mt-2.5 max-w-md leading-relaxed">{{ feature.description }}</p>
    </div>

    <FeatureVisual
      v-if="feature.visual"
      :kind="feature.visual"
      :active="revealed"
      class="md:w-[46%] md:shrink-0"
    />
  </article>
</template>
