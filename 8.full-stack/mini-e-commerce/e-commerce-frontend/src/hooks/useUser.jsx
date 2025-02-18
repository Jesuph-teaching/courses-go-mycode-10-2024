import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../app/slices/user";
export default function useUser() {
	const { user, isAdmin, isLoggedIn } = useSelector((store) => store.user);
	const dispatch = useDispatch();

	return {
		setUser: (newUser) => {
			dispatch(setUser(newUser));
		},
		user,
		isAdmin,
		isLoggedIn,
	};
}
