import { test } from '@playwright/test';
import { ProductPage } from '../../src/pages/product.page';

test('Able to checkout cart as a signed up user', async ({ page }) => {
  const productPage = new ProductPage(page);
  await page.goto('/');
  await productPage.clickPhoneCategory();
  await productPage.selectPhoneByName('Samsung galaxy s6');
});

test('Able to checkout cart as a guest', async ({ page }) => {
  const productPage = new ProductPage(page);
  await page.goto('/');
  await productPage.clickPhoneCategory();
  await productPage.selectPhoneByName('Samsung galaxy s6');
});
