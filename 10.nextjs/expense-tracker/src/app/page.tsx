// import Counter from "@/components/Counter";
import { getCategories } from "@/actions/server/category";
import { getExpenses } from "@/actions/server/expenses";
import { getIncomes } from "@/actions/server/income";
import Link from "next/link";

export default async function Home() {
  const [expenses, categories, incomes] = await Promise.all([
    getExpenses(),
    getCategories(),
    getIncomes(),
  ]);
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Expenses</h1>
        <Link className="btn" href="/add-expense">
          {" "}
          Add Expense
        </Link>
      </div>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id.toString()}>{expense.title}</li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Categories</h1>
        <Link className="btn" href="/add-category">
          {" "}
          Add category
        </Link>
      </div>
      <ul>
        {categories.map((category) => (
          <li key={category._id.toString()}>
            {category.name} : {category.type}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">incomes</h1>
        <Link className="btn" href="/add-income">
          {" "}
          Add income
        </Link>
      </div>
      <ul>
        {incomes.map((income) => (
          <li key={income._id.toString()}>{income.amount}</li>
        ))}
      </ul>
    </div>
  );
}
