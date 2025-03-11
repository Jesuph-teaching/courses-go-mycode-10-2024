import { Schema, model } from "mongoose";

const productSchema = new Schema<ProductI>(
  {
    name: { type: String, required: true },
    description: {
      type: String,
      required: true,
    },
    price: {
      current: { type: Number, required: true },
      original: { type: Number },
    },
    stock: { type: Number, default: 0 },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const productModel = model("Product", productSchema);
export default productModel;
