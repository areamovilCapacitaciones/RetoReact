import { useEffect, useState, useFetch } from "react"

export const useFetchLogin = (url) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };


    // console.log(userName, password, "datos use fetch")
    // const url = `https://areamovilmocks.azurewebsites.net/api/Login/ValidateUser?userName=${userName}&password=${password}`
    // console.log(url, "url fetch")

    // const fetchApi = async () =>{
      
    //   fetch (url)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data,"data"))
  
    // }
    // useEffect(() => {
    //  fetchApi()
    // }, [])

    // return {data}
} 

  // fetch("https://dog.ceo/api/breeds/image/random") // ⬅️ 1) llamada a la API, el resultado es una Promise
  // .then((response) => response.json()) // ⬅️ 2) cuando la petición finalice, transformamos la respuesta a JSON (response.json() también es una Promise)
  // .then((dog) => console.log(dog)); // ⬅️ 3) aquí ya tenemos la respuesta en formato objeto
      
    
      
      
      
      
      