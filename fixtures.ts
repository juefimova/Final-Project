import {expect, test as base} from '@playwright/test';
import {CookieBanner} from "./components/CookieBanner";
import {HomePage} from "./pages/HomePage";
import {CategoryPage} from "./pages/CategoryPage";
import {LoginPage} from "./pages/LoginPage";
import {CartPage} from "./pages/CartPage";
import {ProductDetailPage} from "./pages/ProductDetailPage";
import {LikedPage} from "./pages/LikedPage";

type Fixtures = {
    cookieBanner: CookieBanner;
    homePage: HomePage;
    categoryPage: CategoryPage;
    loginPage: LoginPage;
    cartPage: CartPage;
    productDetailPage: ProductDetailPage;
    likedPage: LikedPage;
}

export const test = base.extend<Fixtures>({

    cookieBanner: async ({page}, use) => {
        await use(new CookieBanner(page));
    },

    homePage: async ({page, cookieBanner}, use) => {
        const homePage = new HomePage(page);

        await page.goto('/');
        await cookieBanner.acceptCookies();
        await use(homePage);
},
    categoryPage: async ({page}, use) => {
        await use(new CategoryPage(page));
    },

    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    cartPage: async ({page}, use) => {
        await use(new CartPage(page));
    },
    productDetailPage: async ({page}, use) => {
        await use(new ProductDetailPage(page));
    },

    likedPage: async ({page}, use) => {
        await use(new LikedPage(page));
    }
})