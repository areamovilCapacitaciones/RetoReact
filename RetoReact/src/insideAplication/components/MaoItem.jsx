import { TurnedInNot } from '@mui/icons-material';
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

export const MaoItem = () => {
  const item = ['hola', 'buenaas'];
  return (
    <>
      {item.map((el) => (
        <ListItem key={el} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <TurnedInNot />
            </ListItemIcon>
          </ListItemButton>
          <Grid container>
            <ListItemText primary={el} />
            <ListItemText secondary={'lorem'} />
          </Grid>
        </ListItem>
      ))}
    </>
  );
};
