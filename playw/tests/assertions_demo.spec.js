import { test, expect } from '@playwright/test';

test('assertions demo', async ({ page }) => {
  await page.goto('https://kitchen.applitools.com/');
  await page.pause();
  await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);

  await expect(page.locator('text = The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/);

  });