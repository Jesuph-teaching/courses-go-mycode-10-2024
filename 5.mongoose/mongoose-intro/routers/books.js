import { Router } from "express";
import bookModel from "../models/books.js";
import { memberModel, workerModel } from "../models/users.js";
import mongoose from "mongoose";
import rentHistoryModel from "../models/rent-history.js";
const booksRouter = Router();
booksRouter.get("/add", async (req, res) => {
  res.render("books/add-books");
});
booksRouter
  .route("/:bookId/rent")
  .get(async (req, res) => {
    const bookId = req.params.bookId;
    const [book, workers, members] = await Promise.all([
      bookModel.findById(bookId),
      workerModel.find(),
      memberModel.find(),
    ]);
    if (!book) {
      res.redirect("/?errorMessage=bookNotFound");
      return;
    }
    res.locals = { bookId, book, workers, members };
    res.render("books/rent-books");
  })
  .post(async (req, res) => {
    const bookId = req.params.bookId;
    const { memberId, workerId } = req.body;
    const session = await mongoose.startSession();
    try {
      session.startTransaction();

      const [book, worker, member] = await Promise.all([
        bookModel.findById(bookId),
        workerModel.findById(workerId),
        memberModel.findById(memberId),
      ]);
      if (!book) return res.redirect("/?errorMessage=book Not Found");
      if (!worker) return res.redirect("/?errorMessage=worker Not Found");
      if (!member) return res.redirect("/?errorMessage=member Not Found");

      const newHistory = await rentHistoryModel.create(
        [
          {
            bookId: book._id,
            workerId: worker._id,
            memberId: member._id,
            duration: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
          },
        ],
        {
          session,
        }
      );

      member.borrowedBooks.push(newHistory._id);
      worker.rentedBooks.push(newHistory._id);
      book.copyCount--;
      await Promise.all([
        worker.save({ session }),
        member.save({ session }),
        book.save({ session }),
      ]);
      console.log(" ✅ done");
    } catch (err) {
      console.log(err);
      session.abortTransaction();
    } finally {
      session.endSession();
    }
    res.redirect("/");
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
