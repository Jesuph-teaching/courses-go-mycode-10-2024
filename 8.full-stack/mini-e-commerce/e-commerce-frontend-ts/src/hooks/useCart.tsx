import { addToCart, removeFromCart } from "../app/slices/cart";
import { useAppDispatch, useAppSelector } from "./redux";

export default function useCart() {
  const { cart, total, cartCount } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();
  return {
    cart,
    total,
    cartCount,
    addToCart: (product: ProductI, quantity = 1) => {
      dispatch(addToCart({ product, quantity }));
    },
    removeFromCart: (productId: string, quantity = 1) => {
      dispatch(removeFromCart({ product: productId, quantity }));
    },
  };
}
