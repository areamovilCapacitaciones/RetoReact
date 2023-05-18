import { createSlice } from "@reduxjs/toolkit";

export const authSlice  = createSlice({

    name : 'auth',
    initialState : {
        status : 'not-authenticated', // 'not authenticated 'authenticated'
        uid : null, 
        email: null,
        displayName : null,
        token : null,
        errorMessage : null,

    },
    reducers :{
        login: (state, {payload}) => {

        state.status = 'authenticated';// 'not authenticated 'authenticated'
        state.uid = null; 
        state.email= null;
        state.displayName = null;
        state.token =null;
        state.errorMessage =  null;

        },
        logout:(state, {payload})=>{
        state.status = 'not-authenticated';// 'not authenticated 'authenticated'
        state.uid = null; 
        state.email= null;
        state.displayName = null;
        state.token =null;
        state.errorMessage =  null;

        },
        checkingCredentiales : (state) => {
            state.status = 'checking'

        }


    }



})

export const {login,logout, checkingCredentiales} = authSlice.actions;