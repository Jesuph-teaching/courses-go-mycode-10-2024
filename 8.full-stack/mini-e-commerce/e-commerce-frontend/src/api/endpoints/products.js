import { myAPIConfig } from "../axiosConfigs";

export async function getProducts() {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("You aren't logged in");
  return myAPIConfig.get("/products", {});
}
