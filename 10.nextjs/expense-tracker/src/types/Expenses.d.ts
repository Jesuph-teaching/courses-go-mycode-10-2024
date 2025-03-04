declare interface BaseExpenseI<ID = string> {
  title: string; // Description of the expense
  amount: number; // Expense amount
  categoryId: ID; // e.g., "Food", "Transport" (ref to Category)
  date: Date; // Date of the expense
  notes?: string; // Additional notes
}
declare interface ExpenseI<ID = string> extends BaseExpenseI<ID> {
  _id: ID; // Unique identifier
  createdAt: Date; // Timestamp when created
  updatedAt: Date; // Timestamp when last updated
}
