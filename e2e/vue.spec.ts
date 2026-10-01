import { test, expect } from '@playwright/test'

test('home page renders the hero heading', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toHaveCount(1)
  await expect(page.locator('h1')).toContainText('Send money worldwide')
})

test('legal pages render from data', async ({ page }) => {
  await page.goto('/privacy-policy')
  await expect(page.locator('h1')).toHaveText('Privacy Policy')
})
