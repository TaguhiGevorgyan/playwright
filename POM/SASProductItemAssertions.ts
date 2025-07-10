import { expect,Locator, Page } from '@playwright/test';
import {ProductItemLocators} from '../SASProductItem/SASProductItemLocators';


export class ProductItemAssertions {
    readonly page: Page;
    readonly productItemName : Locator;
    readonly productItemPrice : Locator;
    readonly addToCardButton : Locator;


    constructor(page: Page){
        this.page  = page;
        this.productItemName = page.locator(ProductItemLocators.productItemName);
        this.productItemPrice = page.locator(ProductItemLocators.productItemPrice);
        this.addToCardButton = page.locator(ProductItemLocators.addToCardButton)

    }

    async productItemNameIsVisible() {
        await expect(this.productItemName).toBeVisible();
        expect(await this.productItemName.textContent()).not.toBe('');
    }
    async productItemPriceIsVisible() {
        await expect(this.productItemPrice).toBeVisible();
        const priceText = await this.productItemPrice.textContent();
        expect(priceText).not.toBeNull();
        const normalized = priceText!.replace(/\s+/g, ' ').trim();
        expect(normalized).toMatch(/^\d{1,3}( \d{3})* դր\.$/);

    }
    async addToCardIsVisible() {
        await expect(this.addToCardButton).toBeVisible()
    } 
}