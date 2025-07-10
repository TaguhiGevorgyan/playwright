import { Locator,expect,Page } from '@playwright/test';
import { BasePage } from '../SASBasePage';
import { SearchResultsLocators } from '../SASSearchResult/SASSearchResultsLocators';

export class SearchResults extends BasePage {

    readonly nthProduct: Locator;
    readonly productName: Locator;

  constructor(page: Page) {
    super(page);

}

  async clickOnNthProduct(n: number) {
    await this.page.locator(SearchResultsLocators.product).nth(n).click();
  }

  async printNthProductName(n: number){
    let prodName = await this.page.locator(SearchResultsLocators.product).nth(n).locator(SearchResultsLocators.productName).first().textContent();
    console.log('NAME = ' + prodName);
  }

  async printAllProductsNames(){
    let prodList = this.page.locator(SearchResultsLocators.product);

    let prodCount = await prodList.count();
    for(let i = 0; i < prodCount; i++){
      let product = prodList.nth(i)
      let prodName = await product.locator(SearchResultsLocators.productName).first().textContent();
      console.log('NAME NAME NAME + ',prodName);
      }
    } 
async clickOnTheProduct(name: string) {
  const prodList = this.page.locator(SearchResultsLocators.product);
  const prodCount = await prodList.count();
  let found = false;

  for (let i = 0; i < prodCount; i++) {
    const product = prodList.nth(i);
    const nameLocator = product.locator(SearchResultsLocators.productName).first();
    const productName = await nameLocator.textContent();
    if (productName?.trim() === name) {
      found = true
      await product.click();
      break;
    }
  }
}
}
