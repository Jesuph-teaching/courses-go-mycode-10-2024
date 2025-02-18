import { useQuery } from "@tanstack/react-query";
import { checkUser } from "../api/endpoints/auth";
import { useEffect } from "react";
import { useUser } from "../hooks";

export default function Authenticator({ children }) {
	const { data: response, isFetching } = useQuery({
		queryKey: ["user"],
		queryFn: checkUser,
		refetchOnWindowFocus: false,
		retry: false,
	});

	const { setUser } = useUser();
	useEffect(() => {
		if (response) {
			setUser(response.data.data);
		}
	}, [response, setUser]);
	if (isFetching)
		return (
			<div className="flex h-screen w-screen items-center justify-center">
				<span className="loading loading-xl" />
			</div>
		);

	return children;
}
