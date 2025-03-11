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
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
