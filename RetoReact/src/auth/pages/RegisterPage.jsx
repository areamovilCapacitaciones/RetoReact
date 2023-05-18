import React from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import AuthLayout from '../layout/AuthLayout'


export const RegisterPage = () => {
  return (
    <>
      <AuthLayout title="Register">

        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }} >
              <TextField label="Enter Name "
                type='text'
                placeholder='Jhon'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }} >
              <TextField label="Enter Last Name "
                type='text'
                placeholder='Smith'
                fullWidth
              />
            </Grid>


            <Grid item xs={12} sx={{ mt: 2 }} >
              <TextField label="Enter Email "
                type='email'
                placeholder='correo@correo.com'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }} >
              <TextField label="Enter Password "
                type='password'
                placeholder='password'
                fullWidth
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 3, mt: 1 }}>

              <Grid
                item xs={12}
                sm={12}
              >
                <Button variant='contained' fullWidth> Check In</Button>

              </Grid>
            </Grid>


          </Grid>





        </form>
      </AuthLayout>

    </>

  )
}
