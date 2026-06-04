import {Page, Locator} from "@playwright/test";

export class ProductDetailPage {
    readonly page: Page;
    readonly addButton: Locator;
    readonly goToCartModalButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addButton = page.getByTestId('product-add-to-basket-button');
        this.goToCartModalButton = page.getByRole('link', { name: 'Przejdź do koszyka' });
    }

    async addToCart() {
        await this.addButton.click();
    }

    async closeCartModalIfVisible(): Promise<void> {
        const continueButton = this.page.getByRole('button', { name: 'Kontynuuj zakupy' });

        if (await continueButton.isVisible()) {
            await continueButton.click();
        }
    }

}