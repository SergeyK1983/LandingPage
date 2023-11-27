FROM python:3.10-alpine

WORKDIR /Backend

COPY LandingPage/ ./
COPY requirements.txt ./

RUN pip install -r requirements.txt

