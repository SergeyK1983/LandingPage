FROM node:18-alpine

WORKDIR /frontend

# COPY package*.json ./

COPY . .

RUN npm install
CMD ["npm", "run", "build"]

# && rm -fr node_modules

EXPOSE 5173

# CMD [ "serve", "-s", "build" ]