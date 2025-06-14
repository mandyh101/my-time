# My Time
A personal time-tracking web application that addresses the limitations of the Toggl free tier so I can track my time my way!

## Tech Stack

- **Frontend**: React/TS, Vite, SASS/CSS (client)
- **Backend**: Express, Node.js (server), Prisma as the ORM/database toolkit
- **Database**: MySQL
- **Infrastructure**: Docker to containerise the frontend and backend service, TS config across the stack.

## Local development can be run through docker
- Build and start all containers (first time build)
`docker compose -f docker-compose.yml up --build`

- If you've already built the Docker container:
`docker compose up`

- To run in detached mode (background)
`docker compose up -d --build`

- To stop all containers
`docker compose down` 

## Outside of docker - not recommended!
### Run client app
- `cd client`
- `npm install`
- `npm run dev`

### Run server app
- `cd server`
- `npm run dev` (Starts nodemon server for local development)
- url: *localhost:8000/api*