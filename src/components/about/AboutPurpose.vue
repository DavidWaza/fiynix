<script setup lang="ts">
import { aboutPurpose } from '@/data/about'
import AboutIcon from './AboutIcon.vue'

const { mission, vision } = aboutPurpose
</script>

<template>
  <section class="bg-cream py-20 lg:py-24" aria-labelledby="about-purpose-title">
    <div class="page-container">
      <div class="lg:px-6">
        <p class="font-display text-lg font-semibold text-primary">{{ aboutPurpose.eyebrow }}</p>
        <h2 id="about-purpose-title" class="mt-2 text-3xl font-bold">{{ aboutPurpose.title }}</h2>

        <div
          class="mt-8 grid gap-8 md:grid-cols-[minmax(0,26rem)_minmax(0,28rem)] md:justify-between lg:gap-20"
        >
          <article class="rounded-2xl border border-ink bg-white p-7 pt-4">
            <span
              class="inline-flex size-14 items-center justify-center rounded-xl bg-primary-soft text-primary"
            >
              <AboutIcon :name="mission.icon" class="size-8" />
            </span>
            <h3 class="mt-3 font-sans text-3xl font-normal text-primary">{{ mission.title }}</h3>
            <p class="mt-2 max-w-xs text-base leading-snug text-ink">{{ mission.description }}</p>
          </article>

          <article class="rounded-2xl border border-ink bg-primary p-7 pt-3">
            <span
              class="inline-flex size-14 items-center justify-center rounded-xl bg-ink text-white"
            >
              <AboutIcon :name="vision.icon" class="size-8" />
            </span>
            <h3 class="mt-3 font-sans text-3xl font-normal text-white">{{ vision.title }}</h3>
            <p class="mt-2 max-w-xs text-base leading-snug font-medium text-white">
              {{ vision.description }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
