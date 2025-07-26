# Portfolio Website

Сучасний портфоліо сайт, створений з Next.js та Tailwind CSS.

## Технології

- **Next.js 15** - React фреймворк
- **TypeScript** - типізація
- **Tailwind CSS** - стилізація
- **Radix UI** - компоненти інтерфейсу
- **Lucide React** - іконки
- **React Hook Form** - форми
- **Zod** - валідація

## Локальна розробка

1. Клонуйте репозиторій:
```bash
git clone <your-repo-url>
cd studio-master
```

2. Встановіть залежності:
```bash
npm install
```

3. Запустіть сервер розробки:
```bash
npm run dev
```

4. Відкрийте [http://localhost:3000](http://localhost:3000) у браузері.

## Деплой на Vercel

### Автоматичний деплой

1. Підключіть ваш GitHub репозиторій до Vercel
2. Vercel автоматично визначить Next.js проект
3. Натисніть "Deploy"

### Ручний деплой

1. Встановіть Vercel CLI:
```bash
npm i -g vercel
```

2. Увійдіть в Vercel:
```bash
vercel login
```

3. Деплойте проект:
```bash
vercel
```

## Доступні скрипти

- `npm run dev` - запуск сервера розробки
- `npm run build` - збірка для продакшену
- `npm run start` - запуск продакшен сервера
- `npm run lint` - перевірка коду
- `npm run typecheck` - перевірка TypeScript

## Структура проекту

```
src/
├── components/          # React компоненти
│   ├── common/         # Загальні компоненти
│   ├── sections/       # Секції сторінки
│   └── ui/             # UI компоненти
├── hooks/              # React хуки
├── lib/                # Утиліти
└── pages/              # Next.js сторінки
```

## Налаштування

Проект налаштований для роботи з Vercel:
- `vercel.json` - конфігурація Vercel
- `next.config.ts` - конфігурація Next.js
- Оптимізовані зображення та статичні файли

## Ліцензія

MIT
