<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { legalPages } from '@/data/legal'
import type { LegalBlock, LegalSection } from '@/types'
import DeleteAccountForm from '@/components/legal/DeleteAccountForm.vue'
import RichText from '@/components/legal/RichText.vue'

const props = defineProps<{ slug: string }>()

const page = computed(() => legalPages.find((p) => p.slug === props.slug))

const sectionId = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

/** Simple sections (paragraphs only) render through the same block renderer */
const blocksOf = (section: LegalSection): LegalBlock[] =>
  section.blocks ?? (section.paragraphs ?? []).map((text) => ({ type: 'paragraph', text }))

/** Long documents get an "On this page" index */
const showToc = computed(
  () => page.value?.layout !== 'faq' && (page.value?.sections.length ?? 0) > 3,
)
</script>

<template>
  <article v-if="page" class="py-16 lg:py-24">
    <div class="page-container">
      <div class="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" class="mb-8 text-sm">
          <RouterLink to="/" class="hover:text-primary-dark">Home</RouterLink>
          <span aria-hidden="true" class="mx-2">/</span>
          <span aria-current="page" class="text-ink">{{ page.title }}</span>
        </nav>

        <header class="border-b border-ink/10 pb-8">
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
            {{ page.heading ?? page.title }}
          </h1>
          <p class="mt-4 text-sm">
            <template v-if="page.effective">Effective {{ page.effective }}</template>
            <template v-else>Last updated {{ page.updated }}</template>
          </p>
        </header>

        <nav
          v-if="showToc"
          aria-labelledby="toc-title"
          class="mt-10 rounded-2xl bg-cream p-6 ring-1 ring-primary/10"
        >
          <p id="toc-title" class="eyebrow text-primary-dark">On this page</p>
          <ol class="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
            <li v-for="(section, i) in page.sections" :key="section.heading" class="flex gap-2">
              <span class="text-ink/40 tabular-nums" aria-hidden="true">{{ i + 1 }}.</span>
              <RouterLink
                :to="{ hash: `#${sectionId(section.heading)}` }"
                class="text-ink underline-offset-2 hover:text-primary-dark hover:underline"
              >
                {{ section.heading }}
              </RouterLink>
            </li>
          </ol>
        </nav>

        <div class="mt-10 space-y-12 text-base leading-relaxed sm:text-lg">
          <p><RichText :text="page.intro" /></p>

          <!-- FAQ layout: each section is an expandable question -->
          <div v-if="page.layout === 'faq'" class="divide-y divide-ink/10 border-y border-ink/10">
            <details
              v-for="section in page.sections"
              :id="sectionId(section.heading)"
              :key="section.heading"
              class="group scroll-mt-28"
            >
              <summary
                class="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-lg font-bold text-ink hover:text-primary-dark sm:text-xl [&::-webkit-details-marker]:hidden"
              >
                <h2 class="text-inherit">{{ section.heading }}</h2>
                <span
                  class="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-cream text-primary-dark transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <svg
                    class="size-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M8 3v10M3 8h10" stroke-linecap="round" />
                  </svg>
                </span>
              </summary>
              <div class="pr-12 pb-6">
                <template v-for="(block, i) in blocksOf(section)" :key="i">
                  <ul
                    v-if="block.type === 'list'"
                    class="mt-3 list-disc space-y-2 pl-6 marker:text-primary first:mt-0"
                  >
                    <li v-for="item in block.items" :key="item"><RichText :text="item" /></li>
                  </ul>
                  <p v-else class="mt-3 first:mt-0"><RichText :text="block.text" /></p>
                </template>
              </div>
            </details>
          </div>

          <section
            v-for="section in page.layout === 'faq' ? [] : page.sections"
            :id="sectionId(section.heading)"
            :key="section.heading"
            class="scroll-mt-28"
          >
            <h2 class="text-2xl font-bold">{{ section.heading }}</h2>
            <template v-for="(block, i) in blocksOf(section)" :key="i">
              <h3 v-if="block.type === 'subheading'" class="mt-8 text-lg font-bold sm:text-xl">
                {{ block.text }}
              </h3>
              <ul
                v-else-if="block.type === 'list'"
                class="mt-4 list-disc space-y-2 pl-6 marker:text-primary"
              >
                <li v-for="item in block.items" :key="item"><RichText :text="item" /></li>
              </ul>
              <p v-else class="mt-4"><RichText :text="block.text" /></p>
            </template>
          </section>
        </div>

        <DeleteAccountForm v-if="page.form === 'delete-account'" />
      </div>
    </div>
  </article>
</template>
