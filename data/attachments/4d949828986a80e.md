# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.ts >> Login negative test for right email, wrong password
- Location: tests/auth.spec.ts:34:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('[class*="Notification_label"]').first()
Expected substring: "Niepoprawne dane logowania"
Received string:    "Konto zablokowane. Spróbuj za 10 minut"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('[class*="Notification_label"]').first()
    11 × locator resolved to <div class="Notification_label__H9YdL">Konto zablokowane. Spróbuj za 10 minut</div>
       - unexpected value "Konto zablokowane. Spróbuj za 10 minut"

```

```yaml
- text: Konto zablokowane. Spróbuj za 10 minut
```

# Test source

```ts
  1  | import {test} from '../fixtures';
  2  | import {expect} from "@playwright/test";
  3  | import dotenv from 'dotenv';
  4  | import {da, faker} from '@faker-js/faker';
  5  | dotenv.config();
  6  | 
  7  | const credentials = [
  8  |     { email: String(process.env.USER_EMAIL), password: faker.internet.password(),
  9  |         expectedError: 'Niepoprawne dane logowania',
  10 |         description: 'right email, wrong password',
  11 |     },
  12 | 
  13 |     { email: faker.internet.email(), password: faker.internet.password(),
  14 |         expectedError: /Niepoprawne dane logowania|Proszę wpisać poprawny adres/i,
  15 |         description: 'wrong email, wrong password' },
  16 | 
  17 |     { email: '', password: faker.internet.password(),
  18 |         expectedError: 'Proszę wpisać poprawny adres e-mail lub nazwę użytkownika',
  19 |     description: 'empty email, wrong password'}
  20 | ];
  21 | 
  22 | 
  23 | test('Login with valid data', async ({homePage, loginPage}) => {
  24 |     await homePage.header.openLogin();
  25 |     const email = String(process.env.USER_EMAIL);
  26 |     const password = String(process.env.USER_PASSWORD);
  27 | 
  28 |     await loginPage.login(email, password);
  29 |     await expect(loginPage.page).toHaveURL('https://www.rossmann.pl/profil'); //проверка через ссылку, тк на разных бразуерах страница выглядит по-разному
  30 | })
  31 | 
  32 | 
  33 | for(const data of credentials) {
  34 |     test(`Login negative test for ${data.description}`, async({homePage, loginPage}) => {
  35 |         await homePage.header.openLogin();
  36 |         await loginPage.login(data.email, data.password);
> 37 |         await expect(loginPage.errorMessage).toContainText(data.expectedError);
     |                                              ^ Error: expect(locator).toContainText(expected) failed
  38 | 
  39 |     })
  40 | }
```