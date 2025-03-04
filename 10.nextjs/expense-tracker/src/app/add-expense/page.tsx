import { getCategories } from "@/actions/server/category";
import ExpenseForm from "@/components/ExpenseForm";
import React from "react";

export default async function AddExpense() {
  const categories = await getCategories("expense");
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm categories={categories} />
    </div>
  );
}
