<script setup lang="ts">
import { hero } from '@/data/home'
import { media } from '@/data/media'
import StoreBadges from '@/components/ui/StoreBadges.vue'
</script>

<template>
  <!--
    The gradient starts on primary-dark behind the copy so white body text
    meets WCAG AA, and finishes on the brand orange behind the phone.
  -->
  <section
    class="relative bg-linear-to-b from-primary-dark from-40% to-primary lg:bg-linear-to-r lg:from-35%"
    aria-labelledby="hero-title"
  >
    <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <img :src="media.heroBg" alt="" class="size-full object-cover" />
    </div>

    <div
      class="page-container relative grid items-center gap-12 pt-12 sm:pt-16 lg:grid-cols-2 lg:gap-8 lg:pt-20"
    >
      <div class="max-w-xl pb-4 lg:pb-32">
        <h1
          id="hero-title"
          class="text-4xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {{ hero.title }}
        </h1>
        <p class="mt-6 text-lg leading-relaxed text-white">{{ hero.body }}</p>
        <div class="mt-8">
          <StoreBadges />
        </div>
      </div>

      <div class="relative z-10 -mb-20 flex justify-center lg:-mb-28 lg:justify-end lg:pr-8">
        <!-- soft glow behind the device -->
        <div
          class="absolute top-1/2 left-1/2 size-72 -translate-1/2 rounded-full bg-white/20 blur-3xl sm:size-96"
          aria-hidden="true"
        />
        <img
          :src="media.phoneMockup"
          :srcset="media.phoneMockupSrcset"
          sizes="(min-width: 1024px) 20rem, (min-width: 640px) 18rem, 15rem"
          :alt="hero.imageAlt"
          width="480"
          height="1011"
          fetchpriority="high"
          class="relative w-60 drop-shadow-2xl motion-safe:animate-float sm:w-72 lg:w-80"
        />
      </div>
    </div>
  </section>
</template>
