import { Schema, model, Types, models, Model } from "mongoose";

type IncomeForMongoose = IncomeI<Types.ObjectId>;

const required = true;

const incomeSchema = new Schema<IncomeForMongoose>(
  {
    amount: { type: Number, required },
    sourceId: { type: Schema.Types.ObjectId, ref: "Category", required },
    date: { type: Date, required },
    notes: { type: String },
  },
  {
    timestamps: true,
  }
);

const incomeModel = (models["Income"] ||
  model("Income", incomeSchema)) as Model<IncomeForMongoose>;
export default incomeModel;
