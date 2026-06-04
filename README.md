# Автотесты для Rossmann.pl

Проект автоматизации тестирования основной функциональности интернет-магазина Rossmann (польская версия).



## Онлайн-отчет (CI/CD)
> 🚀 **Allure-отчет на GitHub Pages:**  
> [Смотреть результаты тестов](https://juefimova.github.io/Final-Project/)



## Стек технологий
* **Язык:** TypeScript
* **Фреймворк:** Playwright (Page Object Model + фикстуры)
* **Отчеты:** Allure Report
* **CI/CD:** GitHub Actions (ежедневный запуск, параллельно на 5 конфигурациях: Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari)



## Покрытие тестами
* Авторизация (`auth.spec.ts`)
* Поиск товаров (`search.spec.ts`)
* Корзина (`cart.spec.ts`)
* Избранное (`liked.spec.ts`)
* Навигация (`navigation.spec.ts`)



## Локальный запуск

### 1. Установка
```bash
git clone [https://github.com/juefimova/Final-Project.git](https://github.com/juefimova/Final-Project.git)
cd Final-Project
npm ci
npx playwright install --with-deps
