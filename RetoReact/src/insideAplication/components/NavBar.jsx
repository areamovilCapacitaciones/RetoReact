
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';


export const NavBar = ({drawerwidth}) => {

    const onLogout = () => {

    }

  return (
    <AppBar 
        position='fixed'
        sx={{

            width : { sm:  `calc(100% - ${drawerwidth }px)`},
            ml: {sm : `${ drawerwidth }px`}
        }
    }
      
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge="start"
                // sx = {{mr: 2, display : {sm : 'none'}}}
            >
                <MenuOutlined />
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'> Inside Aplication </Typography>

                <IconButton 
                    color='error'
                    onClick={ onLogout }
                >
                    <LogoutOutlined />
                </IconButton>
            </Grid>

        </Toolbar>
    </AppBar>
  )

}