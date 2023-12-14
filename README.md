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

Перейти в директорию LandingPage/pgdata/ и удалить файлы .gitkeep из следующих директорий:
  
    pg_commit_ts/
    pg_dynshmem/
    pg_logical/mappings/
    pg_logical/snapshots/
    pg_notify/
    pg_replslot/
    pg_serial/
    pg_snapshots/
    pg_stat_tmp/
    pg_tblspc/
    pg_twophase/
    pg_wal/archive_status/

В директории LandingPage/Frontend/ выполнить:
    
    npm install
    npm run build

    docker build -t landing_frontend .

В директории LandingPage/ выполнить:

    docker build -t landing_backend .

В директории LandingPage/LandingPage/ создать файл .env.pgdb с содержимым:
    
    NAME='pgdb'
    USER='root'
    PASSWORD='root'
    HOST='pgdb'
    PORT='5432'

Перейти в директорию LandingPage/, выполнить команду:

    docker-compose up
