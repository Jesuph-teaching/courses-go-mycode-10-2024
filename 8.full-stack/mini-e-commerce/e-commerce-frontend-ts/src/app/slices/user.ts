import { createSlice } from "@reduxjs/toolkit";
interface UserSliceI {
  user: null | UserI;
  isAdmin: boolean;
  isLoggedIn: boolean;
}
const userKey = "user";
const storageUser = JSON.parse(
  localStorage.getItem(userKey) || "null"
) as UserI | null;
const userInitial: UserSliceI = {
  user: storageUser,
  isAdmin: storageUser ? storageUser.role === "admin" : false,
  isLoggedIn: !!storageUser,
};
export const userSlice = createSlice({
  name: "user",
  initialState: userInitial,
  reducers: {
    setUser: (state, action: { type: string; payload: UserI | null }) => {
      const newUser = action.payload;
      if (newUser) {
        state.user = newUser;
        state.isLoggedIn = true;
        state.isAdmin = newUser.role === "admin";
        localStorage.setItem(userKey, JSON.stringify(newUser));
      } else {
        state.user = null;
        state.isLoggedIn = false;
        state.isAdmin = false;
        localStorage.removeItem(userKey);
      }
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
