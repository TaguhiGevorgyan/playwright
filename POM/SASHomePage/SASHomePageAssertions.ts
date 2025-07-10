import { expect,Locator, Page } from '@playwright/test';
import {HomePageLocators} from '../SASHomePage/SASHomePageLocators';


export class HomePageAssertions {
    readonly page: Page;
    readonly searchField: Locator;
    readonly searchButton: Locator;

    constructor(page: Page){
        this.page  = page;
        this.searchField = page.locator(HomePageLocators.searchField);
        this.searchButton = page.locator(HomePageLocators.searchFieldButton);

    }

    async searchFieldIsVisible() {
        await expect(this.searchField).toBeVisible();
    }
    async searchButtonIsVisible() {
        await expect(this.searchButton).toBeVisible()
    }
}