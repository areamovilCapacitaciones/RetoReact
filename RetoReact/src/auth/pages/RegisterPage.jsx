import React from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import AuthLayout from '../layout/AuthLayout'


const formData = {
  nameUser: '',
  lastNameUser: '',
  email: '',
  password: '',
  displayName: ''

}
const formValidations = {
  nameUser:[(value) => value.length >=3 , 'EL Nombre debe estar correctamente diligenciado '],
  lastNameUser:[(value) => value.length >=3 , 'EL apellido debe estar correctamente diligenciado'],
  email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [ (value) => value.length >= 8, 'El password debe de tener más de 8 letras.'],
  passwordValid: [(value) =>{
    if(value.toUpperCase){
      return ''
    }
    return 'la contraseña debe tener por lo menos una mayúscula'
  }],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, nameUser, emailValid, passwordValid, 
  } = useForm( formData, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword(formState) );
  }

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
                name='nameUser'
                value={nameUser}
                error={ !!emailValid && formSubmitted }
                helperText={ errorMessage }

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
