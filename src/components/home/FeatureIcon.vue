<script setup lang="ts">
import type { FeatureIcon } from '@/types'

defineProps<{ name: FeatureIcon }>()
</script>

<template>
  <!-- Animations trigger from the parent card's `group` hover / keyboard focus -->
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <template v-if="name === 'shield'">
      <path d="M12 3 5 6v5.5c0 4.4 3 8.2 7 9.5 4-1.3 7-5.1 7-9.5V6l-7-3Z" />
      <path class="shield-check" d="m9 12 2.2 2.2L15.5 10" pathLength="1" />
    </template>

    <template v-else-if="name === 'receipt'">
      <path d="M6 3h12v18l-2-1.4L14 21l-2-1.4L10 21l-2-1.4L6 21V3Z" />
      <path class="receipt-line" d="M9 8h6" />
      <path class="receipt-line receipt-line--2" d="M9 11.5h6" />
      <path class="receipt-line receipt-line--3" d="M9 15h3.5" />
    </template>

    <template v-else-if="name === 'bolt'">
      <path
        class="bolt"
        d="M13 2.5 5 13.5h6l-1 8 8-11h-6l1-8Z"
        fill="currentColor"
        fill-opacity="0.15"
      />
      <path class="speed-line" d="M2.5 9h2.5" />
      <path class="speed-line speed-line--2" d="M2 16h3" />
    </template>

    <template v-else>
      <g class="headset">
        <path d="M4.5 14v-2a7.5 7.5 0 0 1 15 0v2" />
        <rect x="3.5" y="13" width="4" height="6" rx="1.5" />
        <rect x="16.5" y="13" width="4" height="6" rx="1.5" />
        <path d="M18.5 19c0 1.4-1.6 2.5-4.5 2.5H12" />
      </g>
      <path class="wave" d="M9.5 9.2a3.5 3.5 0 0 1 5 0" />
    </template>
  </svg>
</template>

<style scoped>
.shield-check {
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
}

.receipt-line,
.bolt,
.speed-line,
.headset,
.wave {
  transform-box: fill-box;
}

.receipt-line {
  transform-origin: left center;
}

.bolt,
.headset {
  transform-origin: center;
}

.speed-line,
.wave {
  opacity: 0;
}

@media (prefers-reduced-motion: no-preference) {
  .group:is(:hover, :focus-within) .shield-check {
    animation: draw 0.6s ease-out;
  }

  .group:is(:hover, :focus-within) .receipt-line {
    animation: grow 0.45s ease-out both;
  }
  .group:is(:hover, :focus-within) .receipt-line--2 {
    animation-delay: 0.08s;
  }
  .group:is(:hover, :focus-within) .receipt-line--3 {
    animation-delay: 0.16s;
  }

  .group:is(:hover, :focus-within) .bolt {
    animation: zap 0.6s ease-out;
  }
  .group:is(:hover, :focus-within) .speed-line {
    animation: dash 0.6s ease-out;
  }
  .group:is(:hover, :focus-within) .speed-line--2 {
    animation-delay: 0.1s;
  }

  .group:is(:hover, :focus-within) .headset {
    animation: wiggle 0.6s ease-in-out;
  }
  .group:is(:hover, :focus-within) .wave {
    animation: wave 1.2s ease-out infinite;
  }
}

@keyframes draw {
  from {
    stroke-dashoffset: 1;
  }
}

@keyframes grow {
  from {
    transform: scaleX(0);
  }
}

@keyframes zap {
  30% {
    transform: scale(1.18) rotate(-8deg);
  }
  60% {
    transform: scale(0.94) rotate(3deg);
  }
}

@keyframes dash {
  0% {
    opacity: 0;
    transform: translateX(3px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(-2px);
  }
}

@keyframes wiggle {
  25% {
    transform: rotate(-9deg);
  }
  50% {
    transform: rotate(7deg);
  }
  75% {
    transform: rotate(-4deg);
  }
}

@keyframes wave {
  0% {
    opacity: 0;
    transform: translateY(2px);
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-2px);
  }
}
</style>
