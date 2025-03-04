import dbConnect from "@/lib/dbConnection";
import expenseModel from "@/models/expenses";
import { Types } from "mongoose";

export async function getExpenses(): Promise<ExpenseI<string>[]> {
  try {
    await dbConnect();
    const expenses = await expenseModel.find().sort({ date: -1 });
    return expenses.map((doc) => {
      const expense: ExpenseI<string | Types.ObjectId> = doc.toObject();
      expense._id = expense._id.toString();
      return expense as ExpenseI<string>;
    });
  } catch (error) {
    console.log(error);
    return [];
  }
}
