import { Locator, Page } from '@playwright/test';
import { BasePage } from '../SASBasePage';
import { ProductItemLocators } from '../SASProductItem/SASProductItemLocators';

export class ProductItem extends BasePage {

    readonly productItemName: Locator;
    readonly productItemPrice: Locator;
    readonly addToCardButton: Locator;

  constructor(page: Page) {
    super(page);
}

  async clickAddToCardButton() {
    await this.page.locator(ProductItemLocators.addToCardButton).click();
  }

  async printProductItemName(){
    let prodItemName = await this.page.locator(ProductItemLocators.productItemName).textContent();
    console.log('ITEM NAME = ' + prodItemName);
  }

  async printProductItemPrice(){
    let prodItemPrice = await this.page.locator(ProductItemLocators.productItemPrice).textContent();
    console.log('ITEM PRICE = ' + prodItemPrice);
  }

}