
// import { Box, Divider, Drawer, Toolbar, Typography } from '@mui/material';

import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'


export const SideBar = ({ drawerwidth }) => {

    return (
        <Box
            component='nav'
            sx={{ width: drawerwidth, flexShrink: { sm: 0 } }}
        >

            <Drawer
                variant='permanent' // temporary
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerwidth }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        Nombre
                    </Typography>
                </Toolbar>
                <Divider />
                <List>

                    {
                        ['hola', 'buenaas'].map = (text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={{ text }} />
                                        <ListItemText secondary={'lorem' } />
                                    </Grid>

                                </ListItemButton>


                            </ListItem>

                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}