import axiosConfig from "./axiosConfig";

export async function createExpense(expense: BaseExpenseI) {
  const response = await axiosConfig.post("/expenses", expense);
  return response.data;
}
