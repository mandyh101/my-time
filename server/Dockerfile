# Dockerfile for the server and prisma db migrations
FROM node:lts-alpine3.20

WORKDIR /app

# Install netcat for database connection testing
RUN apk add --no-cache netcat-openbsd

COPY package.json package-lock.json ./

RUN npm ci && npm install -g nodemon

COPY . .

EXPOSE 8000
# Database connection timing: Added wait logic to ensure MySQL is ready before running migrations
CMD ["sh", "-c", "until nc -z mysql_db 3306; do echo 'Waiting for MySQL...'; sleep 2; done; echo 'MySQL is ready!'; npm run db:deploy && npm run dev"]