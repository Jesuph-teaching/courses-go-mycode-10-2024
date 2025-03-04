import axiosConfig from "./axiosConfig";

export async function createCategory(category: BaseCategoryI) {
  const response = await axiosConfig.post("/category", category);
  return response.data;
}
