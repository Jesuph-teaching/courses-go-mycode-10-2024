import { myAPIConfig } from "../axiosConfigs";

export async function getOrders() {
  const response = await myAPIConfig.get<{ data: OrderI[] }>("/admin/orders");
  return response.data.data;
}
export async function editOrder({
  product,
  id,
}: {
  product: OrderI;
  id: string;
}) {
  const response = await myAPIConfig.put<{ data: OrderI }>(
    "/admin/orders/" + id,
    product
  );
  return response.data.data;
}
