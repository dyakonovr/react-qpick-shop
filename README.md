
# Online Shop "QPICK"

Конфигурация проекта (Frontend):
- **TypeScript**
- **React**
- **React Router Dom**
- **React Hook Form**
- **React Query**
- **Axios**
- **ShadCN UI**
- **Tailwind**
- **ESLint, Prettier**
- **Vite**

Конфигурация проекта (Backend):
- **NodeJS**
- **Express**
- **Sequelize**
- **JsonWebToken**

_Дополнительно:_ Конфигурация проекта (Admin Panel):
- **TypeScript**
- **React**
- **React Admin**
- **ESLint, Prettier**
- **Vite**


Для того чтобы запустить проект, необходимо:

1. Склонировать репозиторий
2. Создать базу данных в PostgreSQL, взять из проекта `backup.sql` и "восстановить" его в ней
3. При необходимости изменить парамтеры подключения к базе данных в файле `server/.env`
4. Выполнить команду `npm i` в корне проекта
5. Выполнить команду `npm run installation` (для установки зависимостей основных частей проекта) и после установки пакетов выполнить остановку путём нажатия CTRL+C
6. Выполнить команду `npm run app` в корне для запуска проекта

_Дополнительно:_ при необходимости импортируйте запросы в PostMan из соответсвующего json-файла