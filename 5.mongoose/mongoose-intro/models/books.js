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
    /*  price: { type: Number, required: true }, */
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
/* bookSchema.virtual("taggedPrice").get(function () {
  return `${this.price}dzd`;
}); */
bookSchema.methods.addCopies = async function (cc) {
  this.copyCount += cc;
  if (this.copyCount < 0) this.copyCount = 0;
  await this.save();
};

const bookModel = model("Book", bookSchema, "books");
// export const mangaModel = model("Manga", mangaSchema, "books");

export default bookModel;
