import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
// import Carousel from "react-elastic-carousel";
import firstT from "../assets/img/Testimonials/first.svg";

// DECIR QUE RECOMIENDO QUE LA IMAGEN NO TENGA ESA SOBRE SALIDA YA QUE GENERA PROBLEMAS EN EL CARRUSEL!

const useStyles = makeStyles((theme) => ({
  carrusel: {
    "& .cukhLH, .sc-gsTCUz, .bcaJjD": {
      overflow: "visible",
    },
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
    position: "relative",
    height: "340px",
    backgroundColor: "#f89321",
    color: "#fff",
    "& img": {
      top: "-85px",
      left: "80px",
      position: "absolute",
      zIndex: "9999",
    },
  },
}));

export default function Testimonials() {
  const classes = useStyles();

  return (
    <Grid container justify="center" style={{ paddingTop: "12em",paddingBottom:"9em" }}>
      <Grid item xs={8} md={8} >
        {/* <Carousel showArrows={false} className={classes.carrusel} > */}
          <Box borderRadius="40px" className={classes.root}>
            <Grid
              container
              justify="flex-end"
              alignItems="center"
              style={{ height: "100%" }}
            >
              <img src={firstT} alt="a" style={{ zIndex: "999" }} />
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Typography variant="h5" style={{marginBottom:"2.5em"}}>
                  "Baustack revolucionó la forma de trabajar en nuestro equipo,
                  ahora tenemos toda la información en un mismo lugar y podemos
                  tener absoluta claridad de quien realizó un cambio"
                </Typography>
                <Typography variant="h6" style={{fontWeight:"bold"}}>Tomás Aylwin</Typography>
                <Typography>Socio en Prado & Alwin</Typography>
              </Grid>
            </Grid>
          </Box>
        {/* </Carousel> */}
      </Grid>
    </Grid>
  );
}
