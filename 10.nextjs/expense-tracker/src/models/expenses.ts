import { Schema, model, Types, models, Model } from "mongoose";

type ExpensesForMongoose = ExpenseI<Types.ObjectId>;

const required = true;

const expenseSchema = new Schema<ExpensesForMongoose>(
  {
    amount: { type: Number, required },
    categoryId: { type: Schema.Types.ObjectId, ref: "Category", required },
    date: { type: Date, required },
    notes: { type: String },
    title: { type: String, required },
  },
  {
    timestamps: true,
  }
);

const expenseModel = (models["Expense"] ||
  model("Expense", expenseSchema)) as Model<ExpensesForMongoose>;
export default expenseModel;
