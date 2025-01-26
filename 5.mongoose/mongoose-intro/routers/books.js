import { Router } from "express";
import bookModel from "../models/books.js";
const booksRouter = Router();
booksRouter.get("/add", async (req, res) => {
  res.render("books/add-books");
});
booksRouter.get("/:bookId", async (req, res) => {
  const bookId = req.params.bookId;
  res.locals = { bookId, book: await bookModel.findById(bookId) };
  res.render("books/edit-books");
});
booksRouter.post("", async (req, res) => {
  try {
    const book = await bookModel.create(req.body);
    res.redirect("/");
  } catch (e) {
    res.send(e.message);
  }
});

booksRouter.post("/:bookId/add-copies", async (req, res) => {
  const bookId = req.params.bookId;
  const copyCount = Number(req.body.copies);
  const book = await bookModel.findById(bookId);
  if (!book) return res.status(404).send("book not found");
  await book.addCopies(copyCount);
  res.redirect("/");
});
booksRouter.post("/:bookId/delete", async (req, res) => {
  const bookId = req.params.bookId;
  await bookModel.deleteOne({ _id: bookId });
  res.redirect("/");
});
booksRouter.post("/:bookId", async (req, res) => {
  const bookId = req.params.bookId;
  await bookModel.updateOne(
    { _id: bookId },
    {
      $set: req.body,
    }
  );

  res.redirect("/");
});

export default booksRouter;
