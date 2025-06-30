import {Page} from '@playwright/test';
import {BasePage} from  '../SASBasePage';
import {HomePageLocators} from './SASHomePageLocators';

export class HomePage extends BasePage {
    constructor(page: Page){
        super(page);
    this.searchField = page.locator(HomePageLocators.searchfield)
}
}

