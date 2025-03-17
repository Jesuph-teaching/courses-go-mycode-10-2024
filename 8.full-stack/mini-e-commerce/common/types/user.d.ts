interface BaseUserI {
  email: string;
  password: string;
}
interface UserRegistrationI extends BaseUserI {
  firstName: string;
  lastName: string;
}
interface UserI<ID = string> extends Omit<UserRegistrationI, "password"> {
  _id: ID;
  role: "admin" | "user";
}

//type LoginUserI = Pick<UserI, "email" | "password">;
