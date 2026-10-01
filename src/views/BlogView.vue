<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { blogLabels, blogMeta, posts } from '@/data/blog'
import { useComments } from '@/composables/useComments'
import PostCard from '@/components/blog/PostCard.vue'

const commentCount = (slug: string) => useComments(slug).count.value
</script>

<template>
  <div class="bg-cream pt-12 pb-32 lg:pb-40">
    <div class="page-container">
      <div class="mx-auto max-w-235">
        <h1 class="sr-only">{{ blogMeta.title }}</h1>
        <nav aria-label="Blog categories">
          <RouterLink
            to="/blog"
            class="text-sm text-primary hover:underline"
            exact-active-class="font-normal"
          >
            {{ blogLabels.allPosts }}
          </RouterLink>
        </nav>

        <ul class="mt-12 grid gap-8 sm:grid-cols-2">
          <li v-for="post in posts" :key="post.slug">
            <PostCard :post="post" :comment-count="commentCount(post.slug)" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
