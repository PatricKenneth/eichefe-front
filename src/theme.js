import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0085E8',
    },
    secondary: {
      main: '#C5C5C5',
    }
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    body1: {
      color: "#C5C5C5",
      fontWeight: 600,
    },
    body2: {
      color: '#C5C5C5'
    },
    h2: {
      color: "#F4FDFF",
      fontWeight: 800,
      lineHeight: '78px',
    },
    button: {
      color: "#C5C5C5",
      fontWeight: 700,
      textTransform: 'none',
    },
  },
});

export default theme;