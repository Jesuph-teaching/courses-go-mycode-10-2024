import dbConnect from "@/lib/dbConnection";
import incomeModel from "@/models/income";
import { Types } from "mongoose";

export async function getIncomes(): Promise<IncomeI<string>[]> {
  try {
    await dbConnect();
    const incomes = await incomeModel.find().sort({ date: -1 });
    return incomes.map((doc) => {
      const income: IncomeI<string | Types.ObjectId> = doc.toObject();
      income._id = income._id.toString();
      return income as IncomeI<string>;
    });
  } catch (error) {
    console.log(error);
    return [];
  }
}
