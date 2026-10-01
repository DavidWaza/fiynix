<script setup lang="ts">
import { aboutBusinessModel } from '@/data/about'
import AboutIcon from './AboutIcon.vue'

const lastIndex = aboutBusinessModel.flow.length - 1
</script>

<template>
  <section
    class="relative isolate overflow-hidden bg-cream pt-12 pb-20 lg:pb-24"
    aria-labelledby="about-model-title"
  >
    <!-- faint decorative shapes -->
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <span class="absolute top-24 -left-16 h-120 w-40 -skew-x-12 bg-cream-deep" />
      <span class="absolute top-0 right-[18%] h-28 w-14 skew-x-30 bg-primary-soft/50" />
      <span class="absolute top-0 right-0 h-80 w-44 bg-cream-deep" />
      <span class="absolute right-[24%] bottom-0 h-16 w-72 bg-cream-deep" />
      <span class="absolute top-36 left-[20%] h-6 w-9 bg-primary-soft/60" />
      <span class="absolute right-[10%] bottom-6 size-5 bg-primary-soft/70" />
      <span class="absolute top-6 right-[34%] size-4 bg-primary-soft/70" />
      <svg class="absolute top-[78%] left-[14%] size-8 text-primary-soft" viewBox="0 0 24 24">
        <path d="M3 3l18 18M21 3 3 21" stroke="currentColor" stroke-width="3" />
      </svg>
      <svg
        class="absolute top-2 right-[16%] size-9 text-primary-soft"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M3 3l9 9 9-9" stroke="currentColor" stroke-width="3" />
      </svg>
    </div>

    <div class="page-container grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
      <div>
        <p class="font-display text-lg font-semibold text-primary">
          {{ aboutBusinessModel.eyebrow }}
        </p>
        <h2 id="about-model-title" class="mt-2 max-w-sm text-3xl leading-snug font-bold">
          {{ aboutBusinessModel.title }}
        </h2>

        <ol class="mt-10 space-y-14 lg:space-y-16">
          <li v-for="(step, i) in aboutBusinessModel.steps" :key="step.title" class="flex gap-3">
            <span
              class="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-lg text-primary"
              aria-hidden="true"
            >
              {{ i + 1 }}
            </span>
            <div class="max-w-xs pt-1">
              <h3 class="font-sans text-base font-semibold">{{ step.title }}</h3>
              <p class="mt-2 text-sm leading-snug text-ink">{{ step.description }}</p>
            </div>
          </li>
        </ol>
      </div>

      <div class="rounded-3xl bg-primary-soft px-5 py-10 sm:px-8 lg:ml-auto lg:w-full lg:max-w-122">
        <ol class="space-y-3.5" :aria-label="aboutBusinessModel.title">
          <li
            v-for="(row, i) in aboutBusinessModel.flow"
            :key="row.title"
            :class="[
              'flex items-center gap-3 rounded-2xl border border-ink px-2.5 py-3',
              i === lastIndex ? 'bg-primary text-white' : 'bg-white text-ink',
            ]"
          >
            <span
              :class="[
                'inline-flex size-10 shrink-0 items-center justify-center rounded-full',
                i === lastIndex ? 'bg-ink text-white' : 'bg-primary-soft text-primary',
              ]"
            >
              <AboutIcon v-if="row.icon" :name="row.icon" class="size-6" />
            </span>
            <span>
              <span class="block text-[0.9375rem] font-semibold">{{ row.title }}</span>
              <span class="block text-sm">{{ row.description }}</span>
            </span>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
