import axios from "axios";
import { useEffect, useState } from "react";

function useAxiosFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState('');
  

  useEffect(() => {
    const source = axios.CancelToken.source();

    async function fetchUrl(url) {
      setIsLoading(true);
      setFetchError(null);
      try{
        const response = await axios.get(url, {
          cancelToken: source.token
        });
        setData(response.data);
      } catch(err) {
      setFetchError(err.message)
      } finally{
        setIsLoading(false);
      }
  }
    fetchUrl(url)
    return () => source.cancel()
  }, [url]);
  
  
return {data, setData, isLoading, fetchError};
}

export default useAxiosFetch;