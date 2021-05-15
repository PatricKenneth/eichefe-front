import Header from "../header";
import Footer from "../footer";
import Content from "../content";
import theme from '../../theme';
import { ThemeProvider } from "@material-ui/core";

function PageLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}

export default PageLayout;