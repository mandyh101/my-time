# Dockerfile for the server and prisma db migrations
FROM node:lts-alpine3.20

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

CMD ["sh", "-c", "npm run db:deploy && npm run dev"]