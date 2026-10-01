<script setup lang="ts">
import { aboutSecurity } from '@/data/about'
import AboutIcon from './AboutIcon.vue'
</script>

<template>
  <section
    id="security"
    class="relative isolate overflow-hidden bg-primary-band py-14 lg:pb-16"
    aria-labelledby="about-security-title"
  >
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <span class="absolute top-32 left-[7%] size-7 bg-white/30" />
      <span class="absolute right-[13%] bottom-28 size-6 bg-white/30" />
      <span class="absolute -right-24 bottom-0 size-56 rounded-full bg-primary-shade" />
    </div>

    <div class="page-container">
      <div class="lg:px-9">
        <p class="text-lg text-white">{{ aboutSecurity.eyebrow }}</p>
        <h2
          id="about-security-title"
          class="text-4xl leading-tight font-bold text-white lg:text-[2.625rem]"
        >
          {{ aboutSecurity.title }}
        </h2>
        <p class="mt-2 max-w-2xl text-lg leading-snug text-white">{{ aboutSecurity.intro }}</p>

        <ul class="mt-16 grid max-w-188 gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="control in aboutSecurity.controls"
            :key="control.title"
            class="flex min-h-40 flex-col rounded-2xl border border-ink bg-white px-4 pt-2.5 pb-8"
          >
            <span
              class="inline-flex size-10 items-center justify-center rounded-full bg-primary-soft text-primary"
            >
              <AboutIcon v-if="control.icon" :name="control.icon" class="size-5" />
            </span>
            <h3 class="mt-3 font-sans text-[0.9375rem] font-semibold">{{ control.title }}</h3>
            <p class="mt-2 max-w-48 text-sm leading-snug text-ink">{{ control.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
