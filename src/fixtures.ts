import { test as base, Page } from '@playwright/test';
import { BasePage } from './pages/base.page';
import { HomePage } from './pages/home.page';
import dotenv from 'dotenv';
import path from 'path';
import { CartPage } from './pages/cart.page';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

type CustomFixtures = {
//   credentials: { baseURL: string; user: string; pwd: string };
    accessAsUser: Page;
    accessAsGuest: Page;
    pages: {
        basePage: BasePage;
        productPage: HomePage;
        cartPage: CartPage;
    };
};

export const test = base.extend<CustomFixtures>({
//   credentials: async ({}, use) => {
//     await use({
//       baseURL: process.env.BASEURL!,
//       user: process.env.USERNAME!,
//       pwd: process.env.PASSWORD!,
//     });
//   },


    pages: async ({ page }, use) => {
        await use({
            basePage: new BasePage(page),
            productPage: new HomePage(page),
            cartPage: new CartPage(page),
        })
    },

    accessAsUser: async ({ pages, page }, use) => {
        await pages.basePage.navigateToHomePage();
        await pages.basePage.signUp('Harlina','Harlina123');
        await pages.basePage.acceptDialogBox('Sign up successful.');
        await pages.basePage.login('Harlina','Harlina123');
        await use(page);
    },

    accessAsGuest: async ({ pages, page }, use) => {
        await pages.basePage.navigateToHomePage();
        await use(page);
    }
});