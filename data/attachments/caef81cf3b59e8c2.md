# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Add product from product card and go to checkout unathourized
- Location: tests/cart.spec.ts:11:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('basket-go-to-checkout-button')

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
            - generic [ref=e47]: Pobierz Apkę!
          - link "Profil" [ref=e49] [cursor=pointer]:
            - /url: /profil
            - img [ref=e50]
          - link "Ulubione" [ref=e54] [cursor=pointer]:
            - /url: /profil/ulubione
            - img [ref=e55]
          - link "Koszyk" [ref=e58] [cursor=pointer]:
            - /url: /zamowienie/koszyk
            - img [ref=e59]
    - generic [ref=e67]:
      - generic [ref=e68]:
        - list [ref=e69]:
          - listitem [ref=e70]:
            - link "Otwórz aktualne promocje" [ref=e71] [cursor=pointer]:
              - /url: /promocje
              - text: PROMOCJE
          - listitem [ref=e72]:
            - link "Otwórz aktualną gazetkę promocyjną" [ref=e73] [cursor=pointer]:
              - /url: /gazetka/czerwiec-80159-gazetka
              - text: GAZETKA
        - generic [ref=e74]:
          - generic [ref=e75]:
            - link "☀️ PORADNIK SPF" [ref=e76] [cursor=pointer]:
              - /url: https://www.rossmann.pl/ochrona-przeciwsloneczna
            - link "🏖️ NA LATO" [ref=e77] [cursor=pointer]:
              - /url: https://www.rossmann.pl/kategoria/kolekcje-limitowane/na-lato,20956
            - link "✨STREFA K-BEAUTY" [ref=e78] [cursor=pointer]:
              - /url: https://www.rossmann.pl/koreanskie-kosmetyki
          - generic [ref=e79]:
            - link "Przejdź do zakładki MEGA!" [ref=e80] [cursor=pointer]:
              - /url: https://www.rossmann.pl/produkty?Discounts=mega
              - text: MEGA!
            - link "Przejdź do zakładki MAM WIĘCEJ" [ref=e81] [cursor=pointer]:
              - /url: https://www.rossmann.pl/produkty?Statuses=haveMore
              - text: MAM WIĘCEJ
            - link "Przejdź do zakładki NOWE" [ref=e82] [cursor=pointer]:
              - /url: https://www.rossmann.pl/produkty?Order=newestFirst&Statuses=premiere
              - text: NOWE
            - link "Przejdź do zakładki TYLKO U NAS" [ref=e83] [cursor=pointer]:
              - /url: https://www.rossmann.pl/produkty?Statuses=rossmann
              - text: TYLKO U NAS
      - navigation [ref=e85]:
        - list [ref=e86]:
          - listitem [ref=e87]:
            - link "Wszystkie kategorie" [ref=e88] [cursor=pointer]:
              - /url: /kategorie
              - img [ref=e89]
              - text: Wszystkie kategorie
          - listitem [ref=e94]:
            - link "Makijaż i paznokcie" [ref=e95] [cursor=pointer]:
              - /url: /kategoria/makijaz-i-paznokcie,12000
          - listitem [ref=e96]:
            - link "Pielęgnacja i higiena" [ref=e97] [cursor=pointer]:
              - /url: /kategoria/pielegnacja-i-higiena,12001
          - listitem [ref=e98]:
            - link "Włosy" [ref=e99] [cursor=pointer]:
              - /url: /kategoria/wlosy,13174
          - listitem [ref=e100]:
            - link "Mężczyzna" [ref=e101] [cursor=pointer]:
              - /url: /kategoria/mezczyzna,13224
          - listitem [ref=e102]:
            - link "Perfumy" [ref=e103] [cursor=pointer]:
              - /url: /kategoria/perfumy,13264
          - listitem [ref=e104]:
            - link "Dziecko" [ref=e105] [cursor=pointer]:
              - /url: /kategoria/dziecko,13282
          - listitem [ref=e106]:
            - link "Żywność" [ref=e107] [cursor=pointer]:
              - /url: /kategoria/zywnosc,14075
          - listitem [ref=e108]:
            - link "Zdrowie" [ref=e109] [cursor=pointer]:
              - /url: /kategoria/zdrowie,19065
          - listitem [ref=e110]:
            - link "Zwierzęta" [ref=e111] [cursor=pointer]:
              - /url: /kategoria/zwierzeta,19118
          - listitem [ref=e112]:
            - link "Dom i ogród" [ref=e113] [cursor=pointer]:
              - /url: /kategoria/dom-i-ogrod,19133
          - listitem [ref=e114]:
            - link "Lifestyle" [ref=e115] [cursor=pointer]:
              - /url: /kategoria/lifestyle,19245
          - listitem [ref=e116]:
            - link "Foto" [ref=e117] [cursor=pointer]:
              - /url: /foto
    - main [ref=e118]:
      - generic [ref=e124]:
        - img [ref=e126]
        - generic [ref=e128]: Twój koszyk jest pusty
        - paragraph [ref=e129]:
          - text: Produkty dodasz do koszyka bezpośrednio
          - text: lub łatwo przeniesiesz je tutaj z listy ulubionych.
        - link "Przeglądaj produkty" [ref=e130] [cursor=pointer]:
          - /url: /produkty
          - img [ref=e132]
          - text: Przeglądaj produkty
    - contentinfo [ref=e135]:
      - generic [ref=e136]:
        - heading "stopka" [level=2] [ref=e137]
        - list [ref=e140]:
          - listitem [ref=e141]:
            - img [ref=e143]
            - strong [ref=e146]: Bezpieczna płatność
          - listitem [ref=e147]:
            - img [ref=e149]
            - generic [ref=e151]:
              - strong [ref=e152]: Darmowa dostawa
              - text: od 199 zł
          - listitem [ref=e153]:
            - img [ref=e155]
            - generic [ref=e157]:
              - strong [ref=e158]: Darmowy odbiór
              - text: w ponad 2000 drogerii
          - listitem [ref=e159]:
            - img [ref=e161]
            - strong [ref=e164]: 14 dni na zwrot zakupów
        - separator [ref=e165]
        - generic [ref=e167]:
          - generic [ref=e168]:
            - generic [ref=e169]:
              - heading "Zapisz się na newsletter!" [level=3] [ref=e170]
              - paragraph [ref=e171]: Lubisz być na bieżąco? Kliknij w przycisk i zapisz się do newslettera.
              - button "Zapisz się na newsletter." [ref=e173] [cursor=pointer]:
                - generic [ref=e174]: Dołączam!
            - generic [ref=e175]:
              - generic [ref=e176]: "Znajdź nas również na:"
              - generic [ref=e177]:
                - link "Link do Instagram, otwiera się w nowej karcie." [ref=e178] [cursor=pointer]:
                  - /url: https://www.instagram.com/rossmannpl/?hl=pl
                  - img "Instagram" [ref=e179]
                - link "Link do Facebook, otwiera się w nowej karcie." [ref=e180] [cursor=pointer]:
                  - /url: https://www.facebook.com/RossmannPL
                  - img "Facebook" [ref=e181]
                - link "Link do TikTok, otwiera się w nowej karcie." [ref=e182] [cursor=pointer]:
                  - /url: https://www.tiktok.com/@rossmannpl
                  - img "TikTok" [ref=e183]
                - link "Link do YouTube, otwiera się w nowej karcie." [ref=e184] [cursor=pointer]:
                  - /url: https://www.youtube.com/channel/UCtB6kn-GfczS4eRBwaBHgwA
                  - img "YouTube" [ref=e185]
          - generic [ref=e187]:
            - generic [ref=e188]:
              - heading "Zakupy" [level=3] [ref=e190]
              - generic [ref=e192]:
                - link "Znajdź drogerię" [ref=e193] [cursor=pointer]:
                  - /url: /drogerie
                  - generic [ref=e194]: Znajdź drogerię
                - link "Karta podarunkowa" [ref=e195] [cursor=pointer]:
                  - /url: /karta-podarunkowa
                  - generic [ref=e196]: Karta podarunkowa
                - link "Czyściochowo" [ref=e197] [cursor=pointer]:
                  - /url: /czysciochowo
                  - generic [ref=e198]: Czyściochowo
                - link "Aplikacja mobilna Rossmann PL i Klub" [ref=e199] [cursor=pointer]:
                  - /url: /aplikacja-rossmann
                  - generic [ref=e200]:
                    - text: Aplikacja mobilna
                    - text: Rossmann PL i Klub
                - link "Drogeria internetowa" [ref=e201] [cursor=pointer]:
                  - /url: /drogeria-internetowa
                  - generic [ref=e202]: Drogeria internetowa
                - link "Marki" [ref=e203] [cursor=pointer]:
                  - /url: /marki
                  - generic [ref=e204]: Marki
            - generic [ref=e205]:
              - heading "Obsługa klienta" [level=3] [ref=e207]
              - generic [ref=e209]:
                - link "FAQ" [ref=e210] [cursor=pointer]:
                  - /url: /pomoc/faq
                  - generic [ref=e211]: FAQ
                - link "Pomoc" [ref=e212] [cursor=pointer]:
                  - /url: /pomoc/wszystkie-tematy
                  - generic [ref=e213]: Pomoc
                - link "Dostawa" [ref=e214] [cursor=pointer]:
                  - /url: /pomoc/wszystkie-tematy/dostawa
                  - generic [ref=e215]: Dostawa
                - link "Płatność" [ref=e216] [cursor=pointer]:
                  - /url: /pomoc/wszystkie-tematy/platnosci
                  - generic [ref=e217]: Płatność
                - link "Zwroty i reklamacje" [ref=e218] [cursor=pointer]:
                  - /url: /pomoc/wszystkie-tematy/zwroty-i-reklamacje
                  - generic [ref=e219]: Zwroty i reklamacje
                - link "Dostępność usług" [ref=e220] [cursor=pointer]:
                  - /url: /pomoc/wszystkie-tematy/dostepnosc-uslug
                  - generic [ref=e221]: Dostępność usług
                - link "Kontakt" [ref=e222] [cursor=pointer]:
                  - /url: /kontakt
                  - generic [ref=e223]: Kontakt
            - generic [ref=e224]:
              - heading "Rossmann" [level=3] [ref=e226]
              - generic [ref=e228]:
                - link "O firmie" [ref=e229] [cursor=pointer]:
                  - /url: /firma/pl
                  - generic [ref=e230]: O firmie
                - link "Kariera" [ref=e231] [cursor=pointer]:
                  - /url: https://kariera.rossmann.pl/
                  - generic [ref=e232]: Kariera
                - link "CSR" [ref=e233] [cursor=pointer]:
                  - /url: /firma/pl/csr
                  - generic [ref=e234]: CSR
                - link "Ekspansja" [ref=e235] [cursor=pointer]:
                  - /url: /firma/pl/ekspansja
                  - generic [ref=e236]: Ekspansja
                - link "Biuro prasowe" [ref=e237] [cursor=pointer]:
                  - /url: /firma/pl/biuro-prasowe
                  - generic [ref=e238]: Biuro prasowe
                - link "Złóż ofertę" [ref=e239] [cursor=pointer]:
                  - /url: https://portaldostawcy.rossmann.com.pl/OfferPortal/Form
                  - generic [ref=e240]: Złóż ofertę
                - link "Inspiracje" [ref=e241] [cursor=pointer]:
                  - /url: /inspiracje
                  - generic [ref=e242]: Inspiracje
            - generic [ref=e243]:
              - heading "Nasze oznaczenia" [level=3] [ref=e245]
              - generic [ref=e247]:
                - link "Nowe" [ref=e248] [cursor=pointer]:
                  - /url: /produkty?Statuses=premiere&Page=1&PageSize=96&SortOrder=newestFirst
                  - generic [ref=e249]: Nowe
                - link "Mega" [ref=e250] [cursor=pointer]:
                  - /url: /produkty?Statuses=mega
                  - generic [ref=e251]: Mega
                - link "Mam więcej" [ref=e252] [cursor=pointer]:
                  - /url: /mam-wiecej
                  - generic [ref=e253]: Mam więcej
                - link "Pomagamy jak umiemy" [ref=e254] [cursor=pointer]:
                  - /url: /pomagamy
                  - generic [ref=e255]: Pomagamy jak umiemy
            - generic [ref=e256]:
              - heading "Informacje prawne" [level=3] [ref=e258]
              - generic [ref=e260]:
                - link "Regulaminy" [ref=e261] [cursor=pointer]:
                  - /url: /pomoc/regulaminy
                  - generic [ref=e262]: Regulaminy
                - link "Polityka plików cookie" [ref=e263] [cursor=pointer]:
                  - /url: https://www.rossmann.pl/dokumenty/polityka-plikow-cookies.pdf
                  - generic [ref=e264]: Polityka plików cookie
                - link "Polityka prywatności" [ref=e265] [cursor=pointer]:
                  - /url: https://rossmann.pl/dokumenty/polityka-prywatnosci.pdf
                  - generic [ref=e266]: Polityka prywatności
                - link "Lista plików cookies" [ref=e267] [cursor=pointer]:
                  - /url: /wykorzystywane-pliki-cookies
                  - generic [ref=e268]: Lista plików cookies
                - link "Ustawienia plików cookies" [ref=e269] [cursor=pointer]:
                  - /url: "?cmpscreencustom"
                  - generic [ref=e270]: Ustawienia plików cookies
                - link "Punkt kontaktowy/Point of contact DSA" [ref=e271] [cursor=pointer]:
                  - /url: /pomoc/wszystkie-tematy/punkt-kontaktowy-uslug-cyfrowychpoint-of-contact-dsa
                  - generic [ref=e272]:
                    - text: Punkt kontaktowy/
                    - generic [ref=e273]:
                      - text: Point
                      - text: of contact DSA
        - separator [ref=e274]
        - generic [ref=e276]:
          - generic [ref=e277]:
            - heading "Przydatne informacje" [level=3] [ref=e278]
            - link "Jak złożyć zamówienie?" [ref=e279] [cursor=pointer]:
              - /url: /pomoc/wszystkie-tematy/zamowienia:zlozenie-zamowienia
              - generic [ref=e280]: Jak złożyć zamówienie?
            - link "Jakie są formy i koszty dostawy?" [ref=e281] [cursor=pointer]:
              - /url: /pomoc/wszystkie-tematy/dostawa
              - generic [ref=e282]: Jakie są formy i koszty dostawy?
            - link "Jak opłacić zamówienie?" [ref=e283] [cursor=pointer]:
              - /url: /pomoc/wszystkie-tematy/platnosci:rodzaje-i-sposoby-platnosci
              - generic [ref=e284]: Jak opłacić zamówienie?
            - link "Zobacz więcej" [ref=e285] [cursor=pointer]:
              - /url: /pomoc/wszystkie-tematy
              - generic [ref=e286]: Zobacz więcej
          - generic [ref=e288]:
            - generic [ref=e290]:
              - heading "Gazetka" [level=3] [ref=e291]
              - link "Otwórz najnowszą gazetkę Rossmann" [ref=e293] [cursor=pointer]:
                - /url: /gazetka/czerwiec-80159-gazetka
                - img "Najnowsza gazetka Rossmann" [ref=e294]
            - generic [ref=e296]:
              - strong [ref=e297]: nowe oferty pracy
              - heading "Dołącz do zespołu Rossmanna!" [level=3] [ref=e298]
              - img "Grupa trzech osób z podpisem - po pierwsze ludzie." [ref=e299]
              - link "Zobacz oferty pracy" [ref=e300] [cursor=pointer]:
                - /url: https://kariera.rossmann.pl
                - generic [ref=e301]: Zobacz oferty pracy
            - generic [ref=e303]:
              - heading "Zakupy stają się prostsze z aplikacją Rossmann PL" [level=3] [ref=e304]
              - generic [ref=e305]:
                - img "Kod QR do pobrania aplikacji mobilnej" [ref=e306]
                - generic [ref=e307]:
                  - link "Pobierz z Google Play" [ref=e308] [cursor=pointer]:
                    - /url: https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=pl.com.rossmann.centauros
                    - img "Pobierz z Google Play" [ref=e309]
                  - link "Pobierz w App Store" [ref=e310] [cursor=pointer]:
                    - /url: https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=791525539&mt=8
                    - img "Pobierz w App Store" [ref=e311]
                  - link "Odkrywaj w AppGallery" [ref=e312] [cursor=pointer]:
                    - /url: https://appgallery.cloud.huawei.com/ag/n/app/C101051005?channelId=EUPLBDD20200916RO&detailType=0
                    - img "Odkrywaj w AppGallery" [ref=e313]
        - generic [ref=e315]:
          - generic [ref=e316]:
            - generic [ref=e317]:
              - generic [ref=e318]:
                - text: Metody płatności
                - list [ref=e319]:
                  - listitem [ref=e320]:
                    - img "masterCard" [ref=e321]
                  - listitem [ref=e322]:
                    - img "Visa" [ref=e323]
                  - listitem [ref=e324]:
                    - img "Blik" [ref=e325]
                  - listitem [ref=e326]:
                    - img "Przelewy 24" [ref=e327]
                  - listitem [ref=e328]:
                    - img "Paypo" [ref=e329]
                  - listitem [ref=e330]:
                    - img "Payu" [ref=e331]
                  - listitem [ref=e332]:
                    - img "Google pay" [ref=e333]
                  - listitem [ref=e334]:
                    - img "Apple pay" [ref=e335]
              - generic [ref=e336]:
                - text: Nasi dostawcy
                - list [ref=e337]:
                  - listitem [ref=e338]:
                    - img "inpost" [ref=e339]
                  - listitem [ref=e340]:
                    - img "dpd" [ref=e341]
                  - listitem [ref=e342]:
                    - img "dhl" [ref=e343]
                  - listitem [ref=e344]:
                    - img "orlen" [ref=e345]
            - generic [ref=e346]:
              - text: "Dostępność:"
              - button "Powiększ widok strony." [ref=e347] [cursor=pointer]:
                - img [ref=e349]
          - link "Regulamin sklepu Rossmann.pl" [ref=e355] [cursor=pointer]:
            - /url: /pomoc/regulaminy
            - generic [ref=e356]: Regulamin sklepu Rossmann.pl
          - generic [ref=e357]: © 2018-2026 Rossmann SDP. Sp.z.o.o. Wszystkie prawa zastrzeżone
  - alert [ref=e358]
```

# Test source

```ts
  1  | import {Page, Locator} from "@playwright/test";
  2  | 
  3  | export class CartPage{
  4  |     readonly page: Page;
  5  |     readonly emptyMessage: Locator;
  6  |     readonly checkoutButton: Locator;
  7  |     readonly minusButton: Locator;
  8  |     readonly plusButton: Locator;
  9  |     readonly productQuantity: Locator;
  10 |     readonly productContainer: Locator;
  11 | 
  12 |     constructor(page: Page){
  13 |         this.page = page;
  14 |         this.emptyMessage = page.getByTestId('empty-basket-header');
  15 |         this.checkoutButton = page.getByTestId('basket-go-to-checkout-button');
  16 |         this.minusButton = page.getByTestId('product-decrease-quantity-button');
  17 |         this.plusButton = page.getByTestId('product-increase-quantity-button');
  18 |         this.productQuantity = page.getByTestId('product-quantity-input');
  19 |         this.productContainer = page.getByTestId('product-container');
  20 |     }
  21 | 
  22 | 
  23 |     async goToCheckout(): Promise<void> {
> 24 |         await this.checkoutButton.click();
     |                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  25 |     }
  26 | 
  27 |     async increaseQuantity(): Promise<void> {
  28 |         await this.plusButton.click();
  29 |     }
  30 | 
  31 |     async decreaseQuantity(): Promise<void> {
  32 |         await this.minusButton.click();
  33 |     }
  34 | }
```