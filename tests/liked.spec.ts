import {test} from '../fixtures';
import {expect} from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config();

test('Like product by unathourized user', async ({homePage, categoryPage, loginPage}) => {
    await homePage.header.searchProduct('Nivea krem');
    await expect(categoryPage.productCard.first()).toBeVisible();
    await expect(categoryPage.likeButton.first()).toBeVisible();
    await categoryPage.likeProduct();
    await expect(loginPage.loginHeader).toContainText('Zaloguj się', { timeout: 10000 });
});

test('Like product by authorised user', async ({homePage, categoryPage, loginPage}) => {
    await homePage.header.openLogin();
    const email = String(process.env.USER_EMAIL);
    const password = String(process.env.USER_PASSWORD);

    await loginPage.login(email, password);
    await expect(loginPage.page).toHaveURL('/.*profil/');

    await homePage.header.searchProduct('Nivea krem');
    await expect(categoryPage.productCard.first()).toBeVisible();
    await expect(categoryPage.likeButton.first()).toBeVisible();
    await categoryPage.likeProduct();
    await expect(homePage.header.likedCounter).toHaveText('1');
})
