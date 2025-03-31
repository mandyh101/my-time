import express from 'express';
import cors from 'cors'

const app = express();

const corsOptions = {
  // TODO add live url as CORS trusted origin here too
  origin: ["http://localhost:5173"]
}

app.use(cors(corsOptions))

app.get("/api", (req, res) => {
  res.json({"fruits" : ["apple", "orange", "banana"]})
})

app.listen(8080, () =>{
  console.log("server started on port 8080")
})