# ДЗ 7.2. Знакомство с платформой Node.js

Настройка VS Code для разработки на Node.js.

- npm-пакет (`package.json`), `.gitignore` с учётом файлов VS Code.
- Рекомендуемые расширения: GitLens, Prettier, ESLint, Beautify (`.vscode/extensions.json`).
- ESLint (`eslint.config.mjs`) — проверка и автоисправление при сохранении.
- Prettier (`.prettierrc`) — форматирование при сохранении (`.vscode/settings.json`).
- Дебагер Node.js — `.vscode/launch.json`, конфигурация **Launch index.js**.

```bash
npm install
npm run lint     # проверка ESLint
npm run format   # форматирование Prettier
npm start        # запуск index.js
```

Отладка: `F5` в VS Code — выполнение остановится на строке `debugger`.

<img width="3072" height="1666" alt="image" src="https://github.com/user-attachments/assets/cec80392-c10f-48b7-afda-cd68add95987" />

