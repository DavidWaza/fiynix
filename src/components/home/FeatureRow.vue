<script setup lang="ts">
import { ref } from 'vue'
import type { Feature } from '@/types'
import { useReveal } from '@/composables/useReveal'
import FeatureIcon from './FeatureIcon.vue'

/** `reversed` puts the graphic on the left on desktop (rows alternate) */
defineProps<{ feature: Feature; reversed: boolean }>()

const el = ref<HTMLElement | null>(null)
const { visible } = useReveal(el, 0.25)
</script>

<template>
  <article
    ref="el"
    :class="[
      'group h-full',
      // Mobile / tablet: tidy card
      'rounded-3xl bg-surface p-6 shadow-card ring-1 ring-ink/5 sm:p-7',
      // Desktop: open two-column row (as on the live site)
      'lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0',
      'motion-safe:transition motion-safe:duration-700 motion-safe:ease-out lg:motion-safe:transition-none',
      visible
        ? 'translate-y-0 opacity-100'
        : 'max-lg:motion-safe:translate-y-6 max-lg:motion-safe:opacity-0',
    ]"
    :aria-labelledby="`feature-${feature.number}`"
  >
    <!-- Mobile / tablet: icon tile on the left, number on the right — identical on every card -->
    <div class="mb-5 flex items-center justify-between lg:hidden" aria-hidden="true">
      <span class="inline-flex size-14 items-center justify-center rounded-2xl bg-primary-soft/50">
        <FeatureIcon :name="feature.icon" class="size-8" />
      </span>
      <span class="font-display text-5xl leading-none font-bold tracking-tight text-taupe/90">
        {{ feature.number }}
      </span>
    </div>

    <!-- Text: slides in from its own side -->
    <div
      :class="[
        'motion-safe:transition motion-safe:duration-700 motion-safe:ease-out',
        reversed ? 'lg:order-last lg:justify-self-start' : 'lg:justify-self-end',
        visible
          ? 'translate-x-0 opacity-100'
          : [
              'lg:motion-safe:opacity-0',
              reversed ? 'motion-safe:lg:translate-x-10' : 'motion-safe:lg:-translate-x-10',
            ],
      ]"
    >
      <h3
        :id="`feature-${feature.number}`"
        class="text-xl leading-snug font-bold text-ink sm:text-2xl lg:inline-block lg:text-[1.75rem] lg:leading-tight lg:min-w-[22rem] lg:border-b-2 lg:border-primary lg:pb-1 lg:font-normal"
      >
        {{ feature.title }}
      </h3>
      <p class="mt-2 text-base leading-relaxed text-taupe lg:mt-12 lg:max-w-xs">
        {{ feature.description }}
      </p>
    </div>

    <!-- Desktop: large orange shape with the number layered over it -->
    <div
      :class="[
        'relative hidden size-64 lg:block xl:size-72',
        reversed ? 'lg:justify-self-end' : 'lg:justify-self-start',
        'motion-safe:transition motion-safe:duration-700 motion-safe:ease-out',
        visible ? 'scale-100 opacity-100' : 'motion-safe:scale-90 motion-safe:opacity-0',
      ]"
      aria-hidden="true"
    >
      <FeatureIcon
        :name="feature.icon"
        class="absolute inset-0 size-full transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-3 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 motion-reduce:group-hover:rotate-0"
      />
      <span
        class="absolute inset-x-0 top-1/2 text-center font-sans text-[9.5rem] leading-none font-medium tracking-tight text-taupe"
        :class="feature.icon === 'shield' ? '-translate-y-[60%]' : '-translate-y-[30%]'"
      >
        {{ feature.number }}
      </span>
    </div>
  </article>
</template>
