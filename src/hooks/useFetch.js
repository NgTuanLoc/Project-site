import { useState, useEffect } from "react";
const URL = "https://6295da9d75c34f1f3b22e21f.mockapi.io/ngtuanloc-projects";
const useFetch = () => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async (url) => {
    const response = await fetch(url);
    const newData = await response.json();
    setData(newData);
  };
  useEffect(() => {
    fetchData(URL);
  }, []);

  return { data };
};

export default useFetch;
