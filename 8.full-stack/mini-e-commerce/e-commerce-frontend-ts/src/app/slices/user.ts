import { createSlice } from "@reduxjs/toolkit";
interface UserSliceI {
  user: null | SimpleUserI;
  isAdmin: boolean;
  isLoggedIn: boolean;
}
const userInitial: UserSliceI = {
  user: null,
  isAdmin: false,
  isLoggedIn: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState: userInitial,
  reducers: {
    setUser: (state, action: { type: string; payload: SimpleUserI | null }) => {
      const newUser = action.payload;
      console.log(newUser);
      if (newUser) {
        state.user = newUser;
        state.isLoggedIn = true;
        state.isAdmin = newUser.role === "admin";
      } else {
        state.user = null;
        state.isLoggedIn = false;
        state.isAdmin = false;
      }
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
