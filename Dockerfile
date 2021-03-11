FROM node:12.18-slim

WORKDIR /app

COPY . .

RUN npm ci

WORKDIR /app/client

RUN npm ci

RUN npm run build

WORKDIR /app

USER node

ENV NODE_ENV production

ENV PORT 5100

EXPOSE 5100

CMD bin/www
