<script setup lang="ts">
import { featureVisuals } from '@/data/features'

/** `active` plays the entrance (set once the card scrolls into view) */
defineProps<{ kind: 'security' | 'chat'; active: boolean }>()

const { security, chat } = featureVisuals
</script>

<template>
  <div
    aria-hidden="true"
    class="rounded-2xl bg-cream p-5 ring-1 ring-primary/10 transition-transform duration-500 group-hover:-rotate-1 motion-reduce:transition-none motion-reduce:group-hover:rotate-0"
  >
    <!-- security checklist -->
    <template v-if="kind === 'security'">
      <div class="flex items-center gap-3">
        <span
          class="relative inline-flex size-10 items-center justify-center rounded-full bg-primary text-white"
        >
          <span class="absolute inset-0 rounded-full bg-primary/40 motion-safe:animate-ping" />
          <svg
            class="relative size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <rect x="5" y="10.5" width="14" height="10" rx="2" />
            <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
          </svg>
        </span>
        <p class="font-display font-bold text-ink">{{ security.title }}</p>
      </div>
      <ul class="mt-4 space-y-2.5">
        <li
          v-for="(check, i) in security.checks"
          :key="check"
          :style="{ transitionDelay: `${300 + i * 180}ms` }"
          :class="[
            'flex items-center gap-2.5 rounded-xl bg-surface px-3 py-2.5 text-sm text-ink shadow-sm',
            'motion-safe:transition motion-safe:duration-500',
            active
              ? 'translate-x-0 opacity-100'
              : 'motion-safe:translate-x-4 motion-safe:opacity-0',
          ]"
        >
          <span
            class="inline-flex size-5 items-center justify-center rounded-full bg-primary-soft text-primary-dark"
          >
            <svg
              class="size-3"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
            >
              <path d="m2.5 6.2 2.3 2.3 4.7-5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          {{ check }}
        </li>
      </ul>
    </template>

    <!-- support chat -->
    <template v-else>
      <div class="space-y-3 text-sm">
        <p
          :class="[
            'ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-ink px-4 py-2.5 text-white',
            'motion-safe:transition motion-safe:delay-200 motion-safe:duration-500',
            active
              ? 'translate-y-0 opacity-100'
              : 'motion-safe:translate-y-3 motion-safe:opacity-0',
          ]"
        >
          {{ chat.question }}
        </p>
        <div
          :class="[
            'flex items-end gap-2',
            'motion-safe:transition motion-safe:delay-700 motion-safe:duration-500',
            active
              ? 'translate-y-0 opacity-100'
              : 'motion-safe:translate-y-3 motion-safe:opacity-0',
          ]"
        >
          <span
            class="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white"
          >
            F
          </span>
          <div>
            <p class="mb-1 text-xs text-muted">{{ chat.agent }}</p>
            <p class="w-fit rounded-2xl rounded-bl-md bg-surface px-4 py-2.5 text-ink shadow-sm">
              {{ chat.answer }}
            </p>
          </div>
        </div>
        <div class="flex items-center gap-2 pl-9">
          <span class="inline-flex gap-1 rounded-full bg-surface px-3 py-2 shadow-sm">
            <span
              v-for="i in 3"
              :key="i"
              class="size-1.5 rounded-full bg-primary motion-safe:animate-typing"
              :style="{ animationDelay: `${(i - 1) * 150}ms` }"
            />
          </span>
        </div>
      </div>
    </template>
  </div>
</template>
