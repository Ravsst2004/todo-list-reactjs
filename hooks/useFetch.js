import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/todos");      
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });

  return { data };
};

export default useFetch;
