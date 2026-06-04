import {test} from '../fixtures';
import {expect} from "@playwright/test";

test("Search for product and add it to cart from catalog", async ({homePage, categoryPage, cartPage}) => {
    await homePage.header.searchProduct('krem');
    await expect(categoryPage.productCard.first()).toBeVisible();
    await categoryPage.addToCart();
    await expect(homePage.header.cartCounter).toHaveText('1');
})

test('Add product from product card and go to checkout unathourized', async ({homePage, categoryPage, cartPage, productDetailPage, loginPage}) => {
    await homePage.header.searchProduct('Nivea szampon');
    await expect(categoryPage.addToCartButton.first()).toBeVisible();
    await categoryPage.openProductCard();
    await productDetailPage.addToCart();
    await productDetailPage.closeCartModalIfVisible();
    await expect(homePage.header.cartCounter).toHaveText('1');
    await homePage.header.openCart();
    await cartPage.goToCheckout();
    await expect(loginPage.loginHeader).toBeVisible();

})

test('Change product quantity inside a cart', async ({homePage, categoryPage, productDetailPage, cartPage}) => {
    await homePage.header.searchProduct('gel');
    await expect(categoryPage.productCard.first()).toBeVisible();
    await categoryPage.openProductCard();
    await productDetailPage.addToCart();
    await productDetailPage.closeCartModalIfVisible();

    await expect(homePage.header.cartCounter).toHaveText('1');
    await homePage.header.openCart();

    await expect(cartPage.minusButton).toBeDisabled();
    await cartPage.increaseQuantity();
    await expect(cartPage.productQuantity.first()).toHaveValue('2');

    await cartPage.decreaseQuantity();
    await expect(cartPage.productQuantity.first()).toHaveValue('1');


})