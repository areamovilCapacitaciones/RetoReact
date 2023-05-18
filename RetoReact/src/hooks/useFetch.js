import { useEffect, useState } from "react"

export const usefetch =  (url) =>{

    
    const [data, setData] = useState(null);

    const getFetch = async () =>{
        
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        
        console.log(data)
    }

    useEffect(() => {
        getFetch();
    
    }, [url])
    
    return {}
}