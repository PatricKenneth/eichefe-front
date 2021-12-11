import { ThemeProvider } from "@mui/material";
import React from "react";
import Home from './components/home';
import theme from './theme';
import './index.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
