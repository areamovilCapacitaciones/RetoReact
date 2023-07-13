import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import { NavBar } from '../components/NavBar'
import { SideBar } from '../components/SideBar'

const drawerwidth = 50;

export const InsideAplicationLayout = (  ) => {

  return (

    <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>

      <NavBar drawerwidth ={drawerwidth} />
      <SideBar  drawerwidth ={drawerwidth}/>


      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >

        <Toolbar />

      </Box>
    </Box>
  )
}