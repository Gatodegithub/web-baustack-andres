import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "react-elastic-carousel";
import firstT from "../assets/img/Testimonials/first.svg";
import classNames from "classnames";

// DECIR QUE RECOMIENDO QUE LA IMAGEN NO TENGA ESA SOBRE SALIDA YA QUE GENERA PROBLEMAS EN EL CARRUSEL!

const useStyles = makeStyles((theme) => ({
  carrusel: {
    // "& .cukhLH, .sc-gsTCUz, .bcaJjD": {
    //   overflow: "visible",
    // },
    "& .rec-item-wrapper": {
      pointerEvents: "none",
    },
    // '& .rec-carousel-item-hidden': {
    //   display:"none",
    // },
    // '& .rec-carousel-item-visible': {
    //   display:"block"
    // }
  },
  root: {
    // "& h5": {
    //   [theme.breakpoints.down("sm")]: {

    //   }
    // },
    [theme.breakpoints.up("md")]: {
      padding: "1em 30px 1em 0px",
      "& h5": {
        marginBottom: "2.5em",
      },
    },
    [theme.breakpoints.down("md")]: {
      "& h5": {
        padding: "0px 30px",
      },
      "& h5, p": {
        marginBottom: "1em",
      },
    },
    backgroundColor: "#f89321",
    color: "#fff",
  },
  carrusel2: {
    backgroundColor: "#773090",
  },
}));

export default function Testimonials() {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      style={{ paddingTop: "11em", paddingBottom: "8em" }}
    >
      <Grid item xs={11} md={8} lg={10}>
        <Carousel
          showArrows={false}
          pagination={true}
          className={classes.carrusel}
          transitionMs={1000}
          easing="false"
          enableAutoPlay={true}
        >
          <Box borderRadius="40px" className={classes.root}>
            <Grid container justify="flex-end" alignItems="center">
              <Grid item xs={12} sm={12} md={6} lg={4} align="center">
                <Box component="img" src={firstT}></Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={8} align="center">
                <Typography variant="h5">
                  "Baustack revolucionó la forma de trabajar en nuestro equipo,
                  ahora tenemos toda la información en un mismo lugar y podemos
                  tener absoluta claridad de quien realizó un cambio"
                </Typography>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  Tomás Aylwin
                </Typography>
                <Typography style={{ fontWeight: "lighter" }}>
                  Socio en Prado & Alwin
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box borderRadius="40px" className={classNames(classes.root,classes.carrusel2)}>
            <Grid container justify="flex-end" alignItems="center">
              <Grid item xs={12} sm={12} md={6} lg={4} align="center">
                <Box component="img" src={firstT}></Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={8} align="center">
                <Typography variant="h5">
                  "Baustack revolucionó la forma de trabajar en nuestro equipo,
                  ahora tenemos toda la información en un mismo lugar y podemos
                  tener absoluta claridad de quien realizó un cambio"
                </Typography>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  Tomás Aylwin
                </Typography>
                <Typography style={{ fontWeight: "lighter" }}>
                  Socio en Prado & Alwin
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Carousel>
      </Grid>
    </Grid>
  );
}
