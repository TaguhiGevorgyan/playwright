import { test, expect } from '@playwright/test';
import { SASHomePage } from '../POM/SASHomePage/SASHomePagePOM';
import { SearchResults } from '../POM/SASSearchResult/SASSearchResultsPOM';
import { SearchResultsLocators } from '../POM/SASSearchResult/SASSearchResultsLocators';
import { ProductItem } from '../POM/SASProductItem/SASProductItemPOM';
import { HomePageAssertions } from '../POM/SASHomePage/SASHomePageAssertions';
import { SearchResultsAssertions } from '../POM/SASSearchResult/SASSearchResultsAssertions';
import { ProductItemAssertions } from '../POM/SASProductItem/SASProductItemAssertions'


test('product valid search test', async ({ page }) => {
  await page.goto('https://sas.am/');

  const SASHomePageNew = new SASHomePage(page);

  const SASHomePageAssertion = new HomePageAssertions(page);

  await SASHomePageAssertion.searchFieldIsVisible();

  await SASHomePageAssertion.searchButtonIsVisible();

  await SASHomePageNew.doSearch('coffee');

  const searchResult = new SearchResults(page);

  const SASSearchResultAssertion = new SearchResultsAssertions(page);

  await SASSearchResultAssertion.productsCountIsGreaterThen0();

  await SASSearchResultAssertion.sortingListIsVisible

  await SASSearchResultAssertion.productIsVisible();

  await SASSearchResultAssertion.productNameIsVisible();

  await SASSearchResultAssertion.productPriceIsVisible();

  await searchResult.printAllProductsNames();

  await searchResult.clickOnTheProduct('Սուրճ սառը «Starbucks Cappuccino» 220մլ');

  const productItemPage = new ProductItem(page);

  const productItemAssertions = new ProductItemAssertions(page);

  await productItemAssertions.productItemNameIsVisible();

  await productItemAssertions.productItemPriceIsVisible();

  await productItemAssertions.addToCardIsVisible();

  await productItemPage.printProductItemName();

  await productItemPage.printProductItemPrice();

  await productItemPage.clickAddToCardButton();
});

