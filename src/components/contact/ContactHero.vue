<script setup lang="ts">
import { contactHero } from '@/data/contact'
</script>

<template>
  <section class="relative isolate overflow-hidden bg-primary-band" aria-labelledby="contact-title">
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <span class="absolute -top-40 -left-20 size-64 rounded-full bg-primary-shade" />
      <span class="absolute -right-24 -bottom-64 size-96 rounded-full bg-primary-shade" />
    </div>

    <div class="page-container py-14">
      <div class="mx-auto max-w-244">
        <p class="font-display text-lg font-bold text-cream">{{ contactHero.eyebrow }}</p>
        <h1
          id="contact-title"
          class="mt-1 text-4xl leading-tight font-bold tracking-tight text-cream lg:text-[2.5rem]"
        >
          {{ contactHero.title }}
        </h1>
        <p class="mt-3 text-base text-white">{{ contactHero.body }}</p>
      </div>
    </div>
  </section>
</template>
