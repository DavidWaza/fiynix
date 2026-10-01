<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { parseInlineLinks } from '@/utils/inlineLinks'

const props = defineProps<{ text: string }>()
const segments = computed(() => parseInlineLinks(props.text))

const linkClass =
  'font-semibold text-primary-dark underline underline-offset-2 hover:text-primary-deep'
</script>

<template>
  <template v-for="(segment, i) in segments" :key="i">
    <template v-if="segment.type === 'text'">{{ segment.text }}</template>
    <RouterLink v-else-if="segment.internal" :to="segment.href" :class="linkClass">
      {{ segment.text }}
    </RouterLink>
    <a
      v-else
      :href="segment.href"
      :class="linkClass"
      :target="segment.href.startsWith('http') ? '_blank' : undefined"
      :rel="segment.href.startsWith('http') ? 'noopener noreferrer' : undefined"
    >
      {{ segment.text }}
    </a>
  </template>
</template>
