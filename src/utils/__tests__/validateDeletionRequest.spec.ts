import { describe, expect, it } from 'vitest'
import type { DeletionRequest } from '@/types'
import { validateDeletionRequest } from '../validateDeletionRequest'

const valid: DeletionRequest = {
  fullName: 'Ada Obi',
  email: 'ada@example.com',
  phone: '+1 410 555 0134',
  reason: '',
  confirmed: true,
}

describe('validateDeletionRequest', () => {
  it('accepts a complete request with no reason', () => {
    expect(validateDeletionRequest(valid)).toEqual({})
  })

  it('requires name, email, phone and confirmation', () => {
    const errors = validateDeletionRequest({
      fullName: '',
      email: '',
      phone: '',
      reason: '',
      confirmed: false,
    })
    expect(Object.keys(errors).sort()).toEqual(['confirmed', 'email', 'fullName', 'phone'])
  })

  it('rejects malformed email and phone', () => {
    const errors = validateDeletionRequest({ ...valid, email: 'ada@', phone: 'call me' })
    expect(errors.email).toBeDefined()
    expect(errors.phone).toBeDefined()
  })
})
