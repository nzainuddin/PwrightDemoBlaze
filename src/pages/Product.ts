import { Locator, type Page } from '@playwright/test';

export class ProductPage {
    private readonly page: Page;
    readonly phoneCategoryMenu: Locator;
    readonly laptopCategoryMenu: Locator;
    readonly monitorCategoryMenu: Locator
    readonly previousButton: Locator;
    readonly nextButton: Locator;
    readonly addToCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.phoneCategoryMenu = page.locator('a', { hasText: 'Phones' });
        this.laptopCategoryMenu = page.locator('a', { hasText: 'Laptops' });
        this.monitorCategoryMenu = page.locator('a', { hasText: 'Monitors' });
        this.previousButton = page.locator('.carousel-control-prev');
        this.nextButton = page.locator('.carousel-control-next');
        this.addToCartButton = page.locator('a', { hasText: 'Add to cart' });
    }
}