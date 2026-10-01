<script setup lang="ts">
import { appIntro } from '@/data/home'
</script>

<template>
  <!-- extra top padding leaves room for the hero phone overlapping this section -->
  <section class="bg-cream pt-36 pb-20 lg:pt-44 lg:pb-24" aria-labelledby="app-intro-title">
    <div class="page-container text-center">
      <h2
        id="app-intro-title"
        class="mx-auto max-w-3xl text-3xl leading-tight font-bold tracking-tight sm:text-4xl"
      >
        {{ appIntro.title }}
      </h2>
      <p class="mx-auto mt-5 max-w-2xl text-lg">{{ appIntro.body }}</p>
    </div>
  </section>
</template>
