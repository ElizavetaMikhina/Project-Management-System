# Project Management System

Frontend для задания "Мини-версия системы управления проектами (Project Management Systems)".

## Установка

### Установка Docker

1. **macOS**: Скачайте и установите Docker Desktop с [официального сайта](https://www.docker.com/products/docker-desktop).
2. **Linux**: Выполните команды для установки Docker:
   ```bash
   sudo apt-get install -y docker-ce
   ```
3. **Windows**: Скачайте и установите Docker Desktop с [официального сайта](https://www.docker.com/products/docker-desktop).

Проверьте установку:

```bash
docker --version
```

## Запуск приложения

1. **Сборка и запуск**:

   ```bash
   docker-compose up --build
   ```

2. **Остановка**:
   ```bash
   docker-compose down
   ```

## Альтернативный запуск через Yarn

1. Установите зависимости:
   ```bash
   yarn install
   ```
2. Постройте и запустите:
   ```bash
   yarn build
   yarn start
   ```

Приложение будет доступно по адресу [http://localhost:5173](http://localhost:5173).

