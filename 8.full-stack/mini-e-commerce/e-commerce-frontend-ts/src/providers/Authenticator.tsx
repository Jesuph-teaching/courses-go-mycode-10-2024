import { useQuery } from "@tanstack/react-query";
import { checkUser } from "../api/endpoints/auth";
import { ReactNode, useEffect } from "react";
import { useUser } from "../hooks";

export default function Authenticator({ children }: { children: ReactNode }) {
  const { data, isFetching } = useQuery({
    queryKey: ["user"],
    queryFn: checkUser,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const { setUser } = useUser();
  useEffect(() => {
    if (data) {
      setUser(data.user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  if (isFetching)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <span className="loading loading-xl" />
      </div>
    );

  return children;
}
