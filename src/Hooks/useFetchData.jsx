import { useState, useEffect } from "react";

export default function useFetchData(selection) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = "https://www.anapioficeandfire.com/api/";

  useEffect(() => {
    async function fetchData(selection) {
      if (!selection) return;
      const url = apiUrl + selection + "s" + "?pageSize=20" + "&page=1";
      setLoading(true);
      try {
        const res = await fetch(url);
        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData(selection);
  }, [selection]);

  return { data, loading, error, setLoading, setData };
}
