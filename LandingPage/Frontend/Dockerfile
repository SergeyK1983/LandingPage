FROM node:21-alpine as build

WORKDIR /frontend

COPY ./dist /frontend/dist
COPY ./nginx /frontend/nginx

FROM nginx:stable
# 1.24.0

COPY --from=build /frontend/dist /usr/share/nginx/html
COPY --from=build /frontend/nginx/default.conf /etc/nginx/conf.d/default.conf
