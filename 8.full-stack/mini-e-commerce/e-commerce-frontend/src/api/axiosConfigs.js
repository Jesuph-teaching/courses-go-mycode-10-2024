import axios from "axios";

export const myAPIConfig = axios.create({
	baseURL: "http://localhost:8989/api/v1",
	headers: {
		Accept: "application/json",
	},
	withCredentials: true,
});
