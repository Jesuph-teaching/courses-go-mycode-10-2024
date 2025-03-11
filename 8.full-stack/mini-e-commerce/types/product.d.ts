interface ProductI {
  _id: string;
  name: string;
  description: string;
  price: {
    current: number;
    original?: number;
  };
  stock: number;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

interface ProductCartI<P = ProductI> {
  product: P;
  quantity: number;
}
