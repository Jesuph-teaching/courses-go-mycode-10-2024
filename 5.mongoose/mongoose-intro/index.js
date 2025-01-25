import mongoose from "mongoose";
import express from "express";

/* import dotenv from'dotenv';
dotenv.config() */
import "dotenv/config";
import bookModel from "./models/books.js";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use("/public", express.static("./public"));

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.get("/", async (req, res) => {
  res.locals.books = await bookModel.find();
  res.render("home");
});
app.get("/books/add", async (req, res) => {
  res.render("add-books");
});
app.get("/books/:bookId", async (req, res) => {
  const bookId = req.params.bookId;
  res.locals = { bookId, book: await bookModel.findById(bookId) };

  res.render("edit-books");
});
app.post("/books/:bookId", async (req, res) => {
  const bookId = req.params.bookId;
  await bookModel.updateOne(
    { _id: bookId },
    {
      $set: req.body,
    }
  );

  res.redirect("/");
});

app.post("/books", async (req, res) => {
  try {
    const book = await bookModel.create(req.body);
    res.redirect("/");
  } catch (e) {
    res.send(e.message);
  }
});

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
