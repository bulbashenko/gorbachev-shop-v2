# Используем официальный образ Node.js
FROM node:18

# Установка зависимостей должна быть внутри контейнера
WORKDIR /app

# Копируем только package.json и package-lock.json
COPY package.json package-lock.json ./

# Установка зависимостей
RUN npm install --omit=dev

# Копируем остальной код
COPY . .

# Указываем порт и запуск приложения
EXPOSE 5000
CMD ["node", "app.js"]