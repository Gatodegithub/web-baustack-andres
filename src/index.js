import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

// AVERIGUAR SI EN EL TEMA SE PUEDEN CREAR PROPIEDADES CON ESTILOS NUEVOS.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ea4c02",
      dark: "#cf171f",
      light: "#f89321",
    },
    secondary: {
      main :"#773090",
    },
    MuiButton: {
      outlinedSecondary: {
        color: "#773090",
      }
    }
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
