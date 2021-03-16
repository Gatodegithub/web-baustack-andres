import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import logoOne from "../assets/img/workWithUs/Logo Recreactiva.jpg";
import logoTwo from "../assets/img/workWithUs/Logo Fray Jorge.jpg";
import logoThree from "../assets/img/workWithUs/Logo Photofest.jpg";
import logoFourth from "../assets/img/workWithUs/Logo Prado Aylwin.jpg";
import logoFive from "../assets/img/workWithUs/Logo Somec.jpg";
import logoSix from "../assets/img/workWithUs/Logo Perfotech.jpg";
import logoSeven from "../assets/img/workWithUs/Logo Mila Vicencio.jpg";
import logoEight from "../assets/img/workWithUs/Logo Sintoniza.jpg";

const useStyles = makeStyles((theme) => ({
  contPadding: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "168px",
      paddingRight: "168px",
    }
  }
}))

export default function WhoWork() {
  const classes = useStyles();

  return (
    <Container className={classes.contPadding}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" className="pt-3 pb-1">
            Equipos altamente efectivos trabajan con Baustack:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3} align="center">
          <img src={logoOne} alt="Recreativa" />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3} align="center">
          <img src={logoTwo} alt="Recreativa" />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3} align="center">
          <img src={logoThree} alt="Recreativa" />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3} align="center">
          <img src={logoFourth} alt="Recreativa" />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3} align="center">
          <img src={logoFive} alt="Recreativa" />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3} align="center">
          <img src={logoSix} alt="Recreativa" />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} align="center">
          <img src={logoSeven} alt="Recreativa" />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} align="center">
          <img src={logoEight} alt="Recreativa" />
        </Grid>
      </Grid>
    </Container>
  );
}
