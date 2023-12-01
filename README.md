## Одностраничный сайт (лендинг) с чат-ботом.
Мегахакатон

Заказчик: Дезориентация (https://dezorientaciya.ru)
___

Python 3.10

Django 4.2

    superuser:
    username=admin
    password=admin

PostgreSQL 15.4

    POSTGRES_PASSWORD=root
    POSTGRES_USER=root
    POSTGRES_DB=pgdb
    ports:
      - "5438:5432"

Docker:
- node:21-alpine
  - nginx:stable
- python:3.10-alpine
- postgres:15.4-alpine
___
### Развертывание после клонирования:

