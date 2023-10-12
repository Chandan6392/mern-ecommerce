import expres from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

const app = expres();
dotenv.config();

const dbURI = process.env.CONNECTION_STRING || "mongodb://127.0.0.1:27017/";
const port = process.env.PORT || 5000;

// connect to database
connectDb(dbURI);

app.get("/", (req, res) => {
  res.send("hello word");
});

app.listen(port, () => {
  console.log(`app is listening on http://localhost:8000`);
});
