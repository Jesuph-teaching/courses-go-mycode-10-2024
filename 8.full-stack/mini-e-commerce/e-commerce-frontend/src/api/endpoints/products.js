import { myAPIConfig } from "../axiosConfigs";

export async function getProducts({ search, sorting }) {
	const token = localStorage.getItem("token");
	if (!token) throw new Error("You aren't logged in");
	const searchParams = new URLSearchParams({
		sortingDirection: sorting.dir,
		sorting: sorting.path,
	});
	if (search) searchParams.append("search", search);
	return myAPIConfig.get("/products?" + searchParams.toString(), {
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
	});
}
