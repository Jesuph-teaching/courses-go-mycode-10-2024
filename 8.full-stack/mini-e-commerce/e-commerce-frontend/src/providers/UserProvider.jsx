import UserContext from "../contexts/user";
import { useQuery } from "@tanstack/react-query";
import { checkUser } from "../api/endpoints/auth";
import { useEffect, useState } from "react";

export default function UserProvider({ children }) {
  const { data: response, isFetching } = useQuery({
    queryKey: ["user"],
    queryFn: checkUser,
    refetchOnWindowFocus: false,
  });
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (response) {
      setUser(response.data.data);
    }
  }, [response]);
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
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
