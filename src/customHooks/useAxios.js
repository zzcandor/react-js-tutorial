import axios from "axios";
import { useState, useEffect } from "react";
// 封装 axios 发送网络请求的自定义 Hook
function useAxios(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(res => setData(res))
      .catch(err => setError(err))
      .finally(() =>  setLoading(false));
  }, [url]);

  return [loading, data, error];
}
export default useAxios;
