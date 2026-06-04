import {Page, Locator} from "@playwright/test";

export class LikedPage {
    readonly page: Page;
    readonly likedHeader: Locator;

    constructor(page:Page) {
        this.page = page;
        this.likedHeader = page.getByRole('heading', { name: 'Ulubione' });
    }
}