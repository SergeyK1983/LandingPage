FROM python:3.10-alpine

# запрещает создавать файлы кеш (pyc)
ENV PYTHONDONTWRITEBYTECODE 1
# запрещает буфферизировать сообщения
ENV PYTHONUNBUFFERED 1

WORKDIR /Backend

COPY LandingPage/ ./
COPY requirements.txt ./

RUN pip install -r requirements.txt
