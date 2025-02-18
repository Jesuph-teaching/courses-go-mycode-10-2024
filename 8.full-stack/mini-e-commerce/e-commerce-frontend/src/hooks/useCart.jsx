import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../app/slices/cart";

export default function useCart() {
	const { cart, total, cartCount } = useSelector((store) => store.cart);
	const dispatch = useDispatch();
	return {
		cart,
		total,
		cartCount,
		addToCart: (product, quantity = 1) => {
			dispatch(addToCart({ product, quantity }));
		},
		removeFromCart: (productId, quantity = 1) => {
			dispatch(removeFromCart({ productId, quantity }));
		},
	};
}
