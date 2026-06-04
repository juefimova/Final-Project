import {Page, Locator} from "@playwright/test";

export class Header {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly loginIcon: Locator;
    readonly likeIcon: Locator;
    readonly basketIcon: Locator;
    readonly cartCounter: Locator;
    readonly likedCounter: Locator

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByTestId('nav-search-input');
        this.loginIcon = page.getByTestId('nav-profile');
        this.likeIcon = page.getByTestId('nav-favorites');
        this.basketIcon = page.getByTestId('nav-basket');
        this.searchButton =  page.getByTestId('nav-search-icon');
        this.cartCounter = page.getByTestId('nav-basket-items-count');
        this.likedCounter = page.getByTestId('nav-favorites-items-count');
    }

    async searchProduct(product: string): Promise<void> {
        await this.searchInput.fill(product);
        await this.searchInput.press('Enter');
        //await this.searchButton.click();
    }

    async openLogin(): Promise<void> {
        await this.loginIcon.click();
    }

    async openLiked(): Promise<void> {
        await this.likeIcon.click();
    }

    async openCart(): Promise<void> {
        await this.basketIcon.click();
    }


}