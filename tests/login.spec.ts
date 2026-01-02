import { test, expect } from '@playwright/test';
import { BasePage } from '../src/pages/base.page';

test('Login with wrong password', async ({ page }) => {
  const basePage = new BasePage(page);
  await page.goto('/');
  await basePage.signUp('testuser', 'password123');
  await basePage.login('testuser', 'password124');
});
