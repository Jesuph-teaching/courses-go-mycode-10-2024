import dbConnect from "@/lib/dbConnection";
import expenseModel from "@/models/expenses";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { amount, categoryId, date, title, notes }: BaseExpenseI =
    await req.json();
  await dbConnect();
  const category = await expenseModel.create({
    amount,
    categoryId,
    date,
    title,
    notes,
  });
  return new NextResponse(`expense ${category.title} is created successfully`, {
    status: 201,
  });
}
