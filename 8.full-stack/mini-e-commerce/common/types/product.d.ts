interface BaseProductI {
  name: string;
  description: string;
  price: {
    current: number;
    original?: number;
  };
  stock: number;
  image?: string;
}
interface ProductI<ID = string> extends BaseProductI {
  _id: ID;
  createdAt: string;
  updatedAt: string;
}

interface ProductCartI<P = ProductI> {
  product: P;
  quantity: number;
}
