

import { checkingCredentiales } from "./authSlice";

export const checkingAuthtentication = ( email, password)=>{

    return async (dispatch) =>{

        dispatch(checkingCredentiales());

    }
}