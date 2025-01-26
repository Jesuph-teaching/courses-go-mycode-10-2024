import mongoose from "mongoose";
import express from "express";
import "dotenv/config";
/* import dotenv from'dotenv';
dotenv.config() */
// models
import bookModel from "./models/books.js";
import userModel from "./models/users.js";
// routers
import booksRouter from "./routers/books.js";
import usersRouter from "./routers/users.js";
mongoose.set("debug", true);
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use("/public", express.static("./public"));

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.get("/", async (req, res) => {
  const [users, books] = await Promise.all([
    userModel.find(),
    bookModel.find(),
  ]);
  res.locals.users = users;
  res.locals.books = books;
  res.render("home");
});

app.use("/books", booksRouter);
app.use("/users", usersRouter);
mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DB_NAME,
    auth: {
      username: process.env.MONGODB_USER,
      password: process.env.MONGODB_PASSWORD,
    },
  })
  .then(() => {
    console.log(`Db is connected in : ${process.env.MONGODB_DB_NAME}`);
    app.listen(port, () => {
      console.log(`server listening on ${port}`);
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
