import mongoose, { Schema, model } from "mongoose";

const bookSchema = new Schema(
  {
    name: { type: String, maxLength: 120, required: true },
    author: { type: String, maxLength: 120, required: true },
    releaseYear: {
      type: Number,
      min: 1920,
      max: new Date().getFullYear(),
      required: true,
    },
    copyCount: { type: Number, default: 0 },
    edition: { type: Number, default: 1 },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
/* const mangaSchema = new Schema(
  {
    name: { type: String, maxLength: 180, required: true },
    author: { type: String, maxLength: 120, required: true },
    releaseYear: { type: Number, min: 1920, max: new Date().getFullYear() },
    category: { String, required: true },
  },
  {
    timestamps: true,
  }
);
 */
const bookModel = model("Book", bookSchema);
// export const mangaModel = model("Manga", mangaSchema, "books");

export default bookModel;
