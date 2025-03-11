import { myAPIConfig } from "../axiosConfigs";
export interface AuthResponseT {
  user: SimpleUserI;
  token: string;
}
export async function login({ email, password }: BaseUserI) {
  const response = await myAPIConfig.post<AuthResponseT>("/auth/login", {
    email,
    password,
  });
  return response.data;
}
export async function register({
  email,
  password,
  firstName,
  lastName,
}: UserRegistrationI) {
  const response = await myAPIConfig.post<AuthResponseT>("/auth/register", {
    email,
    password,
    firstName,
    lastName,
  });
  return response.data;
}

export async function checkUser() {
  const response = await myAPIConfig.get<AuthResponseT>("/auth");
  return response.data;
}
