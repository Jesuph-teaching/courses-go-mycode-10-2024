import { myAPIConfig } from "../axiosConfigs";

export async function createOrder(order: ShopOrderI) {
  const response = await myAPIConfig.post<{ data: OrderI }>("/orders", order);
  return response.data.data;
}
