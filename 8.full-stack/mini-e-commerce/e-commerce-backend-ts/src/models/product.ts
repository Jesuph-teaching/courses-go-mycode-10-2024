import { Document, Schema, Types, model } from "mongoose";
export interface ProductD
  extends Document<Types.ObjectId>,
    ProductI<Types.ObjectId> {}
const productSchema = new Schema<ProductD>(
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

const productModel = model<ProductD>("Product", productSchema);
export default productModel;
