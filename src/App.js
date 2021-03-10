import React from "react";
import NavBar from "./components/NavBar.jsx";
import "fontsource-roboto";
import { Grid, Paper, Typography } from "@material-ui/core";
import Header from "./components/Header.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";

const useStyles = makeStyles((theme) => ({
  // Clase global!
  "@global": {
    ".btn-pill": {
      borderRadius: "50rem!important",
    },
  },
  textColor: {
    color: theme.palette.primary.light,
    [theme.breakpoints.up('md')]: {
      padding: '0px 4em'
    }
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <>
      <Paper style={{ overflow: "hidden" }}>
        <NavBar />
        <Header />
        <Grid
          container
          justify="center"
          spacing={4}
          style={{ backgroundColor: "#330033" }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              component="h1"
              align="center"
              className={classes.textColor}
            >
              Crear tu propia aplicación con tablas inteligentes nunca fue tan
              fácil, no necesitas saber de programación!
            </Typography>
          </Grid>
          <Grid item>
            <iframe
              src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              title="YouTube video"
            ></iframe>
          </Grid>
        </Grid>

        <Services />
        <Footer />
      </Paper>
    </>
  );
}
