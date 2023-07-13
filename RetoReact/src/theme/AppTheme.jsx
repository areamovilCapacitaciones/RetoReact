
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

export const AppTheme = ( child ) => {
  return (
    <ThemeProvider theme={theme}>

        <CssBaseline/>
        { child }
    </ThemeProvider>
  )
}
