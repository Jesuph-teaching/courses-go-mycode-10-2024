declare interface IncomeI<ID = string> {
  _id: ID;
  sourceId: ID; // e.g., "Salary", "Freelancing" (ref to Category)
  amount: number;
  date: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}
