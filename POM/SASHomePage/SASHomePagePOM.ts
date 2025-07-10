import {Locator, Page} from '@playwright/test';
import {BasePage} from  '../SASBasePage';
import {HomePageLocators} from './SASHomePageLocators';


export class SASHomePage extends BasePage {

    readonly searchField: Locator;
    readonly searchFieldButton: Locator;

  constructor(page: Page) {
    super(page);
    this.searchField = page.locator(HomePageLocators.searchField);
    this.searchFieldButton = page.locator(HomePageLocators.searchFieldButton);
  }

  async doSearch(searchKey: string) {
    await this.searchField.fill(searchKey);
    await this.searchFieldButton.click();
    
  }
}