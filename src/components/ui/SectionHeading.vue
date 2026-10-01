<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    subtitle?: string
    align?: 'left' | 'center'
    /** Light text for dark / orange backgrounds */
    inverted?: boolean
    as?: 'h1' | 'h2'
  }>(),
  { align: 'left', inverted: false, as: 'h2' },
)
</script>

<template>
  <div :class="['max-w-2xl', align === 'center' && 'mx-auto text-center']">
    <!-- <p v-if="eyebrow" :class="['eyebrow mb-3', inverted ? 'text-primary' : 'text-primary-dark']">
      {{ eyebrow }}
    </p> -->
    <component
      :is="as"
      :class="[
        'text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl',
        inverted && 'text-white',
      ]"
    >
      {{ title }}
    </component>
    <p
      v-if="subtitle"
      :class="['mt-4 text-base sm:text-lg', inverted ? 'text-white/80' : 'text-muted']"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
