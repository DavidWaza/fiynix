<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, type RouteLocationRaw } from 'vue-router'

type Variant = 'primary' | 'outline' | 'ghost' | 'inverse'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    size?: Size
    /** Internal route — renders a RouterLink */
    to?: RouteLocationRaw
    /** External URL — renders an anchor */
    href?: string
    type?: 'button' | 'submit' | 'reset'
    block?: boolean
  }>(),
  { variant: 'primary', size: 'md', type: 'button', block: false },
)

const variants: Record<Variant, string> = {
  // primary-dark keeps white label text at AA contrast (see styles/main.css)
  primary: 'bg-primary-dark text-white shadow-sm hover:bg-primary-deep',
  outline: 'border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white',
  ghost: 'text-ink hover:bg-ink/5',
  // For use on orange / dark backgrounds
  inverse: 'bg-white text-primary-dark shadow-sm hover:bg-cream',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 px-5 text-sm',
  md: 'h-12 px-6 text-base',
  lg: 'h-14 px-8 text-base sm:text-lg',
}

const classes = computed(() => [
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap',
  'transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60',
  variants[props.variant],
  sizes[props.size],
  props.block && 'w-full',
])
</script>

<template>
  <RouterLink v-if="to" :to="to" :class="classes"><slot /></RouterLink>
  <a v-else-if="href" :href="href" :class="classes" target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
  <button v-else :type="type" :class="classes"><slot /></button>
</template>
