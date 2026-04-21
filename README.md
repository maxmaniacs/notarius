# Нотариус online — сайт + Decap CMS

## Структура

```
notarius/
├── index.html        # сайт (React + Tailwind через CDN, без сборки)
├── content.json      # ВСЁ редактируемое содержимое
├── admin/
│   ├── index.html    # админка Decap CMS → /admin/
│   └── config.yml    # схема полей админки
├── netlify.toml      # настройки деплоя
└── README.md
```

## Как это работает

Сайт при загрузке делает `fetch("content.json")` и рендерит всё из него.
Админка `/admin/` редактирует `content.json` через Git (Netlify Identity + git-gateway) — каждое сохранение создаёт коммит, Netlify автоматически передеплоивает сайт.

## Локальный запуск

```bash
cd /home/user/notarius
python3 -m http.server 8080
```

Открыть: http://localhost:8080

### Локальное редактирование через админку

В `admin/config.yml` раскомментируйте строку `local_backend: true`, затем:

```bash
npx decap-server    # в одном терминале
python3 -m http.server 8080   # в другом
```

Открыть http://localhost:8080/admin/ — правки будут писаться прямо в `content.json`.

## Деплой (бесплатно, 10 минут)

1. **Создайте репозиторий на GitHub** и запушьте содержимое папки `notarius/`.
2. **Netlify** → «Add new site» → «Import from Git» → выберите репозиторий.
   Build command оставить пустым, publish directory: `.`.
3. После деплоя: **Site settings → Identity → Enable Identity**.
4. **Registration preferences** → выберите «Invite only» (чтобы в админку не мог залогиниться кто попало).
5. **Identity → Services → Git Gateway → Enable Git Gateway**.
6. **Identity → Invite users** → пригласите свой email. Получите письмо, перейдите по ссылке и задайте пароль.
7. Откройте `https://ваш-сайт.netlify.app/admin/` — залогиньтесь и редактируйте.

После изменения в `admin/config.yml` поле `site_url` / `display_url` замените на ваш реальный домен Netlify.

## Что можно менять через админку

Все тексты, цены, адрес, телефон, WhatsApp, часы работы, FAQ, тарифы, список услуг, бейджи — всё содержимое. Дизайн (цвета, шрифты, верстка) остаётся в `index.html`.

## Блог (на будущее)

Когда дойдёт — добавляется отдельная коллекция в `admin/config.yml` типа `folder: "posts"` с Markdown-файлами, а на сайт добавляется страница `/blog/`, которая читает список постов. Скажи — сделаем.

## Иконки

В полях «Иконка» указывается название из [lucide.dev/icons](https://lucide.dev/icons) — например `ShieldCheck`, `MapPin`, `Phone`, `Scale`, `Baby`, `Briefcase`.
