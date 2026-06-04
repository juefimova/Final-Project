import {test} from '../fixtures';
import {expect} from "@playwright/test";
import dotenv from 'dotenv';
import {da, faker} from '@faker-js/faker';
dotenv.config();

const credentials = [
    { email: String(process.env.USER_EMAIL), password: faker.internet.password(),
        expectedError: 'Niepoprawne dane logowania',
        description: 'right email, wrong password',
    },

    { email: faker.internet.email(), password: faker.internet.password(),
        expectedError: /Niepoprawne dane logowania|Proszę wpisać poprawny adres/i,
        description: 'wrong email, wrong password' },

    { email: '', password: faker.internet.password(),
        expectedError: 'Proszę wpisać poprawny adres e-mail lub nazwę użytkownika',
    description: 'empty email, wrong password'}
];


test('Login with valid data', async ({homePage, loginPage}) => {
    await homePage.header.openLogin();
    const email = String(process.env.USER_EMAIL);
    const password = String(process.env.USER_PASSWORD);

    await loginPage.login(email, password);
    await expect(loginPage.page).toHaveURL('https://www.rossmann.pl/profil'); //проверка через ссылку, тк на разных бразуерах страница выглядит по-разному
})


for(const data of credentials) {
    test(`Login negative test for ${data.description}`, async({homePage, loginPage}) => {
        await homePage.header.openLogin();
        await loginPage.login(data.email, data.password);
        await expect(loginPage.errorMessage).toContainText(data.expectedError);

    })
}