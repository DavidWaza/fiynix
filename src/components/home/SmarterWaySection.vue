<script setup lang="ts">
import { smarterWay } from '@/data/home'
import { media } from '@/data/media'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import StoreBadges from '@/components/ui/StoreBadges.vue'
</script>

<template>
  <section class="bg-cream py-20 lg:py-28">
    <div class="page-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <SectionHeading :eyebrow="smarterWay.eyebrow" :title="smarterWay.title" />
        <p class="mt-5 max-w-xl text-lg leading-relaxed">{{ smarterWay.body }}</p>
        <div class="mt-8 flex flex-col gap-6">
          <BaseButton :to="smarterWay.cta.to" size="lg" class="self-start">
            {{ smarterWay.cta.label }}
            <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.64l-4.22-3.97a.75.75 0 1 1 1.03-1.1l5.5 5.25a.75.75 0 0 1 0 1.1l-5.5 5.25a.75.75 0 1 1-1.03-1.1l4.22-3.93H3.75A.75.75 0 0 1 3 10Z"
              />
            </svg>
          </BaseButton>
          <StoreBadges />
        </div>
      </div>

      <figure class="relative">
        <div class="relative aspect-4/5 overflow-hidden rounded-3xl shadow-card-hover">
          <img
            :src="media.ladyPhone"
            :alt="smarterWay.imageAlt"
            width="800"
            height="960"
            loading="lazy"
            decoding="async"
            class="size-full object-cover"
          />
          <div class="absolute inset-0" aria-hidden="true" />
        </div>
      </figure>
    </div>
  </section>
</template>
