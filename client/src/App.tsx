import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#90caf9"
    },
    type: "dark"
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
