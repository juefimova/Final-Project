import {Page, Locator} from "@playwright/test";

export class CategoryPage {
    readonly page: Page;
    //readonly foundLabel: Locator;
    readonly errorMessage: Locator;
    readonly productCard: Locator;
    readonly addToCartButton: Locator;
    readonly likeButton: Locator;


    constructor(page: Page) {
        this.page = page;
        //this.foundLabel = page.getByTestId('spell-check');
        this.errorMessage = page.getByTestId('no-search-results');
        this.productCard = page.getByTestId('product-image');
        this.addToCartButton = page.getByTestId('product-add-to-basket-button');
        this.likeButton = page.getByTestId('product-add-to-favorites-button');


    }

    async openProductCard() {
        await this.productCard.first().click();
    }

    async addToCart() {
        await this.addToCartButton.first().click();
    }

    async likeProduct() {
        await this.likeButton.first().click();
    }
 }