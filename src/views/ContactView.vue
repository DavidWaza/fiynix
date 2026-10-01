<script setup lang="ts">
import { computed, nextTick, reactive, ref } from 'vue'
import { contactForm, dialCodes } from '@/data/contact'
import type { ContactErrors, ContactForm } from '@/types'
import { MESSAGE_MAX, validateContact } from '@/utils/validateContact'
import ContactHero from '@/components/contact/ContactHero.vue'
import ContactInfoCard from '@/components/contact/ContactInfoCard.vue'

type Field = keyof ContactForm

const emptyForm = (): ContactForm => ({
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  dialCode: '',
  phone: '',
  message: '',
})

const form = reactive<ContactForm>(emptyForm())
const touched = reactive<Partial<Record<Field, boolean>>>({})
const submitAttempted = ref(false)
const submitted = ref(false)
const formEl = ref<HTMLFormElement | null>(null)

const errors = computed<ContactErrors>(() => validateContact(form))
const visibleError = (field: Field) =>
  touched[field] || submitAttempted.value ? errors.value[field] : undefined

const fieldId = (field: Field) => `contact-${field}`
const describedBy = (field: Field) => (visibleError(field) ? `${fieldId(field)}-error` : undefined)

const selectedDial = computed(() => dialCodes.find((d) => `${d.code}:${d.dial}` === form.dialCode))

async function onSubmit() {
  submitAttempted.value = true
  const invalid = contactForm.fields.find((f) => errors.value[f.key])
  if (invalid) {
    await nextTick()
    formEl.value?.querySelector<HTMLElement>(`#${fieldId(invalid.key)}`)?.focus()
    return
  }

  const payload: ContactForm = {
    firstName: form.firstName.trim(),
    lastName: form.lastName.trim(),
    email: form.email.trim(),
    address: form.address.trim(),
    dialCode: selectedDial.value?.dial ?? '',
    phone: form.phone.trim(),
    message: form.message.trim(),
  }
  // No backend yet — replace with an API call.
  console.info('[contact] submit', payload)

  submitted.value = true
  Object.assign(form, emptyForm())
  for (const key of Object.keys(touched) as Field[]) delete touched[key]
  submitAttempted.value = false
}

const inputClass = (field: Field) => [
  'block h-9 w-full rounded-full border bg-transparent px-4 text-taupe transition-shadow',
  'focus:ring-2 focus:ring-primary/30 focus:outline-none',
  visibleError(field) ? 'border-danger' : 'border-primary',
]
</script>

<template>
  <ContactHero />

  <section class="bg-cream pt-28 pb-40 lg:pb-52">
    <div class="page-container">
      <div
        class="mx-auto grid max-w-244 gap-12 lg:grid-cols-[minmax(0,37.5rem)_minmax(0,22.5rem)] lg:justify-between"
      >
        <div>
          <h2 class="font-sans text-4xl font-light tracking-tight text-maroon lg:text-[2.375rem]">
            {{ contactForm.title }}
          </h2>

          <div
            v-if="submitted"
            role="status"
            class="mt-8 rounded-3xl border border-primary bg-white p-8"
          >
            <p class="font-display text-xl font-bold text-ink">{{ contactForm.successTitle }}</p>
            <p class="mt-2 text-taupe">{{ contactForm.successBody }}</p>
            <button
              type="button"
              class="mt-6 rounded-full border border-primary-dark px-5 py-2 text-sm font-semibold text-primary-dark hover:bg-primary-dark hover:text-white"
              @click="submitted = false"
            >
              {{ contactForm.sendAnother }}
            </button>
          </div>

          <form
            v-else
            ref="formEl"
            novalidate
            class="mt-6 grid gap-x-3 gap-y-5 sm:grid-cols-2"
            @submit.prevent="onSubmit"
          >
            <div
              v-for="field in contactForm.fields"
              :key="field.key"
              :class="field.wide && 'sm:col-span-2'"
            >
              <label :for="fieldId(field.key)" class="mb-2 block text-sm text-taupe">
                {{ field.label }}
                <span v-if="field.required" aria-hidden="true"> *</span>
              </label>

              <!-- phone: country code picker + number -->
              <div
                v-if="field.key === 'phone'"
                :class="[
                  'flex h-9 items-center rounded-full border transition-shadow focus-within:ring-2 focus-within:ring-primary/30',
                  visibleError('phone') ? 'border-danger' : 'border-primary',
                ]"
              >
                <div class="relative flex h-full shrink-0 items-center gap-1 pr-2 pl-4 text-taupe">
                  <span v-if="selectedDial" class="text-sm">{{ selectedDial.dial }}</span>
                  <svg
                    v-else
                    class="size-4.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.4"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path
                      d="M3.5 9.5 8 11l1 4 3 1 1 4.5M14.5 3.5 13 7l3 2 4.5-1M16 14l2 1 1 3"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    class="size-3"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path d="m3 4.5 3 3 3-3" />
                  </svg>
                  <select
                    v-model="form.dialCode"
                    aria-label="Country code"
                    class="absolute inset-0 cursor-pointer opacity-0"
                  >
                    <option value="">No country code</option>
                    <option v-for="d in dialCodes" :key="d.code" :value="`${d.code}:${d.dial}`">
                      {{ d.name }} ({{ d.dial }})
                    </option>
                  </select>
                </div>
                <input
                  :id="fieldId('phone')"
                  v-model="form.phone"
                  type="tel"
                  inputmode="tel"
                  :autocomplete="field.autocomplete"
                  :aria-invalid="!!visibleError('phone')"
                  :aria-describedby="describedBy('phone')"
                  class="h-full min-w-0 flex-1 rounded-r-full bg-transparent pr-4 text-taupe focus:outline-none"
                  @blur="touched.phone = true"
                />
              </div>

              <input
                v-else
                :id="fieldId(field.key)"
                v-model="form[field.key]"
                :type="field.type"
                :autocomplete="field.autocomplete"
                :required="field.required"
                :maxlength="field.key === 'message' ? MESSAGE_MAX : undefined"
                :aria-invalid="!!visibleError(field.key)"
                :aria-describedby="describedBy(field.key)"
                :class="inputClass(field.key)"
                @blur="touched[field.key] = true"
              />

              <p
                v-if="visibleError(field.key)"
                :id="`${fieldId(field.key)}-error`"
                class="mt-1.5 pl-4 text-sm text-danger"
              >
                {{ visibleError(field.key) }}
              </p>
            </div>

            <button
              type="submit"
              class="mt-1 h-10 rounded-full bg-primary font-display font-bold text-white transition-colors hover:bg-primary-band sm:col-span-2"
            >
              {{ contactForm.submit }}
            </button>
          </form>
        </div>

        <ContactInfoCard class="lg:mt-24" />
      </div>
    </div>
  </section>
</template>
