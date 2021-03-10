import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ea4c02",
      dark: "#cf171f",
      light: "#f89321",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
