# Коты против РКН - Развёртывание

Этот документ содержит инструкции по развёртыванию сайта в различных средах.

## 🖥️ Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для продакшена
npm run build

# Превью сборки
npm run preview
```

## 🌐 Деплой варианты

### 1. Cloudflare Pages (рекомендуется)

#### Автоматический деплой через GitHub:
1. Пушните код в GitHub-репозиторий
2. Подключите репозиторий к Cloudflare Pages
3. Настройте:
   - Framework preset: `None`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: 18+

#### Ручной деплой через CLI:
```bash
# Аутентификация
npx wrangler login

# Деплой
npm run deploy
```

### 2. Netlify

```bash
# Установите Netlify CLI
npm install -g netlify-cli

# Логин
netlify login

# Деплой
netlify deploy --prod
```

### 3. Vercel

```bash
# Установите Vercel CLI
npm install -g vercel

# Деплой
vercel --prod
```

### 4. GitHub Pages

```bash
# Установите gh-pages
npm install -g gh-pages

# Соберите проект
npm run build

# Деплой в gh-pages ветку
gh-pages -d dist
```

## 🔧 Настройка домена

### Cloudflare Pages:
1. Перейдите в "Custom domains"
2. Добавьте ваш домен
3. Обновите DNS-записи

### Пример DNS-записей:
```
Type: CNAME
Name: koty-freedom
Target: your-project.pages.dev
Proxy status: Proxied
```

## 📊 Мониторинг

### Cloudflare Web Analytics
```html
<!-- Добавьте в index.html -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' 
        data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
```

### Google Analytics
```javascript
// Добавьте в main.js
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID');
```

## 🛡️ Безопасность

### Заголовки безопасности (Cloudflare)
```toml
[[headers]]
for = "/*"
[headers.values]
X-Frame-Options = "DENY"
X-Content-Type-Options = "nosniff"
Referrer-Policy = "strict-origin-when-cross-origin"
Permissions-Policy = "geolocation=(), microphone=(), camera=()"
```

### CSP (Content Security Policy)
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline'; 
               style-src 'self' 'unsafe-inline' fonts.googleapis.com; 
               font-src 'self' fonts.gstatic.com; 
               img-src 'self' data:;">
```

## 📈 Оптимизация производительности

### Cloudflare settings:
- **Auto Minify**: Enable for CSS, JS, HTML
- **Brotli**: Enable
- **Rocket Loader**: Disable (может конфликтовать с Vite)
- **Early Hints**: Enable

### Speed tests:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

## 🔑 Переменные окружения

Создайте `.env` файл:
```bash
# Аналитика
ANALYTICS_ID=your_analytics_id

# Контакты
CONTACT_EMAIL=contact@example.com

# Мониторинг
UPTIME_KUMA_URL=your_uptime_url
```

## 🔄 CI/CD

### GitHub Actions:
```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: anti-rkn-cats
          directory: dist
```

## 🐛 Отладка

### Локально:
```bash
# Запуск с детальным логированием
DEBUG=* npm run dev

# Анализ бандла
npm run build
npx vite-bundle-visualizer
```

### В продакшене:
- Проверьте консоль браузера
- Используйте Cloudflare Logs
- Мониторьте performance metrics

## 📞 Поддержка

По вопросам развёртывания:
- GitHub Issues
- Email: support@example.com
- Telegram: @kotofredon_support

## 🎯 Чек-лист перед деплоем

- [ ] Все переменные окружения настроены
- [ ] Аналитика подключена (опционально)
- [ ] Домен настроен
- [ ] HTTPS активен
- [ ] Service Worker работает
- [ ] Mobile friendly
- [ ] Alt-тексты для изображений
- [ ] Meta-теги настроены
- [ ] Sitemap создан
- [ ] Robots.txt настроен
- [ ] Performance тесты пройдены
- [ ] Security тесты пройдены