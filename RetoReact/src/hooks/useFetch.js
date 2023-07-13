/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"

export const usefetch = async (userName, password) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://areamovilmocks.azurewebsites.net/api/Login/ValidateUser?userName=${userName}&password=${password}`;
        const response = await fetch(url);
        const jsonData = await response.json();

        setData(jsonData);
        setLoading(false);
        
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [userName, password]);

  return { loading, error, data };
};







