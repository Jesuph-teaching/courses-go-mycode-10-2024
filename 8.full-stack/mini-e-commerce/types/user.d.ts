interface BaseUserI {
  email: string;
  password: string;
}
interface UserRegistrationI extends BaseUserI {
  firstName: string;
  lastName: string;
}
interface UserI extends UserRegistrationI {
  _id: string;
  role: "admin" | "user";
}
interface SimpleUserI extends Omit<UserI, "password"> {
  _id: string;
}

//type LoginUserI = Pick<UserI, "email" | "password">;
