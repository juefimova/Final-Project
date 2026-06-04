import {Page, Locator} from "@playwright/test";
import {CookieBanner} from "../components/CookieBanner";
import {Header} from "../components/Header";

export class HomePage{
    readonly page: Page;
    readonly cookieBanner: CookieBanner;
    readonly header: Header;


    constructor(page: Page) {
        this.page = page;
        this.cookieBanner = new CookieBanner(page);
        this.header = new Header(page);
    }

    async navigate(): Promise<void> {
        await this.page.goto('/');
    }




}