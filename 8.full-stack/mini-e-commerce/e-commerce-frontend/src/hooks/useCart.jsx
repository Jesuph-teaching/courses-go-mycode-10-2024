import { useContext } from "react";
import CartContext from "../contexts/cart";

export default function useCart() {
  const context = useContext(CartContext);
  if (context) {
    return context;
  } else throw new Error("Context for User is not available");
}
