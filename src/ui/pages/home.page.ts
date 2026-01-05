import { Locator, type Page } from '@playwright/test';

export class HomePage {
    private readonly page: Page;
    readonly phoneCategoryMenu: Locator;
    readonly laptopCategoryMenu: Locator;
    readonly monitorCategoryMenu: Locator;
    readonly productNameLink: Locator;
    readonly previousButton: Locator;
    readonly nextButton: Locator;
    readonly addToCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.phoneCategoryMenu = page.locator('a', { hasText: 'Phones' });
        this.laptopCategoryMenu = page.locator('a', { hasText: 'Laptops' });
        this.monitorCategoryMenu = page.locator('a', { hasText: 'Monitors' });
        this.productNameLink = page.locator('//h4[@class="card-title"]/a');
        this.previousButton = page.getByRole('button', { name: 'Previous' });
        this.nextButton = page.getByRole('button', { name: 'Next' });
        this.addToCartButton = page.locator('a', { hasText: 'Add to cart' });
    }

    async clickPhoneCategory() {
        await this.phoneCategoryMenu.click();
    }

    async clickLaptopCategory() {
        await this.laptopCategoryMenu.click();
    }
    
    async clickMonitorCategory() {
        await this.monitorCategoryMenu.click();
    }

    async selectProduct(category: string, productName: string) {
        switch(category.toLowerCase()) {
            case 'phones':
                await this.clickPhoneCategory();    
                break;
            case 'laptops':
                await this.clickLaptopCategory();
                break;
            case 'monitors':
                await this.clickMonitorCategory();
                break;
            default:
                throw new Error(`Unknown category: ${category}`);
        }
        const productLink = this.page.locator('a', { hasText: productName }).first();
        await productLink.click();
        await this.addToCartButton.click();
    }

    async selectPhoneByName(phoneName: string) {
        const phoneLink = this.page.locator('a', { hasText: phoneName });
        await phoneLink.click();
        await this.addToCartButton.click();
    }

    async getProductNames(): Promise<string[]> {
        const count = await this.productNameLink.count();
        const productNames: string[] = [];
        for (let i = 0; i < count; i++) {
            productNames.push(await this.productNameLink.nth(i).innerText());
        }   
        return productNames;
    }

    async clickPreviousButton() {
        await this.previousButton.click();
    }

    async clickNextButton() {
        await this.nextButton.click();
    }
}