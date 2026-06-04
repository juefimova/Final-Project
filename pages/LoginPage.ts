import {Page, Locator} from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly loginHeader: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginHeader = page.getByRole('heading', { name: 'Zaloguj się' });
        this.emailInput = page.getByRole('textbox', { name: 'Adres e-mail / nazwa użytkownika' });
        this.passwordInput = page.getByRole('textbox', {name: 'Hasło'});
        this.loginButton = this.page.locator('form').getByRole('button', { name: 'Zaloguj się'});
        this.errorMessage = page.locator('[class*="Notification_label"]').first(); //по-другому не находится
    }

    async login(email: string, password: string): Promise<void> {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}