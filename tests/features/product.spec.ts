import { expect } from '@playwright/test';
import { test } from '../../src/fixtures';

test('Add Multiple Products to Cart', async ({ accessAsGuest, pages }) => {
    accessAsGuest;
    await pages.productPage.selectProduct('Phones','Samsung galaxy s6');
    await pages.basePage.acceptDialogBoxIfPresent('Product added');
    await pages.basePage.clickHomeMenu();
    await pages.productPage.selectProduct('Laptops','Sony vaio i5');
    await pages.basePage.acceptDialogBoxIfPresent('Product added');
    await pages.basePage.clickHomeMenu();
    await pages.productPage.selectProduct('Monitors','Apple monitor 24');
    await pages.basePage.acceptDialogBoxIfPresent('Product added');
    await pages.basePage.clickCartMenu();
    const productsInCart = await pages.cartPage.getColumnData('Title');
    expect(productsInCart.sort()).toEqual(["Apple monitor 24", "Sony vaio i5", "Samsung galaxy s6"].sort());

    const pricesInCart = await pages.cartPage.getColumnData('Price');
    const totalPrice = pricesInCart.reduce((sum, price) => sum + parseFloat(price), 0);
    const displayedTotal = await pages.cartPage.getTotalPrice();
    expect(totalPrice).toBe(displayedTotal); 
});
