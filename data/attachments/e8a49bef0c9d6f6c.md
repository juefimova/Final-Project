# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: liked.spec.ts >> Like product by authorised user
- Location: tests/liked.spec.ts:14:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.rossmann.pl/.*profil/"
Received: "https://www.rossmann.pl/logowanie?returnUrl=https%3A%2F%2Fwww.rossmann.pl%2Fprofil"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    12 × unexpected value "https://www.rossmann.pl/logowanie?returnUrl=https%3A%2F%2Fwww.rossmann.pl%2Fprofil"

```

```yaml
- banner:
  - link "Przejdź do treści":
    - /url: "#main-content-area"
  - link "Strona główna rossmann.pl":
    - /url: /
  - textbox "Szukaj produktów..."
  - button "Szukaj"
  - button "Pobierz Apkę!"
  - link "Profil":
    - /url: /profil
  - link "Ulubione":
    - /url: /profil/ulubione
  - link "Koszyk":
    - /url: /zamowienie/koszyk
- list:
  - listitem:
    - link "Otwórz aktualne promocje":
      - /url: /promocje
      - text: PROMOCJE
  - listitem:
    - link "Otwórz aktualną gazetkę promocyjną":
      - /url: /gazetka/czerwiec-80159-gazetka
      - text: GAZETKA
- link "☀️ PORADNIK SPF":
  - /url: https://www.rossmann.pl/ochrona-przeciwsloneczna
- link "🏖️ NA LATO":
  - /url: https://www.rossmann.pl/kategoria/kolekcje-limitowane/na-lato,20956
- link "✨STREFA K-BEAUTY":
  - /url: https://www.rossmann.pl/koreanskie-kosmetyki
- link "Przejdź do zakładki MEGA!":
  - /url: https://www.rossmann.pl/produkty?Discounts=mega
  - text: MEGA!
- link "Przejdź do zakładki MAM WIĘCEJ":
  - /url: https://www.rossmann.pl/produkty?Statuses=haveMore
  - text: MAM WIĘCEJ
- link "Przejdź do zakładki NOWE":
  - /url: https://www.rossmann.pl/produkty?Order=newestFirst&Statuses=premiere
  - text: NOWE
- link "Przejdź do zakładki TYLKO U NAS":
  - /url: https://www.rossmann.pl/produkty?Statuses=rossmann
  - text: TYLKO U NAS
- navigation:
  - list:
    - listitem:
      - link "Wszystkie kategorie":
        - /url: /kategorie
    - listitem:
      - link "Makijaż i paznokcie":
        - /url: /kategoria/makijaz-i-paznokcie,12000
    - listitem:
      - link "Pielęgnacja i higiena":
        - /url: /kategoria/pielegnacja-i-higiena,12001
    - listitem:
      - link "Włosy":
        - /url: /kategoria/wlosy,13174
    - listitem:
      - link "Mężczyzna":
        - /url: /kategoria/mezczyzna,13224
    - listitem:
      - link "Perfumy":
        - /url: /kategoria/perfumy,13264
    - listitem:
      - link "Dziecko":
        - /url: /kategoria/dziecko,13282
    - listitem:
      - link "Żywność":
        - /url: /kategoria/zywnosc,14075
    - listitem:
      - link "Zdrowie":
        - /url: /kategoria/zdrowie,19065
    - listitem:
      - link "Zwierzęta":
        - /url: /kategoria/zwierzeta,19118
    - listitem:
      - link "Dom i ogród":
        - /url: /kategoria/dom-i-ogrod,19133
    - listitem:
      - link "Lifestyle":
        - /url: /kategoria/lifestyle,19245
    - listitem:
      - link "Foto":
        - /url: /foto
- main:
  - heading "Zaloguj się" [level=1]
  - text: Adres e-mail / nazwa użytkownika
  - textbox "Adres e-mail / nazwa użytkownika":
    - /placeholder: ""
  - text: Proszę wpisać poprawny adres e-mail lub nazwę użytkownika. Hasło
  - textbox "Hasło":
    - /placeholder: ""
  - button "Pokaż hasło"
  - text: Nieprawidłowe hasło.
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
  - heading "Zakupy" [level=3]
  - link "Znajdź drogerię":
    - /url: /drogerie
  - link "Karta podarunkowa":
    - /url: /karta-podarunkowa
  - link "Czyściochowo":
    - /url: /czysciochowo
  - link "Aplikacja mobilna Rossmann PL i Klub":
    - /url: /aplikacja-rossmann
  - link "Drogeria internetowa":
    - /url: /drogeria-internetowa
  - link "Marki":
    - /url: /marki
  - heading "Obsługa klienta" [level=3]
  - link "FAQ":
    - /url: /pomoc/faq
  - link "Pomoc":
    - /url: /pomoc/wszystkie-tematy
  - link "Dostawa":
    - /url: /pomoc/wszystkie-tematy/dostawa
  - link "Płatność":
    - /url: /pomoc/wszystkie-tematy/platnosci
  - link "Zwroty i reklamacje":
    - /url: /pomoc/wszystkie-tematy/zwroty-i-reklamacje
  - link "Dostępność usług":
    - /url: /pomoc/wszystkie-tematy/dostepnosc-uslug
  - link "Kontakt":
    - /url: /kontakt
  - heading "Rossmann" [level=3]
  - link "O firmie":
    - /url: /firma/pl
  - link "Kariera":
    - /url: https://kariera.rossmann.pl/
  - link "CSR":
    - /url: /firma/pl/csr
  - link "Ekspansja":
    - /url: /firma/pl/ekspansja
  - link "Biuro prasowe":
    - /url: /firma/pl/biuro-prasowe
  - link "Złóż ofertę":
    - /url: https://portaldostawcy.rossmann.com.pl/OfferPortal/Form
  - link "Inspiracje":
    - /url: /inspiracje
  - heading "Nasze oznaczenia" [level=3]
  - link "Nowe":
    - /url: /produkty?Statuses=premiere&Page=1&PageSize=96&SortOrder=newestFirst
  - link "Mega":
    - /url: /produkty?Statuses=mega
  - link "Mam więcej":
    - /url: /mam-wiecej
  - link "Pomagamy jak umiemy":
    - /url: /pomagamy
  - heading "Informacje prawne" [level=3]
  - link "Regulaminy":
    - /url: /pomoc/regulaminy
  - link "Polityka plików cookie":
    - /url: https://www.rossmann.pl/dokumenty/polityka-plikow-cookies.pdf
  - link "Polityka prywatności":
    - /url: https://rossmann.pl/dokumenty/polityka-prywatnosci.pdf
  - link "Lista plików cookies":
    - /url: /wykorzystywane-pliki-cookies
  - link "Ustawienia plików cookies":
    - /url: "?cmpscreencustom"
  - link "Punkt kontaktowy/Point of contact DSA":
    - /url: /pomoc/wszystkie-tematy/punkt-kontaktowy-uslug-cyfrowychpoint-of-contact-dsa
  - separator
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
  - img "Kod QR do pobrania aplikacji mobilnej"
  - link "Pobierz z Google Play":
    - /url: https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=pl.com.rossmann.centauros
    - img "Pobierz z Google Play"
  - link "Pobierz w App Store":
    - /url: https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=791525539&mt=8
    - img "Pobierz w App Store"
  - link "Odkrywaj w AppGallery":
    - /url: https://appgallery.cloud.huawei.com/ag/n/app/C101051005?channelId=EUPLBDD20200916RO&detailType=0
    - img "Odkrywaj w AppGallery"
  - text: Metody płatności
  - list:
    - listitem:
      - img "masterCard"
    - listitem:
      - img "Visa"
    - listitem:
      - img "Blik"
    - listitem:
      - img "Przelewy 24"
    - listitem:
      - img "Paypo"
    - listitem:
      - img "Payu"
    - listitem:
      - img "Google pay"
    - listitem:
      - img "Apple pay"
  - text: Nasi dostawcy
  - list:
    - listitem:
      - img "inpost"
    - listitem:
      - img "dpd"
    - listitem:
      - img "dhl"
    - listitem:
      - img "orlen"
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
  6  | test('Like product by unathourized user', async ({homePage, categoryPage, loginPage}) => {
  7  |     await homePage.header.searchProduct('Nivea krem');
  8  |     await expect(categoryPage.productCard.first()).toBeVisible();
  9  |     await expect(categoryPage.likeButton.first()).toBeVisible();
  10 |     await categoryPage.likeProduct();
  11 |     await expect(loginPage.loginHeader).toContainText('Zaloguj się', { timeout: 10000 });
  12 | });
  13 | 
  14 | test('Like product by authorised user', async ({homePage, categoryPage, loginPage}) => {
  15 |     await homePage.header.openLogin();
  16 |     const email = String(process.env.USER_EMAIL);
  17 |     const password = String(process.env.USER_PASSWORD);
  18 | 
  19 |     await loginPage.login(email, password);
> 20 |     await expect(loginPage.page).toHaveURL('/.*profil/');
     |                                  ^ Error: expect(page).toHaveURL(expected) failed
  21 | 
  22 |     await homePage.header.searchProduct('Nivea krem');
  23 |     await expect(categoryPage.productCard.first()).toBeVisible();
  24 |     await expect(categoryPage.likeButton.first()).toBeVisible();
  25 |     await categoryPage.likeProduct();
  26 |     await expect(homePage.header.likedCounter).toHaveText('1');
  27 | })
  28 | 
```