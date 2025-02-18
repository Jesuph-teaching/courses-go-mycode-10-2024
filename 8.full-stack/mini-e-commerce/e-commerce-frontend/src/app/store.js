import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user";
import cart from "./slices/cart";
const store = configureStore({
	reducer: {
		user: user,
		cart: cart,
	},
});

export default store;
