
import { test, expect } from '@playwright/test';

test('Search field test', async ({ page }) => {
    await page.goto('https://www.sas.am/');
    const searchField = page.locator('.search__input');
    await searchField.first().fill('Ararat');
    const searchButton = page.locator('button.search__btn.js-search-btn')
    await searchButton.click();
    const product = page.locator('.product');
    const productName= page.locator('.product__name hidden-sm')
    const firstProductName = productName.textContent();

    console.log('testPro', firstProductName);
  });