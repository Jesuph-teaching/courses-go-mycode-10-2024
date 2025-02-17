import { myAPIConfig } from "../axiosConfigs";

export async function login({ email, password }) {
	return myAPIConfig.post("/auth/login", {
		email,
		password,
	});
}
export async function register({ email, password, firstName, lastName }) {
	return myAPIConfig.post("/auth/register", {
		email,
		password,
		firstName,
		lastName,
	});
}

export async function checkUser() {
	const token = localStorage.getItem("token");
	if (!token) throw new Error("You aren't logged in");
	return myAPIConfig.get("/auth", {
		headers: {
			Authorization: "Bearer " + token,
		},
	});
}
