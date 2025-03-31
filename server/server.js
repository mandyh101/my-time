import express from 'express';

const app = express();

app.get("/api", (req, res) => {
  res.json({"fruits" : ["apple", "orange", "banana"]})
})

app.listen(8080, () =>{
  console.log("server started on port 8080")
})