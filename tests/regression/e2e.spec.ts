import { test } from '@playwright/test';
import { HomePage } from '../../src/ui/pages/home.page';

test('Able to checkout cart as a signed up user', async ({ page }) => {
  const homePage = new HomePage(page);
  await page.goto('/');
  await homePage.clickPhoneCategory();
  await homePage.selectPhoneByName('Samsung galaxy s6');
});

test('Able to checkout cart as a guest', async ({ page }) => {
  const homePage = new HomePage(page);
  await page.goto('/');
  await homePage.clickPhoneCategory();
  await homePage.selectPhoneByName('Samsung galaxy s6');
});
