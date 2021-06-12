import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
        main: "#0085E8",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    body1: {
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      letterSpacing: "0em",
      color: "#474747",
    },
    button: {
      fontSize: "13px",
      fontStyle: "normal",
      fontWeight: "500",
      letterSpacing: "0em",
      color: "#F7F7F7",
    },
    h1: {
      fontSize: "72px",
      fontStyle: "normal",
      fontWeight: "900",
      letterSpacing: "0em",
      color: "#0085E8",
    },
    subtitle1: {
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: "900",
      letterSpacing: "0em",
      color: "#27AED8",
    },
    subtitle2: {
      fontSize: "36px",
      fontStyle: "normal",
      fontWeight: "900",
      letterSpacing: "0em",
      color: "#27AED8",
    },
    h4: {
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: "400",
      letterSpacing: "0em",
      color: "#474747",
    },
    h5: {
      fontSize: "22px",
      fontStyle: "normal",
      fontWeight: "700",
      letterSpacing: "0em",
      color: "#242424",
    },
  },
});

export default theme;