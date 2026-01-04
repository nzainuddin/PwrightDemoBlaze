import { Locator, type Page } from '@playwright/test';

export class CartPage {
    private readonly page: Page;
    readonly totalPrice: Locator;

    constructor(page: Page) {
        this.page = page;
        this.totalPrice = page.locator('#totalp');
    }

    async getColumnData(columnName: string): Promise<string[]> {
        const position = `count(//thead/tr/th[normalize-space()='${columnName}']/preceding-sibling::th) + 1`;
        const cellLocator = this.page.locator(`//tbody/tr/td[${position}]`);
        await cellLocator.first().waitFor({ state: 'visible', timeout: 30000 });
        return await cellLocator.allTextContents();
    }

    async getTotalPrice(): Promise<number> {
        return parseFloat(await this.totalPrice.innerText());
    }
}