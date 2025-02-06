import { useEffect, useState } from "react";

export default function useFetch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    if (error) {
      setData(null);
    }
  }, [error]);
  useEffect(() => {
    if (data) {
      setError(null);
    }
  }, [data]);
  async function execute(url) {
    setLoading(true);
    const response = await fetch(url, {
      method: "GET",
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      setData(data);
    } else {
      const error = await response.json();
      setError(error);
    }
    setLoading(false);
  }
  return {
    data,
    search,
    error,
    loading,
    setSearch,
    execute,
  };
}
