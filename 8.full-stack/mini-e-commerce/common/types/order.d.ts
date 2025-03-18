interface ShopOrderI {
  cart: ProductCartI<string>[];
  delivery: {
    province: number;
    city: string;
    address: string;
    phone: string;
  };
}
type OrderStatusT =
  | "pending"
  | "confirmed"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "returned";
interface BaseOrderI<ID = string> extends ShopOrderI {
  userId: ID;
  total: number;
  status: OrderStatusT;
}
interface OrderI<ID = string> extends BaseOrderI<ID> {
  _id: ID;
  createdAt: string;
  updatedAt: string;
}
