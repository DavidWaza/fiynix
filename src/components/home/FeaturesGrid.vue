<script setup lang="ts">
import { ref } from 'vue'
import { features, featuresHeading } from '@/data/features'
import { useReveal } from '@/composables/useReveal'
import FeatureCard from './FeatureCard.vue'

const list = ref<HTMLElement | null>(null)
const { visible } = useReveal(list, 0.1)
</script>

<template>
  <section class="relative isolate overflow-hidden py-20 lg:py-28" aria-labelledby="features-title">
    <!-- soft glows + dot grid -->
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <span class="dot-grid absolute inset-0" />
      <span class="absolute -top-24 -left-24 size-96 rounded-full bg-primary/10 blur-3xl" />
      <span class="absolute -right-24 bottom-0 size-104 rounded-full bg-primary-soft/60 blur-3xl" />
    </div>

    <div class="page-container">
      <header class="mx-auto max-w-2xl text-center">
        <p
          class="eyebrow inline-flex items-center gap-2 rounded-full bg-primary-soft/60 px-3.5 py-1.5 text-primary-dark ring-1 ring-primary/15"
        >
          {{ featuresHeading.eyebrow }}
        </p>
        <h2
          id="features-title"
          class="mt-5 text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl"
        >
          {{ featuresHeading.title }}
        </h2>
      </header>

      <ul ref="list" class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <!-- staggered entrance lives on the <li> so card hover transitions stay instant -->
        <li
          v-for="(feature, i) in features"
          :key="feature.number"
          :style="{ transitionDelay: `${i * 110}ms` }"
          :class="[
            'motion-safe:transition motion-safe:duration-700 motion-safe:ease-out',
            feature.visual && 'md:col-span-2',
            visible
              ? 'translate-y-0 opacity-100'
              : 'motion-safe:translate-y-8 motion-safe:opacity-0',
          ]"
        >
          <FeatureCard :feature="feature" :revealed="visible" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.dot-grid {
  background-image: radial-gradient(
    color-mix(in oklab, var(--color-primary) 22%, transparent) 1px,
    transparent 1px
  );
  background-size: 22px 22px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent);
}
</style>
