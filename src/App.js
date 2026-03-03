import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import Home from "./pages/Home";
import { HelmetProvider } from "react-helmet-async";
function App() {
  return (
     <HelmetProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
