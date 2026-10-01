<script setup lang="ts">
import { steps, stepsHeading } from '@/data/steps'
import { media } from '@/data/media'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import StepItem from './StepItem.vue'
</script>

<template>
  <section id="how-it-works" class="relative isolate overflow-hidden bg-ink py-20 lg:py-28">
    <img
      :src="media.bannerBg"
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      class="pointer-events-none absolute inset-0 -z-10 size-full object-cover"
    />

    <div class="page-container">
      <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          :eyebrow="stepsHeading.eyebrow"
          :title="stepsHeading.title"
          :subtitle="stepsHeading.subtitle"
          inverted
        />
        <BaseButton
          :to="stepsHeading.cta.to"
          variant="inverse"
          size="lg"
          class="self-start focus-visible:outline-white lg:self-auto"
        >
          {{ stepsHeading.cta.label }}
        </BaseButton>
      </div>

      <div class="relative mt-16">
        <!-- connecting line: vertical on mobile, horizontal on desktop -->
        <span
          class="absolute top-7 bottom-7 left-7 w-0.5 -translate-x-1/2 bg-white/20 lg:right-[12.5%] lg:bottom-auto lg:left-[12.5%] lg:h-0.5 lg:w-auto lg:translate-x-0 lg:-translate-y-1/2"
          aria-hidden="true"
        />
        <ol class="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
          <StepItem v-for="(step, i) in steps" :key="step.number" :step="step" :index="i" />
        </ol>
      </div>
    </div>
  </section>
</template>
