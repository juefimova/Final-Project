import {test} from '../fixtures';
import {expect} from "@playwright/test";

export const SearchData = {
    validProduct: 'krem',
    brandName: 'NIVEA',
    invalidInput: '87384scsdvff'
};

test("Positive product search", async ({homePage, categoryPage}) => {
    await homePage.header.searchProduct(SearchData.validProduct);
    await expect(categoryPage.productCard.first()).toBeVisible();
})

test("Negative product search", async ({homePage, categoryPage}) => {
    await homePage.header.searchProduct(SearchData.invalidInput);
    await expect(categoryPage.errorMessage).toContainText('Nie znaleźliśmy wyników');
})

test("Positive brand search", async ({homePage, categoryPage}) => {
    await homePage.header.searchProduct(SearchData.brandName);
    await expect(categoryPage.productCard.first()).toContainText('NIVEA');
})