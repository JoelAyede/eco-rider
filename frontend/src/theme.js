import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // Vert écologique
    },
    secondary: {
      main: '#ff5722', // Orange vif
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;