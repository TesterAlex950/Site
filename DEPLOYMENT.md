# Деплой на Vercel - Інструкції

## Підготовка до деплою

### 1. Встановлення залежностей

```bash
npm install
```

### 2. Налаштування змінних середовища

Створіть файл `.env.local` для локальної розробки:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

### 3. Перевірка збірки

```bash
npm run build
```

## Деплой на Vercel

### Автоматичний деплой (рекомендовано)

1. **Підключення GitHub репозиторію:**
   - Перейдіть на [vercel.com](https://vercel.com)
   - Увійдіть або створіть акаунт
   - Натисніть "New Project"
   - Імпортуйте ваш GitHub репозиторій

2. **Налаштування проекту:**
   - Vercel автоматично визначить Next.js проект
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Налаштування змінних середовища:**
   - Environment Variables:
     - `NEXT_PUBLIC_SITE_URL`: ваш домен Vercel
     - `NEXT_PUBLIC_GA_ID`: Google Analytics ID (опціонально)
     - `NEXT_PUBLIC_CONTACT_EMAIL`: ваш email

4. **Деплой:**
   - Натисніть "Deploy"
   - Vercel автоматично збудує та розгорне проект

### Ручний деплой

1. **Встановлення Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Увійдіть в Vercel:**
   ```bash
   vercel login
   ```

3. **Деплой:**
   ```bash
   vercel
   ```

4. **Продакшен деплой:**
   ```bash
   vercel --prod
   ```

## Налаштування домену

### Кастомний домен

1. **Додавання домену:**
   - Перейдіть в налаштування проекту на Vercel
   - Виберіть "Domains"
   - Додайте ваш домен

2. **Налаштування DNS:**
   - Додайте CNAME запис:
     - Name: `@` або `www`
     - Value: `cname.vercel-dns.com`

3. **SSL сертифікат:**
   - Vercel автоматично надає SSL сертифікати

### Піддомени

1. **Створення піддомену:**
   - Додайте піддомен в налаштуваннях Vercel
   - Наприклад: `uk.your-domain.com`

2. **Налаштування для інтернаціоналізації:**
   - Оновіть `src/lib/i18n.ts`
   - Додайте новий домен в конфігурацію

## CI/CD з GitHub Actions

### Налаштування секретів

1. **Отримання токенів Vercel:**
   - Перейдіть в налаштування акаунту Vercel
   - Створіть новий токен

2. **Додавання секретів в GitHub:**
   - Перейдіть в налаштування репозиторію
   - Виберіть "Secrets and variables" → "Actions"
   - Додайте секрети:
     - `VERCEL_TOKEN`
     - `VERCEL_ORG_ID`
     - `VERCEL_PROJECT_ID`

### Автоматичний деплой

- При кожному push в `main` або `master` гілку
- GitHub Actions автоматично запустить тести та деплой

## Моніторинг та аналітика

### Vercel Analytics

1. **Включення Analytics:**
   - Перейдіть в налаштування проекту
   - Виберіть "Analytics"
   - Включіть Web Analytics

2. **Налаштування в коді:**
   ```typescript
   import { Analytics } from '@vercel/analytics/react';

   // В _app.tsx
   <Analytics />
   ```

### Speed Insights

1. **Включення Speed Insights:**
   - Автоматично включено для всіх проектів
   - Переглядайте метрики в Vercel Dashboard

### Логи та помилки

1. **Перегляд логів:**
   - Vercel Dashboard → Functions
   - Переглядайте логи функцій

2. **Моніторинг помилок:**
   - Vercel автоматично відстежує помилки
   - Налаштуйте сповіщення

## Оптимізація продуктивності

### Зображення

1. **Використання Next.js Image:**
   ```typescript
   import Image from 'next/image';

   <Image
     src="/image.jpg"
     alt="Description"
     width={500}
     height={300}
     priority
   />
   ```

2. **Оптимізація форматів:**
   - Використовуйте WebP формат
   - Налаштуйте responsive images

### Кешування

1. **Статичні файли:**
   - Автоматично кешуються Vercel
   - Налаштування в `vercel.json`

2. **API роути:**
   - Використовуйте ISR для кешування
   - Налаштуйте revalidate

### Bundle Analysis

1. **Аналіз розміру бандла:**
   ```bash
   npm run build:analyze
   ```

2. **Оптимізація:**
   - Використовуйте dynamic imports
   - Розділяйте код на чанки

## Безпека

### Заголовки безпеки

- Автоматично налаштовані в `vercel.json`
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options

### Rate Limiting

- Налаштовано в `nginx.conf`
- API роути захищені від DDoS

### Environment Variables

- Не комітьте `.env` файли
- Використовуйте Vercel Environment Variables

## Troubleshooting

### Поширені проблеми

1. **Build помилки:**
   - Перевірте TypeScript помилки
   - Запустіть `npm run typecheck`

2. **Runtime помилки:**
   - Перевірте логи в Vercel Dashboard
   - Використовуйте error boundaries

3. **Performance проблеми:**
   - Аналізуйте Web Vitals
   - Оптимізуйте зображення та код

### Корисні команди

```bash
# Локальна розробка
npm run dev

# Збірка
npm run build

# Тестування
npm run test

# Лінтінг
npm run lint

# Форматування
npm run format

# TypeScript перевірка
npm run typecheck
```

## Підтримка

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)
