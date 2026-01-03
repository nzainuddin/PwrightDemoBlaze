import { test } from '@playwright/test';
import { BasePage } from '../../src/pages/base.page';

test('Allowed to submit empty contact form', async ({ page }) => {
  const basePage = new BasePage(page);
  await page.goto('/');
  await basePage.contactUs('','','');
  await basePage.acceptDialogBox('Thanks for the message!!');
});

test('Submit contact form', async ({ page }) => {
  const basePage = new BasePage(page);
  await page.goto('/');
  await basePage.contactUs('test@example.com', 'user', 'This is a test message.');
  await basePage.acceptDialogBox('Thanks for the message!!');
});
