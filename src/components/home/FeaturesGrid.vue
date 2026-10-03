<script setup lang="ts">
import { features, featuresHeading } from '@/data/features'
import FeatureRow from './FeatureRow.vue'
</script>

<template>
  <section class="overflow-hidden bg-cream py-16 lg:py-24" aria-labelledby="features-title">
    <div class="page-container">
      <!-- The live site shows no heading here; keep one for screen readers -->
      <h2 id="features-title" class="sr-only">{{ featuresHeading.title }}</h2>

      <div class="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-1 lg:gap-32">
        <FeatureRow
          v-for="(feature, i) in features"
          :key="feature.number"
          :feature="feature"
          :reversed="i % 2 === 1"
        />
      </div>
    </div>
  </section>
</template>
