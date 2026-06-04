import {Page, Locator} from "@playwright/test";

export class CookieBanner {
    readonly page: Page;
    readonly acceptButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.acceptButton = page.getByRole('button', {name: 'Zgoda na wszystkie'});
    }

    async acceptCookies(): Promise<void> {
        await this.acceptButton.waitFor({ state: 'visible', timeout: 7000 });
        await this.acceptButton.click();

    }
}