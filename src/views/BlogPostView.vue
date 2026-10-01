<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { blogLabels, findPost } from '@/data/blog'
import { useComments } from '@/composables/useComments'
import { plural, shortDate, timeAgo } from '@/utils/format'
import LikeButton from '@/components/blog/LikeButton.vue'
import PostComments from '@/components/blog/PostComments.vue'
import PostMenu from '@/components/blog/PostMenu.vue'
import ShareBar from '@/components/blog/ShareBar.vue'

const props = defineProps<{ slug: string }>()

// The route guard guarantees the post exists
const post = computed(() => findPost(props.slug)!)
const { count } = useComments(props.slug)
</script>

<template>
  <div class="bg-cream pt-12 pb-32">
    <div class="page-container">
      <div class="mx-auto max-w-235">
        <RouterLink to="/blog" class="text-xs text-ink hover:text-primary">
          {{ blogLabels.allPosts }}
        </RouterLink>
      </div>

      <article class="mx-auto mt-16 max-w-185 lg:mt-20">
        <header>
          <div class="flex items-center justify-between">
            <p class="flex items-center gap-2 text-xs text-ink">
              <span
                class="inline-flex size-8 items-center justify-center rounded-full bg-avatar text-sm text-white"
                aria-hidden="true"
              >
                {{ post.author.charAt(0) }}
              </span>
              <span>{{ post.author }}</span>
              <span aria-hidden="true">·</span>
              <time :datetime="post.published">{{ shortDate(post.published) }}</time>
              <span aria-hidden="true">·</span>
              <span>{{ post.readMinutes }} min read</span>
            </p>
            <PostMenu :slug="post.slug" />
          </div>

          <h1 class="mt-4 font-sans text-3xl leading-tight font-normal sm:text-[2.5rem]">
            {{ post.title }}
          </h1>
          <p class="mt-5 text-xs text-ink">
            {{ blogLabels.updated }}:
            <time :datetime="post.updated">{{ timeAgo(post.updated) }}</time>
          </p>
        </header>

        <div class="mt-6 space-y-6 text-[0.9375rem] leading-relaxed text-ink">
          <template v-for="(block, i) in post.body" :key="i">
            <h2 v-if="block.type === 'heading'" class="pt-1 font-sans text-[0.9375rem] font-bold">
              {{ block.text }}
            </h2>
            <p v-else>{{ block.text }}</p>
          </template>
        </div>

        <img
          :src="post.cover"
          :srcset="post.coverSrcset"
          sizes="(min-width: 800px) 46rem, 100vw"
          :alt="post.coverAlt"
          width="1480"
          height="2220"
          loading="lazy"
          decoding="async"
          class="mt-2 w-full"
        />

        <footer class="mt-6">
          <div class="border-y border-ink/15">
            <ShareBar :slug="post.slug" :title="post.title" />
          </div>
          <div class="flex items-center gap-6 py-4 text-xs text-ink">
            <span>{{ plural(post.views, 'view') }}</span>
            <a href="#comments-title" class="hover:text-primary">{{ plural(count, 'comment') }}</a>
            <span class="ml-auto"><LikeButton :slug="post.slug" :title="post.title" /></span>
          </div>
        </footer>

        <PostComments :slug="post.slug" />
      </article>
    </div>
  </div>
</template>
