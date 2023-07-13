import { Grid } from "@mui/material"

export const NothingSelectedView = () => {
  return (
  
      <Grid 
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx = {{ minHeight : 'calc(100vh - 110pk )', background : 'primary', padding : 4 }}
      >
        <h1>hola</h1>
      </Grid>
  

  )
}
