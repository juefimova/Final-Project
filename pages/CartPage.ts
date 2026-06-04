import {Page, Locator} from "@playwright/test";

export class CartPage{
    readonly page: Page;
    readonly emptyMessage: Locator;
    readonly checkoutButton: Locator;
    readonly minusButton: Locator;
    readonly plusButton: Locator;
    readonly productQuantity: Locator;
    readonly productContainer: Locator;

    constructor(page: Page){
        this.page = page;
        this.emptyMessage = page.getByTestId('empty-basket-header');
        this.checkoutButton = page.getByTestId('basket-go-to-checkout-button');
        this.minusButton = page.getByTestId('product-decrease-quantity-button');
        this.plusButton = page.getByTestId('product-increase-quantity-button');
        this.productQuantity = page.getByTestId('product-quantity-input');
        this.productContainer = page.getByTestId('product-container');
    }


    async goToCheckout(): Promise<void> {
        await this.checkoutButton.click();
    }

    async increaseQuantity(): Promise<void> {
        await this.plusButton.click();
    }

    async decreaseQuantity(): Promise<void> {
        await this.minusButton.click();
    }
}