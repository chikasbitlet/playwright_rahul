import { test, expect, chromium } from '@playwright/test';

test('slowmotionTestlevel', async () => {
  // Launch browser with slow motion
  const browser = await chromium.launch({
    headless: false,
    slowMo: 1000,
  });

  // Create context with video recording
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',
      size: { width: 800, height: 600 },
    },
  });

  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.click('[data-test="logout-sidebar-link"]');

  await context.close();
  await browser.close();
});
