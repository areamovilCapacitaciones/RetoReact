import { useEffect, useState } from "react"

export const usefetch = async(userName , password) => {
   
        const url = 'https://areamovilmocks.azurewebsites.net/api/Login/ValidateUser';
        
        try { 
          const response = await fetch(`${url}?userName=${userName}&password=${password}`);
          if (response.ok) {
            const responseData = await response.json();

            console.log(responseData, 'respuesta desde el fech');
            return (responseData)

          } else {
            console.error('Error en la solicitud:', response.status);
            return (response.status)
          }
        } catch (error) {
          console.error(error);
        }
      }
      
    
      
      
      
      
      