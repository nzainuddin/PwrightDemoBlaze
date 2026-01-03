import { test } from '@playwright/test';
import { BasePage } from '../../src/pages/base.page';

test('Submit empty login form', async ({ page }) => {
  const basePage = new BasePage(page);
  await page.goto('/');
  await basePage.login('', '');
  await basePage.acceptDialogBox('Please fill out Username and Password.');
});

test('Login with incorrect username', async ({ page }) => {
  const basePage = new BasePage(page);
  await page.goto('/');
  await basePage.login('testuser1', 'password124');
  await basePage.acceptDialogBox('User does not exist.');
});

test('Login with incorrect password', async ({ page }) => {
  const basePage = new BasePage(page);
  await page.goto('/');
  await basePage.login('testuser', 'password124');
  await basePage.acceptDialogBox('Wrong password.');
});

test('Login with correct username and password', async ({ page }) => {
  const basePage = new BasePage(page);
  await page.goto('/');
  await basePage.login('Limah', 'Limah');
  await basePage.loggedInUser('Limah');
  await basePage.logOut();
});

