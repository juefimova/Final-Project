# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> Open login page by authorized user
- Location: tests/navigation.spec.ts:16:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.rossmann.pl/.*profil/"
Received: "https://www.rossmann.pl/logowanie?returnUrl=https%3A%2F%2Fwww.rossmann.pl%2Fprofil"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "https://www.rossmann.pl/logowanie?returnUrl=https%3A%2F%2Fwww.rossmann.pl%2Fprofil"

```

```yaml
- region "Baner aplikacji Rossmann":
  - button "Zamknij baner aplikacji Rossmann"
  - strong: Zaplanuj zakupy
  - text: z aplikacją Rossmann PL!
  - link "Przejdź do aplikacji Rossmann":
    - /url: https://link.rossmann.pl/home
    - text: Do aplikacji
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
  - text: Konto zablokowane. Spróbuj za 10 minut Hasło
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
  4  | dotenv.config();
  5  | 
  6  | test('Open login page', async ({homePage, loginPage}) => {
  7  |     await homePage.header.openLogin();
  8  |     await expect(loginPage.loginHeader).toContainText('Zaloguj się');
  9  | })
  10 | 
  11 | test('Open favourites page by unauthorized user', async ({homePage, loginPage}) => {
  12 |     await homePage.header.openLiked();
  13 |     await expect(loginPage.loginHeader).toContainText('Zaloguj się');
  14 | })
  15 | 
  16 | test('Open login page by authorized user', async ({homePage, loginPage, likedPage}) => {
  17 |     await homePage.header.openLogin();
  18 |     const email = String(process.env.USER_EMAIL);
  19 |     const password = String(process.env.USER_PASSWORD);
  20 | 
  21 |     await loginPage.login(email, password);
> 22 |     await expect(loginPage.page).toHaveURL('/.*profil/');
     |                                  ^ Error: expect(page).toHaveURL(expected) failed
  23 | 
  24 |     await homePage.header.openLiked();
  25 |     await expect(likedPage.likedHeader).toHaveText('Ulubione');
  26 | })
  27 | 
  28 | test('Open cart without products', async ({homePage, cartPage}) => {
  29 |     await homePage.header.openCart();
  30 |     await expect(cartPage.emptyMessage).toHaveText('Twój koszyk jest pusty');
  31 | })
  32 | 
  33 | test('Open cart with products', async ({homePage, categoryPage, cartPage}) => {
  34 |     await homePage.header.searchProduct('krem');
  35 |     await expect(categoryPage.productCard.first()).toBeVisible();
  36 |     await categoryPage.addToCart();
  37 |     await homePage.header.openCart();
  38 |     await expect(cartPage.productContainer).toBeVisible();
  39 | })
  40 | 
  41 | 
  42 | 
  43 | 
```