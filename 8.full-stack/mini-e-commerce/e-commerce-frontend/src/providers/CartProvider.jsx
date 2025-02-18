import { useReducer } from "react";
import CartContext from "../contexts/cart";
function cartReducer(state, action) {
	switch (action.type) {
		case "addToCart": {
			console.log("called");
			const { quantity = 1, product } = action.payload;
			if (quantity < 0) return;
			const newCart = [...state];

			return newCart;
		}
		case "removeFromCart": {
			const { quantity = 1, productId } = action.payload;
			const newCart = [...state];
			const productFoundIndex = newCart.findIndex(
				(c) => c.product._id === productId,
			);
			if (productFoundIndex !== -1) {
				if (newCart[productFoundIndex].quantity > quantity) {
					newCart.map((c) => {
						if (c.product._id === productId) {
							c.quantity -= quantity;
						}
						return c;
					});
				} else {
					newCart.splice(productFoundIndex, 1);
				}
			}
			localStorage.setItem("cart", JSON.stringify(newCart));
			return newCart;
		}
		default: {
			return state;
		}
	}
}
const savedCart = JSON.parse(localStorage.getItem("cart") || "null") || [];
export default function CartProvider({ children }) {
	const [cart, setCart] = useReducer(cartReducer, savedCart);
	function addToCart(product, quantity = 1) {
		setCart({ type: "addToCart", payload: { product, quantity } });
	}
	function removeFromCart(productId, quantity) {
		setCart({
			type: "removeFromCart",
			payload: { productId, quantity },
		});
	}
	const cartCount = cart.reduce((acc, elm) => {
		return acc + elm.quantity;
	}, 0);
	const total = cart.reduce((acc, elm) => {
		return acc + elm.quantity * elm.product.price.current;
	}, 0);
	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				addToCart,
				removeFromCart,
				cartCount,
				total,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
