import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://florian.geierstanger.org/');
  await expect(page).toHaveTitle(/.*Florian Geierstanger.*/);
});