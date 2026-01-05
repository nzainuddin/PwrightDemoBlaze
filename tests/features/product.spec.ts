import { expect } from '@playwright/test';
import { test } from '../../src/fixtures/index';

test('View and navigate pages: Phone category', async ({ accessAsGuest, pages, controllerApi }) => {
    accessAsGuest;
    await pages.productPage.clickPhoneCategory();
    const response = await controllerApi.getByCategory('phone');
    const categories = response.Items.map((item: { cat: string; }) => item.cat);
    const phoneNames = response.Items.map((item: { name: string; }) => item.name);
    const uniqueCategories = [...new Set(categories)]; // Get unique values
    expect(uniqueCategories).toEqual(['phone']);

    const uiProductNames = await pages.productPage.getProductNames();
    expect(uiProductNames.length).toBe(response.Items.length);

    await pages.productPage.clickNextButton();
    // Verify if next page button available, last phone item will be displayed
    expect.soft(phoneNames).toContain(uiProductNames[uiProductNames.length - 1]);
    await pages.productPage.clickPreviousButton();
    // Verify if previous page button available, first phone item will be displayed
    expect.soft(phoneNames).toContain(uiProductNames[0]);
});

test('View and navigate pages: Laptops category', async ({ accessAsGuest, pages, controllerApi }) => {
    accessAsGuest;
    await pages.productPage.clickPhoneCategory();
    const response = await controllerApi.getByCategory('notebook');
    const categories = response.Items.map((item: { cat: string; }) => item.cat);
    const laptopNames = response.Items.map((item: { name: string; }) => item.name);
    const uniqueCategories = [...new Set(categories)]; // Get unique values
    expect(uniqueCategories).toEqual(['notebook']);

    const uiProductNames = await pages.productPage.getProductNames();
    expect(uiProductNames.length).toBe(response.Items.length);

    await pages.productPage.clickNextButton();
    // Verify if next page button available, last laptop item will be displayed
    expect.soft(laptopNames).toContain(uiProductNames[uiProductNames.length - 1]);
    await pages.productPage.clickPreviousButton();
    // Verify if previous page button available, first laptop item will be displayed
    expect.soft(laptopNames).toContain(uiProductNames[0]);
});


test('View and navigate pages: Monitors category', async ({ accessAsGuest, pages, controllerApi }) => {
    accessAsGuest;
    await pages.productPage.clickMonitorCategory();
    const response = await controllerApi.getByCategory('monitor');
    const categories = response.Items.map((item: { cat: string; }) => item.cat);
    const monitorNames = response.Items.map((item: { name: string; }) => item.name);
    const uniqueCategories = [...new Set(categories)]; // Get unique values
    expect(uniqueCategories).toEqual(['monitor']);

    const uiProductNames = await pages.productPage.getProductNames();
    expect(uiProductNames.length).toBe(response.Items.length);

    await pages.productPage.clickNextButton();
    // Verify if next page button available, last monitor item will be displayed
    expect.soft(monitorNames).toContain(uiProductNames[uiProductNames.length - 1]);
    await pages.productPage.clickPreviousButton();
    // Verify if previous page button available, first monitor item will be displayed
    expect.soft(monitorNames).toContain(uiProductNames[0]);
});

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
