import { test } from '@playwright/test';
import { BasePage } from '../../src/pages/base.page';

test('Submit empty sign up form', async ({ page }) => {
  const basePage = new BasePage(page);
  await page.goto('/');
  await basePage.signUp('', '');
  await basePage.acceptDialogBox('Please fill out Username and Password.');
});

test('Sign up with existing user', async ({ page }) => {
  const basePage = new BasePage(page);
  await page.goto('/');
  await basePage.signUp('testusera', 'password123');
  await basePage.acceptDialogBox('This user already exist.');
});

