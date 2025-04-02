# My Time
A personal time-tracking web application for freelance work that addresses the limitations of the Toggl free tier so I can track my time my way!

## Tech Stack

- **Frontend**: React, Vite, SASS/CSS (client)
- **Backend**: Express, Node.js (server)
- **Database**: MySQL

## Development
*commented out while testing*
<!-- ### Running docker
- Build and start all containers
`docker compose up --build`

- To run in detached mode (background)
`docker compose up -d --build`

- To stop all containers
`docker compose down` -->

### Running prisma migrations through Docker **(to test)**
- currently tetsing prisma and docker set up (https://www.prisma.io/docs/guides/docker)
- `docker compose -f docker-compose.mysql.yml up`
- `cd server`
- `npm run dev`
- `npx prisma migrate dev --name init`
- *next steps* after testing locally is to conatinerise...https://arc.net/l/quote/ioqyibqe
<!-- - Connect to the backend container
`docker exec -it mytime-server sh`

### Inside the container, run migrations
`npx prisma migrate dev --name init` -->

### Run client app
- `cd client`
- `npm install`
- `npm run dev`

### Run server app
- `cd server`
- `npm run dev` (Starts nodemon server for local development)
- url: *localhost:8080/api*