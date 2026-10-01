<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { blogLabels } from '@/data/blog'
import { useComments } from '@/composables/useComments'
import { timeAgo } from '@/utils/format'

const props = defineProps<{ slug: string }>()
const { comments, add } = useComments(props.slug)

const editing = ref(false)
const name = ref('')
const text = ref('')
const textarea = ref<HTMLTextAreaElement | null>(null)

async function startEditing() {
  editing.value = true
  await nextTick()
  textarea.value?.focus()
}

function cancel() {
  editing.value = false
  text.value = ''
}

function publish() {
  if (!text.value.trim()) return
  add(name.value, text.value)
  cancel()
}
</script>

<template>
  <section aria-labelledby="comments-title" class="mt-24">
    <h2 id="comments-title" class="border-b border-ink/15 pb-4 font-sans text-sm font-normal">
      {{ blogLabels.comments }}
    </h2>

    <button
      v-if="!editing"
      type="button"
      class="mt-5 block w-full border border-ink/30 px-4 py-4 text-left text-sm text-ink/70 hover:border-ink/60"
      @click="startEditing"
    >
      {{ blogLabels.commentPlaceholder }}
    </button>

    <form v-else class="mt-5 space-y-3 border border-ink/30 p-4" @submit.prevent="publish">
      <label class="sr-only" for="comment-name">Your name</label>
      <input
        id="comment-name"
        v-model="name"
        type="text"
        autocomplete="name"
        placeholder="Your name"
        class="block w-full border-b border-ink/15 bg-transparent pb-2 text-sm text-ink placeholder:text-ink/50 focus:outline-none"
      />
      <label class="sr-only" for="comment-text">Comment</label>
      <textarea
        id="comment-text"
        ref="textarea"
        v-model="text"
        rows="3"
        maxlength="1000"
        :placeholder="blogLabels.commentPlaceholder"
        class="block w-full resize-y bg-transparent text-sm text-ink placeholder:text-ink/50 focus:outline-none"
      />
      <div class="flex justify-end gap-2">
        <button
          type="button"
          class="rounded-full px-4 py-2 text-sm text-ink hover:bg-ink/5"
          @click="cancel"
        >
          {{ blogLabels.cancel }}
        </button>
        <button
          type="submit"
          :disabled="!text.trim()"
          class="rounded-full bg-primary-dark px-5 py-2 text-sm font-semibold text-white hover:bg-primary-deep disabled:opacity-50"
        >
          {{ blogLabels.publish }}
        </button>
      </div>
    </form>

    <ul v-if="comments.length" class="mt-8 space-y-6">
      <li v-for="comment in comments" :key="comment.id" class="flex gap-3">
        <span
          class="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-avatar text-sm text-white"
          aria-hidden="true"
        >
          {{ comment.author.charAt(0).toUpperCase() }}
        </span>
        <div class="text-sm">
          <p class="text-ink">
            <span class="font-semibold">{{ comment.author }}</span>
            <span class="text-ink/60"> · {{ timeAgo(comment.createdAt) }}</span>
          </p>
          <p class="mt-1 whitespace-pre-line text-ink">{{ comment.text }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
