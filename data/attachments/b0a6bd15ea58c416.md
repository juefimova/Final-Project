# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.ts >> Login negative test for right email, wrong password
- Location: tests/auth.spec.ts:34:9

# Error details

```
TimeoutError: locator.waitFor: Timeout 7000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Zgoda na wszystkie' }) to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import {Page, Locator} from "@playwright/test";
  2  | 
  3  | export class CookieBanner {
  4  |     readonly page: Page;
  5  |     readonly acceptButton: Locator;
  6  | 
  7  |     constructor(page: Page) {
  8  |         this.page = page;
  9  |         this.acceptButton = page.getByRole('button', {name: 'Zgoda na wszystkie'});
  10 |     }
  11 | 
  12 |     async acceptCookies(): Promise<void> {
> 13 |         await this.acceptButton.waitFor({ state: 'visible', timeout: 7000 });
     |                                 ^ TimeoutError: locator.waitFor: Timeout 7000ms exceeded.
  14 |         await this.acceptButton.click();
  15 | 
  16 |     }
  17 | }
```