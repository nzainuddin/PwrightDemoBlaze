import { test, expect } from '@playwright/test';
import { ProductPage } from '../src/pages/product.page';

test('has title', async ({ page }) => {
  const productPage = new ProductPage(page);
  await page.goto('/');
  await productPage.clickPhoneCategory();
  await productPage.selectPhoneByName('Samsung galaxy s6');
});
