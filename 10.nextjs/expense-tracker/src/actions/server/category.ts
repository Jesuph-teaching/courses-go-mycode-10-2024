import dbConnect from "@/lib/dbConnection";
import categoryModel from "@/models/category";
import { Types } from "mongoose";

export async function getCategories(
  categoryType?: BaseCategoryI["type"]
): Promise<CategoryI<string>[]> {
  try {
    await dbConnect();
    const categories = await categoryModel
      .find(categoryType ? { type: categoryType } : {})
      .sort({ date: -1 });
    return categories.map((doc) => {
      const category: CategoryI<string | Types.ObjectId> = doc.toObject();
      category._id = category._id.toString();
      return category as CategoryI<string>;
    });
  } catch (error) {
    console.log(error);
    return [];
  }
}
