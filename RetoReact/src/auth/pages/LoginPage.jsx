import { useDispatch } from "react-redux";

import { Link as RoterLink } from "react-router-dom";
import { Button, Grid, TextField, Link, Typography } from '@mui/material'
import React from 'react'
import AuthLayout from "../layout/AuthLayout";
import { useForm, usefetch } from "../../hooks";
import { checkingAuthtentication } from "../../store/auth/thunks";


export const LoginPage = () => {

  

  const dispatch  = useDispatch();
  const{email, password, onInputChange} = useForm({
    email :'',
    password: '',
  }
 
  )
  const onSubmit = ( event ) =>{
  
    event.preventDefault();
    dispatch(checkingAuthtentication());

  }


  return (
    <>
      <AuthLayout title="Login">

        <form onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }} >

              <TextField label=" Email "
                type='email'
                placeholder='correo@correo.com'
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label=" Password "
                type='password'
                placeholder='password'
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              />

            </Grid>

            <Grid container spacing={2} sx={{ mb: 3, mt: 1 }}>

              <Grid
                item xs={12}
                sm={6}
              >
                <Button type="submit" variant='contained' fullWidth> Login</Button>

              </Grid>

              <Grid
                container
                direction="row"
                justifyContent="end"
                item xs={12}
                
                
              >
                <Link content={RoterLink} color="inherit" to="./auth/register">
                create Account

                </Link>

              </Grid>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  )
}
