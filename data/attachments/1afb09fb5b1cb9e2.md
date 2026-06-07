# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> Open cart without products
- Location: tests/navigation.spec.ts:28:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByTestId('empty-basket-header')
Expected: "Twój koszyk jest pusty"
Error: strict mode violation: getByTestId('empty-basket-header') resolved to 2 elements:
    1) <div class="h3 pb-3" data-testid="empty-basket-header">Twój koszyk jest pusty</div> aka getByTestId('basket-preview').getByTestId('empty-basket-header')
    2) <div class="h3 pb-3" data-testid="empty-basket-header">Twój koszyk jest pusty</div> aka getByTestId('basket').getByTestId('empty-basket-header')

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for getByTestId('empty-basket-header')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e5]:
        - link "Przejdź do treści" [ref=e6] [cursor=pointer]:
          - /url: "#main-content-area"
        - link "Strona główna rossmann.pl" [ref=e7] [cursor=pointer]:
          - /url: /
          - img [ref=e8]
        - generic [ref=e20]:
          - textbox "Szukaj produktów..." [ref=e21]
          - button "Szukaj" [ref=e23] [cursor=pointer]:
            - img [ref=e24]
        - generic [ref=e27]:
          - button "Pobierz Apkę!" [ref=e29] [cursor=pointer]:
            - img [ref=e30]
            - generic [ref=e43]: Pobierz Apkę!
          - link "Profil" [ref=e45] [cursor=pointer]:
            - /url: /profil
            - img [ref=e46]
          - link "Ulubione" [ref=e50] [cursor=pointer]:
            - /url: /profil/ulubione
            - img [ref=e51]
          - link "Koszyk" [ref=e54] [cursor=pointer]:
            - /url: /zamowienie/koszyk
            - img [ref=e55]
    - generic [ref=e62]:
      - generic [ref=e63]:
        - list [ref=e64]:
          - listitem [ref=e65]:
            - link "Otwórz aktualne promocje" [ref=e66] [cursor=pointer]:
              - /url: /promocje
              - text: PROMOCJE
          - listitem [ref=e67]:
            - link "Otwórz aktualną gazetkę promocyjną" [ref=e68] [cursor=pointer]:
              - /url: /gazetka/czerwiec-80159-gazetka
              - text: GAZETKA
        - generic [ref=e69]:
          - generic [ref=e70]:
            - link "☀️ PORADNIK SPF" [ref=e71] [cursor=pointer]:
              - /url: https://www.rossmann.pl/ochrona-przeciwsloneczna
            - link "🏖️ NA LATO" [ref=e72] [cursor=pointer]:
              - /url: https://www.rossmann.pl/kategoria/kolekcje-limitowane/na-lato,20956
            - link "✨STREFA K-BEAUTY" [ref=e73] [cursor=pointer]:
              - /url: https://www.rossmann.pl/koreanskie-kosmetyki
          - generic [ref=e74]:
            - link "Przejdź do zakładki MEGA!" [ref=e75] [cursor=pointer]:
              - /url: https://www.rossmann.pl/produkty?Discounts=mega
              - text: MEGA!
            - link "Przejdź do zakładki MAM WIĘCEJ" [ref=e76] [cursor=pointer]:
              - /url: https://www.rossmann.pl/produkty?Statuses=haveMore
              - text: MAM WIĘCEJ
            - link "Przejdź do zakładki NOWE" [ref=e77] [cursor=pointer]:
              - /url: https://www.rossmann.pl/produkty?Order=newestFirst&Statuses=premiere
              - text: NOWE
            - link "Przejdź do zakładki TYLKO U NAS" [ref=e78] [cursor=pointer]:
              - /url: https://www.rossmann.pl/produkty?Statuses=rossmann
              - text: TYLKO U NAS
      - navigation [ref=e80]:
        - list [ref=e81]:
          - listitem [ref=e82]:
            - link "Wszystkie kategorie" [ref=e83] [cursor=pointer]:
              - /url: /kategorie
              - img [ref=e84]
              - text: Wszystkie kategorie
          - listitem [ref=e89]:
            - link "Makijaż i paznokcie" [ref=e90] [cursor=pointer]:
              - /url: /kategoria/makijaz-i-paznokcie,12000
          - listitem [ref=e91]:
            - link "Pielęgnacja i higiena" [ref=e92] [cursor=pointer]:
              - /url: /kategoria/pielegnacja-i-higiena,12001
          - listitem [ref=e93]:
            - link "Włosy" [ref=e94] [cursor=pointer]:
              - /url: /kategoria/wlosy,13174
          - listitem [ref=e95]:
            - link "Mężczyzna" [ref=e96] [cursor=pointer]:
              - /url: /kategoria/mezczyzna,13224
          - listitem [ref=e97]:
            - link "Perfumy" [ref=e98] [cursor=pointer]:
              - /url: /kategoria/perfumy,13264
          - listitem [ref=e99]:
            - link "Dziecko" [ref=e100] [cursor=pointer]:
              - /url: /kategoria/dziecko,13282
          - listitem [ref=e101]:
            - link "Żywność" [ref=e102] [cursor=pointer]:
              - /url: /kategoria/zywnosc,14075
          - listitem [ref=e103]:
            - link "Zdrowie" [ref=e104] [cursor=pointer]:
              - /url: /kategoria/zdrowie,19065
          - listitem [ref=e105]:
            - link "Zwierzęta" [ref=e106] [cursor=pointer]:
              - /url: /kategoria/zwierzeta,19118
          - listitem [ref=e107]:
            - link "Dom i ogród" [ref=e108] [cursor=pointer]:
              - /url: /kategoria/dom-i-ogrod,19133
          - listitem [ref=e109]:
            - link "Lifestyle" [ref=e110] [cursor=pointer]:
              - /url: /kategoria/lifestyle,19245
          - listitem [ref=e111]:
            - link "Foto" [ref=e112] [cursor=pointer]:
              - /url: /foto
    - main [ref=e113]:
      - generic [ref=e119]:
        - img [ref=e121]
        - generic [ref=e123]: Twój koszyk jest pusty
        - paragraph [ref=e124]:
          - text: Produkty dodasz do koszyka bezpośrednio
          - text: lub łatwo przeniesiesz je tutaj z listy ulubionych.
        - link "Przeglądaj produkty" [ref=e125] [cursor=pointer]:
          - /url: /produkty
          - img [ref=e127]
          - text: Przeglądaj produkty
    - contentinfo [ref=e130]:
      - generic [ref=e131]:
        - heading "stopka" [level=2] [ref=e132]
        - list [ref=e135]:
          - listitem [ref=e136]:
            - img [ref=e138]
            - strong [ref=e141]: Bezpieczna płatność
          - listitem [ref=e142]:
            - img [ref=e144]
            - generic [ref=e146]:
              - strong [ref=e147]: Darmowa dostawa
              - text: od 199 zł
          - listitem [ref=e148]:
            - img [ref=e150]
            - generic [ref=e152]:
              - strong [ref=e153]: Darmowy odbiór
              - text: w ponad 2000 drogerii
          - listitem [ref=e154]:
            - img [ref=e156]
            - strong [ref=e159]: 14 dni na zwrot zakupów
        - separator [ref=e160]
        - generic [ref=e162]:
          - generic [ref=e163]:
            - generic [ref=e164]:
              - heading "Zapisz się na newsletter!" [level=3] [ref=e165]
              - paragraph [ref=e166]: Lubisz być na bieżąco? Kliknij w przycisk i zapisz się do newslettera.
              - button "Zapisz się na newsletter." [ref=e168] [cursor=pointer]:
                - generic [ref=e169]: Dołączam!
            - generic [ref=e170]:
              - generic [ref=e171]: "Znajdź nas również na:"
              - generic [ref=e172]:
                - link "Link do Instagram, otwiera się w nowej karcie." [ref=e173] [cursor=pointer]:
                  - /url: https://www.instagram.com/rossmannpl/?hl=pl
                  - img "Instagram" [ref=e174]
                - link "Link do Facebook, otwiera się w nowej karcie." [ref=e175] [cursor=pointer]:
                  - /url: https://www.facebook.com/RossmannPL
                  - img "Facebook" [ref=e176]
                - link "Link do TikTok, otwiera się w nowej karcie." [ref=e177] [cursor=pointer]:
                  - /url: https://www.tiktok.com/@rossmannpl
                  - img "TikTok" [ref=e178]
                - link "Link do YouTube, otwiera się w nowej karcie." [ref=e179] [cursor=pointer]:
                  - /url: https://www.youtube.com/channel/UCtB6kn-GfczS4eRBwaBHgwA
                  - img "YouTube" [ref=e180]
          - generic [ref=e182]:
            - generic [ref=e183]:
              - heading "Zakupy" [level=3] [ref=e185]
              - generic [ref=e187]:
                - link "Znajdź drogerię" [ref=e188] [cursor=pointer]:
                  - /url: /drogerie
                  - generic [ref=e189]: Znajdź drogerię
                - link "Karta podarunkowa" [ref=e190] [cursor=pointer]:
                  - /url: /karta-podarunkowa
                  - generic [ref=e191]: Karta podarunkowa
                - link "Czyściochowo" [ref=e192] [cursor=pointer]:
                  - /url: /czysciochowo
                  - generic [ref=e193]: Czyściochowo
                - link "Aplikacja mobilna Rossmann PL i Klub" [ref=e194] [cursor=pointer]:
                  - /url: /aplikacja-rossmann
                  - generic [ref=e195]:
                    - text: Aplikacja mobilna
                    - text: Rossmann PL i Klub
                - link "Drogeria internetowa" [ref=e196] [cursor=pointer]:
                  - /url: /drogeria-internetowa
                  - generic [ref=e197]: Drogeria internetowa
                - link "Marki" [ref=e198] [cursor=pointer]:
                  - /url: /marki
                  - generic [ref=e199]: Marki
            - generic [ref=e200]:
              - heading "Obsługa klienta" [level=3] [ref=e202]
              - generic [ref=e204]:
                - link "FAQ" [ref=e205] [cursor=pointer]:
                  - /url: /pomoc/faq
                  - generic [ref=e206]: FAQ
                - link "Pomoc" [ref=e207] [cursor=pointer]:
                  - /url: /pomoc/wszystkie-tematy
                  - generic [ref=e208]: Pomoc
                - link "Dostawa" [ref=e209] [cursor=pointer]:
                  - /url: /pomoc/wszystkie-tematy/dostawa
                  - generic [ref=e210]: Dostawa
                - link "Płatność" [ref=e211] [cursor=pointer]:
                  - /url: /pomoc/wszystkie-tematy/platnosci
                  - generic [ref=e212]: Płatność
                - link "Zwroty i reklamacje" [ref=e213] [cursor=pointer]:
                  - /url: /pomoc/wszystkie-tematy/zwroty-i-reklamacje
                  - generic [ref=e214]: Zwroty i reklamacje
                - link "Dostępność usług" [ref=e215] [cursor=pointer]:
                  - /url: /pomoc/wszystkie-tematy/dostepnosc-uslug
                  - generic [ref=e216]: Dostępność usług
                - link "Kontakt" [ref=e217] [cursor=pointer]:
                  - /url: /kontakt
                  - generic [ref=e218]: Kontakt
            - generic [ref=e219]:
              - heading "Rossmann" [level=3] [ref=e221]
              - generic [ref=e223]:
                - link "O firmie" [ref=e224] [cursor=pointer]:
                  - /url: /firma/pl
                  - generic [ref=e225]: O firmie
                - link "Kariera" [ref=e226] [cursor=pointer]:
                  - /url: https://kariera.rossmann.pl/
                  - generic [ref=e227]: Kariera
                - link "CSR" [ref=e228] [cursor=pointer]:
                  - /url: /firma/pl/csr
                  - generic [ref=e229]: CSR
                - link "Ekspansja" [ref=e230] [cursor=pointer]:
                  - /url: /firma/pl/ekspansja
                  - generic [ref=e231]: Ekspansja
                - link "Biuro prasowe" [ref=e232] [cursor=pointer]:
                  - /url: /firma/pl/biuro-prasowe
                  - generic [ref=e233]: Biuro prasowe
                - link "Złóż ofertę" [ref=e234] [cursor=pointer]:
                  - /url: https://portaldostawcy.rossmann.com.pl/OfferPortal/Form
                  - generic [ref=e235]: Złóż ofertę
                - link "Inspiracje" [ref=e236] [cursor=pointer]:
                  - /url: /inspiracje
                  - generic [ref=e237]: Inspiracje
            - generic [ref=e238]:
              - heading "Nasze oznaczenia" [level=3] [ref=e240]
              - generic [ref=e242]:
                - link "Nowe" [ref=e243] [cursor=pointer]:
                  - /url: /produkty?Statuses=premiere&Page=1&PageSize=96&SortOrder=newestFirst
                  - generic [ref=e244]: Nowe
                - link "Mega" [ref=e245] [cursor=pointer]:
                  - /url: /produkty?Statuses=mega
                  - generic [ref=e246]: Mega
                - link "Mam więcej" [ref=e247] [cursor=pointer]:
                  - /url: /mam-wiecej
                  - generic [ref=e248]: Mam więcej
                - link "Pomagamy jak umiemy" [ref=e249] [cursor=pointer]:
                  - /url: /pomagamy
                  - generic [ref=e250]: Pomagamy jak umiemy
            - generic [ref=e251]:
              - heading "Informacje prawne" [level=3] [ref=e253]
              - generic [ref=e255]:
                - link "Regulaminy" [ref=e256] [cursor=pointer]:
                  - /url: /pomoc/regulaminy
                  - generic [ref=e257]: Regulaminy
                - link "Polityka plików cookie" [ref=e258] [cursor=pointer]:
                  - /url: https://www.rossmann.pl/dokumenty/polityka-plikow-cookies.pdf
                  - generic [ref=e259]: Polityka plików cookie
                - link "Polityka prywatności" [ref=e260] [cursor=pointer]:
                  - /url: https://rossmann.pl/dokumenty/polityka-prywatnosci.pdf
                  - generic [ref=e261]: Polityka prywatności
                - link "Lista plików cookies" [ref=e262] [cursor=pointer]:
                  - /url: /wykorzystywane-pliki-cookies
                  - generic [ref=e263]: Lista plików cookies
                - link "Ustawienia plików cookies" [ref=e264] [cursor=pointer]:
                  - /url: "?cmpscreencustom"
                  - generic [ref=e265]: Ustawienia plików cookies
                - link "Punkt kontaktowy/Point of contact DSA" [ref=e266] [cursor=pointer]:
                  - /url: /pomoc/wszystkie-tematy/punkt-kontaktowy-uslug-cyfrowychpoint-of-contact-dsa
                  - generic [ref=e267]:
                    - text: Punkt kontaktowy/
                    - generic [ref=e268]:
                      - text: Point
                      - text: of contact DSA
        - separator [ref=e269]
        - generic [ref=e271]:
          - generic [ref=e272]:
            - heading "Przydatne informacje" [level=3] [ref=e273]
            - link "Jak złożyć zamówienie?" [ref=e274] [cursor=pointer]:
              - /url: /pomoc/wszystkie-tematy/zamowienia:zlozenie-zamowienia
              - generic [ref=e275]: Jak złożyć zamówienie?
            - link "Jakie są formy i koszty dostawy?" [ref=e276] [cursor=pointer]:
              - /url: /pomoc/wszystkie-tematy/dostawa
              - generic [ref=e277]: Jakie są formy i koszty dostawy?
            - link "Jak opłacić zamówienie?" [ref=e278] [cursor=pointer]:
              - /url: /pomoc/wszystkie-tematy/platnosci:rodzaje-i-sposoby-platnosci
              - generic [ref=e279]: Jak opłacić zamówienie?
            - link "Zobacz więcej" [ref=e280] [cursor=pointer]:
              - /url: /pomoc/wszystkie-tematy
              - generic [ref=e281]: Zobacz więcej
          - generic [ref=e283]:
            - generic [ref=e285]:
              - heading "Gazetka" [level=3] [ref=e286]
              - link "Otwórz najnowszą gazetkę Rossmann" [ref=e288] [cursor=pointer]:
                - /url: /gazetka/czerwiec-80159-gazetka
                - img "Najnowsza gazetka Rossmann" [ref=e289]
            - generic [ref=e291]:
              - strong [ref=e292]: nowe oferty pracy
              - heading "Dołącz do zespołu Rossmanna!" [level=3] [ref=e293]
              - img "Grupa trzech osób z podpisem - po pierwsze ludzie." [ref=e294]
              - link "Zobacz oferty pracy" [ref=e295] [cursor=pointer]:
                - /url: https://kariera.rossmann.pl
                - generic [ref=e296]: Zobacz oferty pracy
            - generic [ref=e298]:
              - heading "Zakupy stają się prostsze z aplikacją Rossmann PL" [level=3] [ref=e299]
              - generic [ref=e300]:
                - img "Kod QR do pobrania aplikacji mobilnej" [ref=e301]
                - generic [ref=e302]:
                  - link "Pobierz z Google Play" [ref=e303] [cursor=pointer]:
                    - /url: https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=pl.com.rossmann.centauros
                    - img "Pobierz z Google Play" [ref=e304]
                  - link "Pobierz w App Store" [ref=e305] [cursor=pointer]:
                    - /url: https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=791525539&mt=8
                    - img "Pobierz w App Store" [ref=e306]
                  - link "Odkrywaj w AppGallery" [ref=e307] [cursor=pointer]:
                    - /url: https://appgallery.cloud.huawei.com/ag/n/app/C101051005?channelId=EUPLBDD20200916RO&detailType=0
                    - img "Odkrywaj w AppGallery" [ref=e308]
        - generic [ref=e310]:
          - generic [ref=e311]:
            - generic [ref=e312]:
              - generic [ref=e313]:
                - text: Metody płatności
                - list [ref=e314]:
                  - listitem [ref=e315]:
                    - img "masterCard" [ref=e316]
                  - listitem [ref=e317]:
                    - img "Visa" [ref=e318]
                  - listitem [ref=e319]:
                    - img "Blik" [ref=e320]
                  - listitem [ref=e321]:
                    - img "Przelewy 24" [ref=e322]
                  - listitem [ref=e323]:
                    - img "Paypo" [ref=e324]
                  - listitem [ref=e325]:
                    - img "Payu" [ref=e326]
                  - listitem [ref=e327]:
                    - img "Google pay" [ref=e328]
                  - listitem [ref=e329]:
                    - img "Apple pay" [ref=e330]
              - generic [ref=e331]:
                - text: Nasi dostawcy
                - list [ref=e332]:
                  - listitem [ref=e333]:
                    - img "inpost" [ref=e334]
                  - listitem [ref=e335]:
                    - img "dpd" [ref=e336]
                  - listitem [ref=e337]:
                    - img "dhl" [ref=e338]
                  - listitem [ref=e339]:
                    - img "orlen" [ref=e340]
            - generic [ref=e341]:
              - text: "Dostępność:"
              - button "Powiększ widok strony." [ref=e342] [cursor=pointer]:
                - img [ref=e344]
          - link "Regulamin sklepu Rossmann.pl" [ref=e348] [cursor=pointer]:
            - /url: /pomoc/regulaminy
            - generic [ref=e349]: Regulamin sklepu Rossmann.pl
          - generic [ref=e350]: © 2018-2026 Rossmann SDP. Sp.z.o.o. Wszystkie prawa zastrzeżone
  - alert [ref=e351]
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
  22 |     await expect(loginPage.page).toHaveURL('/.*profil/');
  23 | 
  24 |     await homePage.header.openLiked();
  25 |     await expect(likedPage.likedHeader).toHaveText('Ulubione');
  26 | })
  27 | 
  28 | test('Open cart without products', async ({homePage, cartPage}) => {
  29 |     await homePage.header.openCart();
> 30 |     await expect(cartPage.emptyMessage).toHaveText('Twój koszyk jest pusty');
     |                                         ^ Error: expect(locator).toHaveText(expected) failed
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