import express, { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";
import cors from 'cors'

//initialise the app with express
const app = express();
const prisma = new PrismaClient();
app.use(express.json());

// set up trusted origins with cors and use cors to verify and receive requests from trusted options only
const corsOptions = {
  // TODO add live url as CORS trusted origin here too
  origin: ["http://localhost:5173"]
}
app.use(cors(corsOptions))
//set up api home route
app.get("/api", async (req: Request, res: Response) => {
  // TODO remove testing
  const userCount = await prisma.user.count();
  res.json(
    userCount == 0
      ? "No users have been added yet."
      : "Some users have been added to the database."
  );
})

// Set the network port
const port = Number(process.env.PORT) || 8000;

app.listen(port, () =>{
  console.log(`The server is running at http://localhost:${port}`)
})
//! commented out the below solution for binding to all interfaces - not just localhost as I don't think this is required but keeping commented out incase I have issues in the future.
// app.listen(port, '0.0.0.0', () =>{
//   console.log(`The server is running at http://0.0.0.0:${port}`)
//   console.log(`Accessible from host at http://localhost:${port}`)
// })
