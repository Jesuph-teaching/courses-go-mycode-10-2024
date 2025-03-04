interface BaseCategoryI {
  name: string; // e.g., "Entertainment", "Groceries"
  type: "expense" | "income"; // To differentiate
}
interface CategoryI<ID = string> extends BaseCategoryI {
  _id: ID; // Unique identifier
}
