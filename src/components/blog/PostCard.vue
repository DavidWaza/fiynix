<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { BlogPost } from '@/data/blog'
import { shortDate } from '@/utils/format'
import LikeButton from './LikeButton.vue'
import PostMenu from './PostMenu.vue'

defineProps<{ post: BlogPost; commentCount: number }>()
</script>

<template>
  <article class="group relative isolate aspect-square overflow-hidden text-cream">
    <img
      :src="post.cover"
      :srcset="post.coverSrcset"
      sizes="(min-width: 640px) 28rem, 100vw"
      :alt="post.coverAlt"
      loading="lazy"
      decoding="async"
      class="absolute inset-0 -z-10 size-full object-cover object-[50%_30%] transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
    />
    <div class="absolute inset-0 -z-10 bg-ink/55" aria-hidden="true" />

    <div class="flex h-full flex-col p-7.5">
      <div class="flex items-start justify-between">
        <p class="text-xs leading-snug">
          <span class="block">{{ post.author }}</span>
          <time :datetime="post.published">{{ shortDate(post.published) }}</time>
          <span aria-hidden="true"> · </span>
          <span>{{ post.readMinutes }} min read</span>
        </p>
        <PostMenu :slug="post.slug" light />
      </div>

      <h2 class="mt-auto font-sans text-[1.625rem] leading-tight font-bold text-cream">
        <!-- stretched link: the whole card is clickable -->
        <RouterLink
          :to="`/blog/${post.slug}`"
          class="line-clamp-3 after:absolute after:inset-0 focus-visible:outline-white"
        >
          {{ post.title }}
        </RouterLink>
      </h2>

      <div class="mt-4 flex items-center gap-5 border-t border-cream/80 pt-3.5 text-xs">
        <span class="inline-flex items-center gap-1.5">
          <svg
            class="size-4.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.4"
            aria-hidden="true"
          >
            <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          {{ post.views }}<span class="sr-only"> views</span>
        </span>
        <span class="inline-flex items-center gap-1.5">
          <svg
            class="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.4"
            aria-hidden="true"
          >
            <path d="M3 4h18v12H8l-5 4V4Z" stroke-linejoin="round" />
          </svg>
          {{ commentCount }}<span class="sr-only"> comments</span>
        </span>
        <span class="ml-auto"><LikeButton :slug="post.slug" :title="post.title" /></span>
      </div>
    </div>
  </article>
</template>
