
import { test, expect } from '@playwright/test';

test('Search field test', async ({ page }) => {
    await page.goto('https://www.sas.am/');
    const searchField = page.locator('.search__input');
    await searchField.first().fill('չիր');
    const searchButton = page.locator('button.search__btn.js-search-btn')
    await searchButton.click();
    const product = page.locator('.product');
    const nthProduct = product.nth(1);
    const productName= nthProduct.locator('.product__name')
    const productNameText = await nthProduct.innerText();

    console.log('testPro', productNameText);

    await nthProduct.click();

    const productItemName = page.locator('.card__form .card__title');
   // locator('.product').nth(1).locator('.product__name .hidden-sm').first()


    const textItemName = await productItemName.textContent();
    console.log('anunyyy',textItemName);
    const productItemPrice = page.locator('.price__text');
    const textProductItemPrice = await productItemPrice.textContent();
    console.log('ginnnnn', textProductItemPrice);
    const addToCardButton = page.locator('.basket-counter__btn .js-basket-counter-btn .js-animate-image .addTocart');
    await addToCardButton.click();

  });

  //await page.locator(SearchResultsLocators.productWrapper).nth(1).locator(SearchResultsLocators.productName).first()
  // .textContent();