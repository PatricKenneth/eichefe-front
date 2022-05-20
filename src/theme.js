import { createTheme } from "@mui/material";

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
    h1: {
      fontWeight: 800,
      fontSize: "64px",
      lineHeight: "78px",
      color: "#F4FDFF",
    },
    h2: {
      fontWeight: 600,
      fontSize: "48px",
      lineHeight: "59px",
      color: "#0085E8",
    },
    h3: {
      fontWeight: 600,
      fontSize: "36px",
      lineHeight: "44px",
      color: "#0085E8",
    },
    h4: {
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "29px",
      color: "#C5C5C5",
    },
    h5: {
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "22px",
      color: "#C5C5C5",
    },
    h6: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "18px",
      color: "#C5C5C5",
    },
    label: {
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "17px",
      color: "#C5C5C5",
    },
    button: {
      textTransform: "none",
    }
  },
});

export default theme;