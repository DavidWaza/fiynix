import type { ContactErrors, ContactForm } from '@/types'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
/** Digits plus common separators; 6–15 digits in total (E.164 max is 15) */
const PHONE_CHARS = /^[\d\s().-]+$/

export const MESSAGE_MAX = 2000

export function validateContact(form: ContactForm): ContactErrors {
  const errors: ContactErrors = {}
  const firstName = form.firstName.trim()
  const email = form.email.trim()
  const phone = form.phone.trim()

  if (!firstName) errors.firstName = 'Please enter your first name.'

  if (!email) errors.email = 'Please enter your email address.'
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email address.'

  if (phone) {
    const digits = phone.replace(/\D/g, '').length
    if (!PHONE_CHARS.test(phone) || digits < 6 || digits > 15)
      errors.phone = 'Please enter a valid phone number.'
  }

  if (form.message.trim().length > MESSAGE_MAX)
    errors.message = `Please keep this under ${MESSAGE_MAX} characters.`

  return errors
}
