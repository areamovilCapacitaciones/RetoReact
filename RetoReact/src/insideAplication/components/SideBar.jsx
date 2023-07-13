
// import { Box, Divider, Drawer, Toolbar, Typography } from '@mui/material';

import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import { MaoItem } from './MaoItem'


export const SideBar = ( numerito ) => {

    return (
        <Box
            component='nav'
            sx={{ width: numerito, flexShrink: { sm: 0 } }}
        >

            <Drawer
                variant='permanent' // temporary
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: numerito }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        Nombre
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    <MaoItem />
                </List>

            </Drawer>

        </Box>
    )
}