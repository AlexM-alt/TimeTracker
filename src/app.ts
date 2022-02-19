// App Tracker Time 

import express from "express";
import bodyParser from "body-parser";

import worksRoutes from "./routes/working.router";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from homepage");
});

app.use("/works", worksRoutes);



app.listen(PORT, () =>
  console.log(`Server runing on http://localhost:${PORT}`)
);
