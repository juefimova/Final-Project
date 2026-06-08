# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.ts >> Login with valid data
- Location: tests/auth.spec.ts:23:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.rossmann.pl/profil"
Received: "https://www.rossmann.pl/logowanie?returnUrl=https%3A%2F%2Fwww.rossmann.pl%2Fprofil"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://www.rossmann.pl/logowanie?returnUrl=https%3A%2F%2Fwww.rossmann.pl%2Fprofil"

```

```yaml
- banner:
  - link "Strona główna rossmann.pl":
    - /url: /
  - textbox "Szukaj produktów..."
  - button "Szukaj"
  - link "Profil":
    - /url: /profil
  - link "Ulubione":
    - /url: /profil/ulubione
  - link "Koszyk":
    - /url: /zamowienie/koszyk
  - button "Otwórz menu"
- main:
  - heading "Zaloguj się" [level=1]
  - text: Adres e-mail / nazwa użytkownika
  - textbox "Adres e-mail / nazwa użytkownika":
    - /placeholder: ""
    - text: undefined
  - text: Niepoprawne dane logowania. Hasło
  - textbox "Hasło":
    - /placeholder: ""
    - text: undefined
  - button "Pokaż hasło"
  - checkbox "Nie wylogowuj mnie"
  - text: Nie wylogowuj mnie
  - button "Nie pamiętam hasła"
  - button "Zaloguj się"
  - text: Jesteś nowym klientem? Poznajmy się lepiej
  - button "Załóż konto"
- contentinfo:
  - heading "stopka" [level=2]
  - list:
    - listitem:
      - strong: Bezpieczna płatność
    - listitem:
      - strong: Darmowa dostawa
      - text: od 199 zł
    - listitem:
      - strong: Darmowy odbiór
      - text: w ponad 2000 drogerii
    - listitem:
      - strong: 14 dni na zwrot zakupów
  - separator
  - heading "Zapisz się na newsletter!" [level=3]
  - paragraph: Lubisz być na bieżąco? Kliknij w przycisk i zapisz się do newslettera.
  - button "Zapisz się na newsletter.": Dołączam!
  - text: "Znajdź nas również na:"
  - link "Link do Instagram, otwiera się w nowej karcie.":
    - /url: https://www.instagram.com/rossmannpl/?hl=pl
    - img "Instagram"
  - link "Link do Facebook, otwiera się w nowej karcie.":
    - /url: https://www.facebook.com/RossmannPL
    - img "Facebook"
  - link "Link do TikTok, otwiera się w nowej karcie.":
    - /url: https://www.tiktok.com/@rossmannpl
    - img "TikTok"
  - link "Link do YouTube, otwiera się w nowej karcie.":
    - /url: https://www.youtube.com/channel/UCtB6kn-GfczS4eRBwaBHgwA
    - img "YouTube"
  - button "Zakupy":
    - heading "Zakupy" [level=3]
  - button "Obsługa klienta":
    - heading "Obsługa klienta" [level=3]
  - button "Rossmann":
    - heading "Rossmann" [level=3]
  - button "Nasze oznaczenia":
    - heading "Nasze oznaczenia" [level=3]
  - button "Informacje prawne":
    - heading "Informacje prawne" [level=3]
  - button "Metody płatności":
    - heading "Metody płatności" [level=3]
  - button "Nasi dostawcy":
    - heading "Nasi dostawcy" [level=3]
  - heading "Przydatne informacje" [level=3]
  - link "Jak złożyć zamówienie?":
    - /url: /pomoc/wszystkie-tematy/zamowienia:zlozenie-zamowienia
  - link "Jakie są formy i koszty dostawy?":
    - /url: /pomoc/wszystkie-tematy/dostawa
  - link "Jak opłacić zamówienie?":
    - /url: /pomoc/wszystkie-tematy/platnosci:rodzaje-i-sposoby-platnosci
  - link "Zobacz więcej":
    - /url: /pomoc/wszystkie-tematy
  - heading "Gazetka" [level=3]
  - link "Otwórz najnowszą gazetkę Rossmann":
    - /url: /gazetka/czerwiec-80159-gazetka
    - img "Najnowsza gazetka Rossmann"
  - strong: nowe oferty pracy
  - heading "Dołącz do zespołu Rossmanna!" [level=3]
  - img "Grupa trzech osób z podpisem - po pierwsze ludzie."
  - link "Zobacz oferty pracy":
    - /url: https://kariera.rossmann.pl
  - heading "Zakupy stają się prostsze z aplikacją Rossmann PL" [level=3]
  - link "Pobierz z Google Play":
    - /url: https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=pl.com.rossmann.centauros
    - img "Pobierz z Google Play"
  - link "Pobierz w App Store":
    - /url: https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=791525539&mt=8
    - img "Pobierz w App Store"
  - link "Odkrywaj w AppGallery":
    - /url: https://appgallery.cloud.huawei.com/ag/n/app/C101051005?channelId=EUPLBDD20200916RO&detailType=0
    - img "Odkrywaj w AppGallery"
  - text: "Dostępność:"
  - button "Powiększ widok strony."
  - link "Regulamin sklepu Rossmann.pl":
    - /url: /pomoc/regulaminy
  - text: © 2018-2026 Rossmann SDP. Sp.z.o.o. Wszystkie prawa zastrzeżone
- alert
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
> 29 |     await expect(loginPage.page).toHaveURL('https://www.rossmann.pl/profil'); //проверка через ссылку, тк на разных бразуерах страница выглядит по-разному
     |                                  ^ Error: expect(page).toHaveURL(expected) failed
  30 | })
  31 | 
  32 | 
  33 | for(const data of credentials) {
  34 |     test(`Login negative test for ${data.description}`, async({homePage, loginPage}) => {
  35 |         await homePage.header.openLogin();
  36 |         await loginPage.login(data.email, data.password);
  37 |         await expect(loginPage.errorMessage).toContainText(data.expectedError);
  38 | 
  39 |     })
  40 | }
```