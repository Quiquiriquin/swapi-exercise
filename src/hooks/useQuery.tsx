import { useEffect, useState } from "react";
import { GET_PLANETS } from "../endpoints/Planets.endpoints";

export const useQuery = (url: string, method: (args?: any) => void) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const getInformation = async () => {
    try {
      const ans = await method(url);
      setData(ans);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getInformation();
  }, []);

  return {
    data,
    loading,
    error,
  };
};
