import { setUser } from "../app/slices/user";
import { useAppDispatch, useAppSelector } from "./redux";
export default function useUser() {
  const { user, isAdmin, isLoggedIn } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  return {
    setUser: (newUser: SimpleUserI | null) => {
      dispatch(setUser(newUser));
    },
    user,
    isAdmin,
    isLoggedIn,
  };
}
