import { test as base, Page } from '@playwright/test';
import { SASHomePage } from '../POM/SASHomePage/SAShomePagePOM';

type TestFixtures = {
  homePage: SASHomePage;
};

export const test = base.extend<TestFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new SASHomePage(page);
    await use(homePage);
  }
});

test.beforeEach(async ({ page }) => {
  console.log('Before test: Navigating to login page');
  await page.goto('https://www.sas.am/');
});

test.afterEach(async () => {
  console.log('After test: Test finished');
});