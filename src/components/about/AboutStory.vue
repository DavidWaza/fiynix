<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { aboutStory } from '@/data/about'
</script>

<template>
  <section class="bg-cream py-4 lg:py-4" aria-labelledby="about-story-title">
    <div class="page-container grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
      <div class="py-12 lg:py-20">
        <h2
          id="about-story-title"
          class="font-sans text-4xl leading-tight font-normal tracking-tight lg:text-[2.625rem]"
        >
          {{ aboutStory.titleLine1 }}
          <span class="block text-primary">{{ aboutStory.titleLine2 }}</span>
        </h2>
        <p class="mt-10 text-xl text-ink lg:text-[1.375rem]">{{ aboutStory.lead }}</p>
        <p
          v-for="paragraph in aboutStory.paragraphs"
          :key="paragraph"
          class="mt-6 text-lg leading-snug text-ink"
        >
          {{ paragraph }}
        </p>
        <RouterLink
          :to="aboutStory.cta.to"
          class="mt-12 inline-flex h-12 items-center gap-3 rounded-full bg-primary px-16 text-base tracking-[0.2em] text-white transition-colors hover:bg-primary-band"
        >
          {{ aboutStory.cta.label }}
          <svg
            class="h-3 w-9"
            viewBox="0 0 36 12"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M0 6h34M29 1l5 5-5 5" />
          </svg>
        </RouterLink>
      </div>

      <!-- phone wireframe on a soft panel -->
      <div
        class="flex justify-center bg-cream-deep px-6 pt-20 pb-20 lg:h-full lg:items-start"
        aria-hidden="true"
      >
        <div
          class="w-full max-w-75 rounded-[2.75rem] border-[3px] border-primary-soft/70 bg-white p-5 pt-8"
        >
          <span class="mx-auto block h-3 w-20 rounded-full bg-primary-soft/60" />
          <div class="mt-6 rounded-b-3xl bg-cream px-5 pt-5 pb-8">
            <div
              class="rounded-2xl border border-primary-shade bg-primary-band px-6 py-6 text-white"
            >
              <p class="text-lg">{{ aboutStory.phone.balanceLabel }}</p>
              <p class="mt-2 text-[1.75rem] leading-none font-medium tracking-wide">
                {{ aboutStory.phone.balance }}
              </p>
            </div>
            <div class="mt-6 grid grid-cols-2 gap-5">
              <span
                class="flex h-16 items-center justify-center rounded-xl bg-white text-primary-band"
              >
                <svg
                  class="size-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.4"
                >
                  <path d="M6 18 18 6M9 6h9v9" />
                </svg>
              </span>
              <span
                class="flex h-16 items-center justify-center rounded-xl bg-white text-primary-band"
              >
                <svg
                  class="size-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.4"
                >
                  <path d="M6 6l12 12M18 9v9H9" />
                </svg>
              </span>
            </div>
            <div class="mt-12 space-y-3">
              <span class="block h-5 rounded-full bg-primary-soft/40" />
              <span class="block h-5 w-3/4 rounded-full bg-primary-soft/40" />
              <span class="block h-5 w-5/6 rounded-full bg-primary-soft/40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
