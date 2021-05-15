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
      color: "#FFFFFF",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      letterSpacing: "0em",
      textAlign: "center",
    },
    subtitle1: {
      color: "#002643",
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: "900",
      letterSpacing: "0em",
      textAlign: "left",
    },
    subtitle2: {
      color: "#F7F7F7",
      fontSize: "24px",
      fontStyle: "normal",
      textAlign: "left",
      fontWeight: "400",
      lineWeight: "36px",
      letterSpacing: "0em",
    },
    h5: {
      color: "#474747",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "400",
      letterSpacing: "0em",
      textAlign: "center",
      lineHeight: "28px",
    },
    button: {
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "500",
      letterSpacing: "0em",
      textAlign: "center",
      textTransform: "none",
    },
    h1: {
      color: "#0085E8",
      fontSize: "72px",
      fontStyle: "normal",
      fontWeight: "900",
      letterSpacing: "0em",
      textAlign: "left",
    },
    h3: {
      color: "#27AED8",
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: "900",
      lineHeight: "58px",
      letterSpacing: "0em",
      textAlign: "left",
    }
  },
});

export default theme;