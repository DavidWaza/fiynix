<script setup lang="ts">
import { computed, nextTick, reactive, ref } from 'vue'
import type { DeletionErrors, DeletionRequest } from '@/types'
import { REASON_MAX, validateDeletionRequest } from '@/utils/validateDeletionRequest'

type Field = keyof DeletionRequest

const fields: {
  key: Exclude<Field, 'confirmed' | 'reason'>
  label: string
  type: string
  autocomplete: string
}[] = [
  { key: 'fullName', label: 'Full name', type: 'text', autocomplete: 'name' },
  { key: 'email', label: 'Email address', type: 'email', autocomplete: 'email' },
  { key: 'phone', label: 'Phone number', type: 'tel', autocomplete: 'tel' },
]

const emptyForm = (): DeletionRequest => ({
  fullName: '',
  email: '',
  phone: '',
  reason: '',
  confirmed: false,
})

const form = reactive<DeletionRequest>(emptyForm())
const touched = reactive<Partial<Record<Field, boolean>>>({})
const submitAttempted = ref(false)
const submitted = ref(false)
const formEl = ref<HTMLFormElement | null>(null)

const errors = computed<DeletionErrors>(() => validateDeletionRequest(form))
const visibleError = (field: Field) =>
  touched[field] || submitAttempted.value ? errors.value[field] : undefined
const fieldId = (field: Field) => `delete-${field}`
const describedBy = (field: Field) => (visibleError(field) ? `${fieldId(field)}-error` : undefined)

const order: Field[] = ['fullName', 'email', 'phone', 'reason', 'confirmed']

async function onSubmit() {
  submitAttempted.value = true
  const invalid = order.find((f) => errors.value[f])
  if (invalid) {
    await nextTick()
    formEl.value?.querySelector<HTMLElement>(`#${fieldId(invalid)}`)?.focus()
    return
  }

  const payload = {
    fullName: form.fullName.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    reason: form.reason.trim(),
  }
  // No backend yet — replace with an API call or ticketing integration.
  console.info('[delete-account] request', payload)

  submitted.value = true
  Object.assign(form, emptyForm())
  for (const key of Object.keys(touched) as Field[]) delete touched[key]
  submitAttempted.value = false
}

const inputClass = (field: Field) => [
  'block h-11 w-full rounded-full border bg-surface px-5 text-ink transition-shadow',
  'focus:ring-2 focus:ring-primary/30 focus:outline-none',
  visibleError(field) ? 'border-danger' : 'border-primary',
]
</script>

<template>
  <div class="mt-8 rounded-3xl bg-cream p-6 ring-1 ring-primary/10 sm:p-8">
    <div v-if="submitted" role="status">
      <p class="font-display text-xl font-bold text-ink">Request received</p>
      <p class="mt-2">
        We'll verify your identity and process your request as quickly as we can. We'll contact you
        at the email address you gave us.
      </p>
      <button
        type="button"
        class="mt-6 rounded-full border border-primary-dark px-5 py-2 text-sm font-semibold text-primary-dark hover:bg-primary-dark hover:text-white"
        @click="submitted = false"
      >
        Submit another request
      </button>
    </div>

    <form v-else ref="formEl" novalidate class="space-y-5 text-base" @submit.prevent="onSubmit">
      <div v-for="field in fields" :key="field.key">
        <label :for="fieldId(field.key)" class="mb-2 block text-sm font-semibold text-ink">
          {{ field.label }} <span aria-hidden="true" class="text-primary-dark">*</span>
        </label>
        <input
          :id="fieldId(field.key)"
          v-model="form[field.key]"
          :type="field.type"
          :autocomplete="field.autocomplete"
          required
          :aria-invalid="!!visibleError(field.key)"
          :aria-describedby="describedBy(field.key)"
          :class="inputClass(field.key)"
          @blur="touched[field.key] = true"
        />
        <p
          v-if="visibleError(field.key)"
          :id="`${fieldId(field.key)}-error`"
          class="mt-1.5 pl-5 text-sm text-danger"
        >
          {{ visibleError(field.key) }}
        </p>
      </div>

      <div>
        <label :for="fieldId('reason')" class="mb-2 block text-sm font-semibold text-ink">
          Reason for deletion <span class="font-normal text-muted">(optional)</span>
        </label>
        <textarea
          :id="fieldId('reason')"
          v-model="form.reason"
          rows="4"
          :maxlength="REASON_MAX"
          :aria-invalid="!!visibleError('reason')"
          :aria-describedby="describedBy('reason')"
          :class="[
            'block w-full rounded-3xl border bg-surface px-5 py-3 text-ink transition-shadow',
            'focus:ring-2 focus:ring-primary/30 focus:outline-none',
            visibleError('reason') ? 'border-danger' : 'border-primary',
          ]"
          @blur="touched.reason = true"
        />
        <p
          v-if="visibleError('reason')"
          :id="`${fieldId('reason')}-error`"
          class="mt-1.5 pl-5 text-sm text-danger"
        >
          {{ visibleError('reason') }}
        </p>
      </div>

      <div>
        <label class="flex items-start gap-3 text-sm text-ink">
          <input
            :id="fieldId('confirmed')"
            v-model="form.confirmed"
            type="checkbox"
            :aria-invalid="!!visibleError('confirmed')"
            :aria-describedby="describedBy('confirmed')"
            class="mt-0.5 size-5 shrink-0 accent-primary-dark"
            @change="touched.confirmed = true"
          />
          <span>
            I understand that deleting my account is permanent, any unprocessed transfers will be
            cancelled, and some records may be kept where the law requires.
          </span>
        </label>
        <p
          v-if="visibleError('confirmed')"
          :id="`${fieldId('confirmed')}-error`"
          class="mt-1.5 pl-8 text-sm text-danger"
        >
          {{ visibleError('confirmed') }}
        </p>
      </div>

      <button
        type="submit"
        class="h-12 w-full rounded-full bg-primary-dark font-display font-bold text-white transition-colors hover:bg-primary-deep sm:w-auto sm:px-10"
      >
        Submit request
      </button>
    </form>
  </div>
</template>
