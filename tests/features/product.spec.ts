import { test } from '../../src/fixtures';

test('Add Multiple Products to Cart', async ({ accessAsGuest, pages }) => {
    accessAsGuest;
    await pages.productPage.selectProduct('Phones','Samsung galaxy s6');
    await pages.basePage.acceptDialogBox('Product added.');
    await pages.basePage.clickHomeMenu();
    await pages.productPage.selectProduct('Laptops','Sony vaio i5');
    await pages.basePage.acceptDialogBox('Product added.');
    await pages.basePage.clickHomeMenu();
    await pages.productPage.selectProduct('Monitors','Apple monitor 24');
    await pages.basePage.acceptDialogBox('Product added.');
    await pages.basePage.clickCartMenu();

});
