import { useCallback, useState } from "react";
import { Options } from "../types/IRequests";
import { IDataPhoto } from "../types/IDataPhoto";

const useRequest = () => {
  const [data, setData] = useState<null | IDataPhoto>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null | Error>(null);



  const request = useCallback(
    async (url: string, options: Options | undefined) => {
      let response;
      let json;

      try {
        setError(null);
        setLoading(true);
        response = await fetch(url, options);
        json = await response.json();
        console.log(json, "json");
        if (response.ok === false) throw new Error(json.message);
      } catch (error) {
        json = null;
        setError(error.message);
      } finally {
        setData(json);
        setLoading(false);
        return { response, json };
      }
    },
    []
  );

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useRequest;
