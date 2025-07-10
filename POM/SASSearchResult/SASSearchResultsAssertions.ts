import { expect,Locator, Page } from '@playwright/test';
import {SearchResultsLocators} from './SASSearchResultsLocators';
import {SearchResultsPOM} from './SASSearchResultsPOM'


export class SearchResultsAssertions{
    readonly page: Page;
    readonly product: Locator;
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly sortingList: Locator;

    constructor(page: Page){
        this.page  = page;
        this.product = page.locator(SearchResultsLocators.product);
        this.productName = page.locator(SearchResultsLocators.productName);
        this.productPrice = page.locator(SearchResultsLocators.productPrice);
        this.sortingList = page.locator(SearchResultsLocators.sortingLIst)

    }
    async productsCountIsGreaterThen0(){
        //expect(await this.product.count()).toBeGreaterThan(0);
        console.log("ayoooooooo", await this.product.count());
    }
    async sortingListIsVisible(){
        await expect(this.sortingList).toBeVisible();
    }
    async productIsVisible() {
        await expect(this.product.first()).toBeVisible();
    }
    async productNameIsVisible() {
        await expect(this.productName.first()).toBeVisible()
    }
    async productPriceIsVisible() {
        await expect(this.productPrice.first()).toBeVisible()
    }
    async theProductFoundByName(){
        expect(SearchResultsPOM.found).toBeTruthy()
    }
}