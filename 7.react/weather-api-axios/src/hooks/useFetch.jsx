import { useEffect, useState } from "react";
import { weatherAPIConfig } from "../api/axios-configurations";

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
  async function execute(path) {
    setLoading(true);
    try {
      const response = await weatherAPIConfig.get(path);
      if (response.status === 200) {
        const data = await response.data;
        console.log(data);
        setData(data);
      } else {
        const error = await response.data;
        setError(error);
      }
    } catch (err) {
      setError(err);
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
