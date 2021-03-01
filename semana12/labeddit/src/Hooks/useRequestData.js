import { useState, useEffect } from "react";
import axios from "axios";

const useRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    axios
      .get(url, {
          headers: {
              Authorization: localStorage.getItem('token')
          }
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return data;
}

export default useRequestData