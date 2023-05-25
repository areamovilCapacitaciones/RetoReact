

import { usefetch } from "../../hooks";
import { checkingCredentiales, login, logout } from "./authSlice";

export const checkingAuthtentication = ( email, password)=>{

    return async (dispatch) =>{

        dispatch(checkingCredentiales());

        const result = usefetch(email,password)
        if (!result.ok) return dispatch(logout(result.errorMessage));
 
        dispatch (login(result))

    }
}