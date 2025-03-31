import express from 'express';
import cors from 'cors'

//initialise the app with express
const app = express();
// set up trusted origins with cors and use cors to verify and receive requests from trusted options only
const corsOptions = {
  // TODO add live url as CORS trusted origin here too
  origin: ["http://localhost:5173"]
}
app.use(cors(corsOptions))
//set up api home route
app.get("/api", (req, res) => {
  // TODO remove testing
  res.json({"fruits" : ["apple", "orange", "banana"]})
})

//listen for server connections
app.listen(8080, () =>{
  console.log("server started on port 8080")
})