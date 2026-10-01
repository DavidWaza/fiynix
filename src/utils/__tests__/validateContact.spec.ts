import { describe, expect, it } from 'vitest'
import type { ContactForm } from '@/types'
import { validateContact } from '../validateContact'

const empty: ContactForm = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  dialCode: '',
  phone: '',
  message: '',
}
const valid: ContactForm = { ...empty, firstName: 'Ada', email: 'ada@example.com' }

describe('validateContact', () => {
  it('accepts first name + email with everything else optional', () => {
    expect(validateContact(valid)).toEqual({})
  })

  it('requires first name and email', () => {
    expect(Object.keys(validateContact(empty)).sort()).toEqual(['email', 'firstName'])
  })

  it('rejects malformed email addresses', () => {
    expect(validateContact({ ...valid, email: 'ada@example' }).email).toBeDefined()
    expect(validateContact({ ...valid, email: 'ada example.com' }).email).toBeDefined()
  })

  it('validates phone only when provided', () => {
    expect(validateContact({ ...valid, phone: '(410) 555-0134' }).phone).toBeUndefined()
    expect(validateContact({ ...valid, phone: '12' }).phone).toBeDefined()
    expect(validateContact({ ...valid, phone: 'call me' }).phone).toBeDefined()
  })
})
