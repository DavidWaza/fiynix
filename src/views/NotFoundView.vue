<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section class="py-24 lg:py-32">
    <div class="page-container text-center">
      <p class="eyebrow text-primary-dark">404</p>
      <h1 class="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
      <p class="mx-auto mt-4 max-w-md">The page you're looking for doesn't exist or has moved.</p>
      <div class="mt-8">
        <BaseButton to="/">Back to home</BaseButton>
      </div>
    </div>
  </section>
</template>
