import { test, expect } from '@playwright/test';

test('selectors demo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.pause();
  //10:25  using any object property
await page.click('id=user-name')
await page.locator('[id="user-name"]').click();
await page.locator('id=user-name').fill('Graham');     // or
await page.locator('[id="user-name"]').fill('Einstein');
//15:49  using CSS selector
await page.locator('#login-button').click();
//20:18  using XPath
await page.locator('xpath=//input[@name="login-button"]').click();
await page.locator('//input[@name="login-button"]').click();
//24:55  using Text
await page.locator('text=LOGIN').click();
await page.locator('input:has-text("LOGIN")').click();
  });