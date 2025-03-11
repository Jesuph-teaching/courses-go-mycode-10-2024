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
interface OrderI<ID> extends ShopOrderI {
  _id: ID;
  userId: ID;
  total: number;
  status: OrderStatusT;
  createdAt: string;
  updatedAt: string;
}
