<script setup lang="ts">
import { aboutHero } from '@/data/about'
</script>

<template>
  <section class="relative isolate overflow-hidden bg-primary-band" aria-labelledby="about-title">
    <!-- decorative circles and squares -->
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <span class="absolute -top-28 -left-14 size-72 rounded-full bg-primary-shade" />
      <span class="absolute -right-24 -bottom-48 size-104 rounded-full bg-primary-shade" />
      <span class="absolute top-10 left-[22%] size-4 bg-white/30" />
      <span class="absolute right-[10%] bottom-8 size-4 bg-white/30" />
      <span class="absolute bottom-2 left-[39%] size-5 bg-white/30" />
      <span class="absolute top-3 right-[9%] size-6 bg-white/30" />
    </div>

    <div class="page-container grid items-center gap-10 py-16 md:grid-cols-[1fr_auto] lg:py-20">
      <div>
        <p class="font-display text-lg font-bold text-white">{{ aboutHero.eyebrow }}</p>
        <h1
          id="about-title"
          class="mt-2 max-w-md text-3xl leading-tight font-semibold text-white lg:text-[2rem]"
        >
          {{ aboutHero.title }}
        </h1>
        <p class="mt-6 text-base text-white">{{ aboutHero.body }}</p>
        <p
          class="mt-9 inline-flex items-center gap-2 rounded-full bg-white py-1.5 pr-3.5 pl-2 text-sm font-semibold text-primary"
        >
          <span
            class="inline-flex size-5 items-center justify-center rounded-full bg-primary text-white"
            aria-hidden="true"
          >
            <svg
              class="size-3"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="m2.5 6.2 2.3 2.3 4.7-5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          {{ aboutHero.badge }}
        </p>
      </div>

      <!-- globe illustration -->
      <svg
        class="mx-auto w-48 md:mx-0 md:mr-4 lg:w-60"
        viewBox="0 0 240 240"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="120"
          cy="120"
          r="119"
          class="fill-cream-deep stroke-primary-soft"
          stroke-width="2"
        />
        <g class="stroke-primary-soft" stroke-width="1.5">
          <ellipse cx="120" cy="120" rx="48" ry="119" />
          <ellipse cx="120" cy="120" rx="16" ry="119" />
          <ellipse cx="120" cy="120" rx="119" ry="40" />
          <path d="M8 80h224M8 160h224" />
        </g>
        <path
          d="M58 236c40-14 84-14 124 0"
          transform="translate(0 -60)"
          class="stroke-primary-shade"
          stroke-width="1.5"
          stroke-dasharray="6 6"
        />
        <path d="M37 70c50-56 116-56 172 6" class="stroke-primary-shade" stroke-width="2.5" />
        <circle cx="37" cy="70" r="7" class="fill-primary-shade" />
        <circle cx="209" cy="76" r="7" class="fill-primary-shade" />
        <circle cx="121" cy="28" r="7" class="fill-white stroke-primary-soft" stroke-width="3" />
      </svg>
    </div>
  </section>
</template>
