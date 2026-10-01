import type { DeletionErrors, DeletionRequest } from '@/types'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_CHARS = /^\+?[\d\s().-]+$/

export const REASON_MAX = 1000

export function validateDeletionRequest(form: DeletionRequest): DeletionErrors {
  const errors: DeletionErrors = {}
  const fullName = form.fullName.trim()
  const email = form.email.trim()
  const phone = form.phone.trim()

  if (!fullName) errors.fullName = 'Please enter your full name.'

  if (!email) errors.email = 'Please enter the email address on your account.'
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email address.'

  if (!phone) errors.phone = 'Please enter the phone number on your account.'
  else {
    const digits = phone.replace(/\D/g, '').length
    if (!PHONE_CHARS.test(phone) || digits < 6 || digits > 15)
      errors.phone = 'Please enter a valid phone number.'
  }

  if (form.reason.trim().length > REASON_MAX)
    errors.reason = `Please keep this under ${REASON_MAX} characters.`

  if (!form.confirmed) errors.confirmed = 'Please confirm you understand deletion is permanent.'

  return errors
}
