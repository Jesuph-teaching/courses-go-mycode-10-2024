import { createSlice } from "@reduxjs/toolkit";
const savedInitialCart: ProductCartI[] =
  JSON.parse(localStorage.getItem("cart") || "null") || [];
function calculateInitial(cart: ProductCartI[]) {
  if (cart.length > 0) {
    const cartCount = cart.reduce((acc, elm) => {
      return acc + elm.quantity;
    }, 0);
    const total = cart.reduce((acc, elm) => {
      return acc + elm.quantity * elm.product.price.current;
    }, 0);
    return {
      cart,
      cartCount,
      total,
    };
  }
  return {
    cart: [],
    total: 0,
    cartCount: 0,
  };
}
export const cartSlice = createSlice({
  name: "cart",
  initialState: calculateInitial(savedInitialCart),
  reducers: {
    addToCart: (state, action: { type: string; payload: ProductCartI }) => {
      const { product, quantity } = action.payload;
      if (product) {
        if (quantity < 0) return;
        const newCart = [...state.cart];
        const productId = product._id;
        const existInCart = newCart.some((c) => c.product._id === productId);
        if (existInCart) {
          newCart.map((c) => {
            if (c.product._id === productId) {
              c.quantity += quantity;
            }
            return c;
          });
        } else {
          newCart.push({ product, quantity });
        }
        localStorage.setItem("cart", JSON.stringify(newCart));
        state.cart = newCart;
        state.cartCount += quantity;
        state.total += quantity * product.price.current;
      }
    },
    removeFromCart: (
      state,
      action: { type: string; payload: ProductCartI<string> }
    ) => {
      const { quantity = 1, product: productId } = action.payload;
      const newCart = [...JSON.parse(JSON.stringify(state.cart))];
      const productFoundIndex = newCart.findIndex(
        (c) => c.product._id === productId
      );
      if (productFoundIndex !== -1) {
        if (newCart[productFoundIndex].quantity > quantity) {
          newCart.map((c) => {
            if (c.product._id === productId) {
              c.quantity -= quantity;
            }
            return c;
          });
          state.total -=
            quantity * newCart[productFoundIndex].product.price.current;
        } else {
          newCart.splice(productFoundIndex, 1);
        }
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      state.cart = newCart;
      state.cartCount -= quantity;
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
