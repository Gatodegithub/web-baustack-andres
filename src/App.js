import React from "react";
import NavBar from "./components/NavBar.jsx";
import "fontsource-roboto";
import { Grid, Paper, Typography } from "@material-ui/core";
import Header from "./components/Header.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
import Heros from "./components/Heros.jsx";
import Demos from "./components/Demos.jsx";
import Contact from "./components/Contact.jsx";

const useStyles = makeStyles((theme) => ({
  // Clase global!
  "@global": {
    ".btn-pill": { borderRadius: "50rem!important" },
    ".shadow": {
      boxShadow:
        "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px",
    },
    ".pt-1": { paddingTop: "1em" },
    ".pt-2": { paddingTop: "2em" },
    ".pb-1": { paddingBottom: "1em" },
    ".pb-2": { paddingBottom: "2em" },
  },
  textColor: {
    [theme.breakpoints.up("md")]: {
      padding: "0px 4em",
    },
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <>
      <Paper style={{ overflow: "hidden" }}>
        <NavBar />
        <Header />
        {/* VIDEO PRINCIPAL */}
        <Grid container justify="center" spacing={4} component="section">
          <Grid item xs={12}>
            <Typography
              variant="h4"
              align="center"
              className={classes.textColor}
              color="secondary"
            >
              Crear tu propia aplicación con tablas inteligentes nunca fue tan
              fácil, no necesitas saber de programación!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <iframe
              width="100%"
              height="300px"
              src="https://www.youtube.com/embed/zpOULjyy-n8"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
              allowFullScreen
              title="video principal"
            ></iframe>
            {/* encryptedmedia << atributo para probar */}
          </Grid>
        </Grid>

        <Services />
        {/* HERO ONE */}
        <Heros
          title="Gestiona todo en Baustack"
          description="¡Incluye fechas, checkboxes, documentos, alertas de vencimiento y mucho más!"
          color="secondary"
          variant="outlined"
          bg={"#f89321"}
          textColor="#fff"
        />

        <Demos />

        {/* HERO TWO */}
        <Heros
          title="Prueba Baustack con tu equipo"
          description="Prueba gratuita de 14 días | No se requiere tarjeta de crédito"
          color="primary"
          variant="contained"
          bg="#773090"
          textColor="#fff"
        />
        <Contact />
        <Footer />
      </Paper>
    </>
  );
}
