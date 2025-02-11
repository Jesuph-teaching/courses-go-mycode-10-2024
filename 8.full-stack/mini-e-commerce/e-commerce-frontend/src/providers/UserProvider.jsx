import UserContext from "../contexts/user";
import { useQuery } from "@tanstack/react-query";
import { checkUser } from "../api/endpoints/auth";

export default function UserProvider({ children }) {
  const { data, isFetching } = useQuery({
    queryKey: ["user"],
    queryFn: checkUser,
    refetchOnWindowFocus: false,
  });
  if (isFetching)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <span className="loading loading-xl" />
      </div>
    );
  /*  if (isError)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <p>{error.message}</p>
      </div>
    ); */
  return (
    <UserContext.Provider
      value={{
        user: data?.data,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
