import { useEffect, useState } from "react";
import { myAPIConfig } from "../api/axios-configurations";

export default function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  async function CheckAuth() {
    try {
      const response = await myAPIConfig.get("/auth");
      if (response.status === 200) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch {
      setIsLoggedIn(false);
    }
  }
  useEffect(() => {
    CheckAuth();
  }, []);

  return [isLoggedIn, CheckAuth];
}
