import { myAPIConfig } from "../axiosConfigs";

export async function deleteProduct(id: string) {
  const response = await myAPIConfig.delete<{ message: string }>(
    "/admin/products/" + id
  );
  return response.data.message;
}
export async function addProduct(product: BaseProductI) {
  const response = await myAPIConfig.post<{ data: ProductI }>(
    "/admin/products",
    product
  );
  return response.data.data;
}
export async function editProduct({
  product,
  id,
}: {
  product: BaseProductI;
  id: string;
}) {
  const response = await myAPIConfig.put<{ data: ProductI }>(
    "/admin/products/" + id,
    product
  );
  return response.data.data;
}
