import { useContext } from "react";
import UserContext from "../contexts/user";

export default function useUser() {
	const context = useContext(UserContext);
	if (context) {
		return context;
	} else throw new Error("Context for User is not available");
}
