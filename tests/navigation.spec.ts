import {test} from '../fixtures';
import {expect} from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config();

test('Open login page', async ({homePage, loginPage}) => {
    await homePage.header.openLogin();
    await expect(loginPage.loginHeader).toContainText('Zaloguj się');
})

test('Open favourites page by unauthorized user', async ({homePage, loginPage}) => {
    await homePage.header.openLiked();
    await expect(loginPage.loginHeader).toContainText('Zaloguj się');
})

test('Open login page by authorized user', async ({homePage, loginPage, likedPage}) => {
    await homePage.header.openLogin();
    const email = String(process.env.USER_EMAIL);
    const password = String(process.env.USER_PASSWORD);

    await loginPage.login(email, password);
    await expect(loginPage.page).toHaveURL('/.*profil/');

    await homePage.header.openLiked();
    await expect(likedPage.likedHeader).toHaveText('Ulubione');
})

test('Open cart without products', async ({homePage, cartPage}) => {
    await homePage.header.openCart();
    await expect(cartPage.emptyMessage).toHaveText('Twój koszyk jest pusty');
})

test('Open cart with products', async ({homePage, categoryPage, cartPage}) => {
    await homePage.header.searchProduct('krem');
    await expect(categoryPage.productCard.first()).toBeVisible();
    await categoryPage.addToCart();
    await homePage.header.openCart();
    await expect(cartPage.productContainer).toBeVisible();
})



