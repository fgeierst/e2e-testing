import { test, expect,  } from '@playwright/test';

test('returns status code 200', async ({ page }) => {
  const response = await page.goto('/');
  expect(response?.status()).toBe(200);
})

test('has h1', async ({ page }) => {
  await page.goto('/');
  const h1 = await page.locator('h1');
  await expect(h1).toBeVisible();
});