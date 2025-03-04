import { Schema, model, Types, models, Model } from "mongoose";

type CategoryForMongoose = CategoryI<Types.ObjectId>;

const required = true;

const categorySchema = new Schema<CategoryForMongoose>(
  {
    name: { type: String, required },
    type: { type: String, required, enum: ["income", "expense"] },
  },
  {
    timestamps: true,
  }
);

const categoryModel = (models["Category"] ||
  model("Category", categorySchema)) as Model<CategoryForMongoose>;
export default categoryModel;
