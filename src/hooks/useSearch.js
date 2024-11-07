import { useState, useMemo } from "react";

const useSearch = (data, searchKey) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  if (!Array.isArray(data)) {
    setError("Data harus berupa array.");
  }

  if (typeof searchKey !== "string") {
    setError("searchKey harus berupa string.");
  }

  const filteredData = useMemo(() => {
    if (error) return []; 

    if (!query) return data;
    
    try {
      return data.filter((item) => {
        const value = item[searchKey];
        
        if (typeof value === "string") {
          return value.toLowerCase().includes(query.toLowerCase());
        }
        return false; 
      });
    } catch (err) {
      setError("Terjadi kesalahan saat memfilter data.");
      return []; 
    }
  }, [query, data, searchKey, error]);

  return { query, setQuery, filteredData, error };
};

export default useSearch;
