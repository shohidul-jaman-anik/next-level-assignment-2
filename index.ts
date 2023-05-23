import cors from "cors";
import express, { Application } from "express";
import mongoose from "mongoose";
require("dotenv").config();
const app: Application = express();
const port = 5000;


// Internal Import
import booksRoute from "./src/app/modules/books/books.route";


app.use(cors());
app.use(express.json());

app.use("/", booksRoute);


//  Connect  database
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jcb8xg8.mongodb.net/`
  )
  .then(() => {
    console.log("Database connect successfully");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Database not connect successfully", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World assignment 2!");
});
