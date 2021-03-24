import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import PopUp from "./PopUp.jsx";
import Video1 from "../assets/videos/Una fuente de información.MOV";

const useStyles = makeStyles((theme) => ({
  paddingL: {
    [theme.breakpoints.up("lg")]: { paddingLeft: "15em", textAlign: "right" },
    [theme.breakpoints.only("md")]: { paddingLeft: "9em", textAlign: "right" },
    [theme.breakpoints.only("sm")]: { padding: "0em 10em" },
    marginBottom: "1.5em",
  },
  paddingR: {
    [theme.breakpoints.up("lg")]: { paddingRight: "16em", textAlign: "left" },
    [theme.breakpoints.only("md")]: { paddingRight: "12em", textAlign: "left" },
    [theme.breakpoints.only("sm")]: { padding: "0em 9em" },
    marginBottom: "1.5em",
  },
  paddingTitleL: {
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(10),
      textAlign: "right",
    },
    [theme.breakpoints.only("md")]: {
      paddingLeft: theme.spacing(0),
      textAlign: "right",
    },
    [theme.breakpoints.only("sm")]: { paddingLeft: theme.spacing(0) },
  },
  paddingTitleR: {
    [theme.breakpoints.up("lg")]: {
      paddingRight: theme.spacing(25),
      textAlign: "left",
    },
    [theme.breakpoints.only("md")]: {
      paddingRight: theme.spacing(12),
      textAlign: "left",
    },
    [theme.breakpoints.only("sm")]: { paddingRight: theme.spacing(0) },
  },
  btnRightMd: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  btnLeftMd: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "flex-start",
    },
  },
  contenedorVideo: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(4),
    },
  },
  rowCentral: {
    padding: "10em 0px",
    [theme.breakpoints.down("sm")]: {
      padding: "5em 0px",
    },
  },
}));

export default function Demos() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <Container component="section" style={{ padding: "5em 0em" }}>
      <Grid
        container
        className="pt-2"
        alignItems="center"
        style={{ justifyContent: "center" }}
      >
        <Grid item xs={12} sm={12} md={5} align="center">
          <Typography
            variant="h2"
            color="secondary"
            gutterBottom
            className={classes.paddingTitleL}
          >
            Una sola fuente de información
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
            gutterBottom
            className={classes.paddingL}
          >
            Centralizar la información permite agilizar el trabajo en equipo,
            optimizando el uso de recursos
          </Typography>
          <Box className={classes.btnRightMd}>
            <Button
              color="secondary"
              variant="outlined"
              size="large"
              className="btn-pill"
              // onClick={() => setOpen(true)}
              href="#contact-title"
            >
              Empezar ahora
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className={classes.contenedorVideo}>
          <Box className="contVideo">
            <video
              autoPlay
              muted
              loop
              width="100%"
              height="100%"
              className="videoResponsive"
            >
              <source src={Video1} type="video/mp4" />
            </video>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        direction="row-reverse"
        className={classes.rowCentral}
      >
        <Grid item xs={12} md={5} align="center">
          <Typography
            variant="h2"
            style={{ color: "#b41764" }}
            gutterBottom
            className={classes.paddingTitleR}
          >
            Fácil de configurar
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
            gutterBottom
            className={classes.paddingR}
          >
            Crea la estructura de tus tablas, en base a la información que tu
            consideres relevante. No necesitas saber de programación!
          </Typography>
          <Box className={classes.btnLeftMd}>
            <Button
              color="primary"
              variant="outlined"
              size="large"
              className="btn-pill"
              // onClick={() => setOpen(true)}
              href="#contact-title"
            >
              Empezar ahora
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          align="center"
          className={classes.contenedorVideo}
        >
          <Box className="contVideo">
            <video
              autoPlay
              muted
              loop
              width="100%"
              height="100%"
              className="videoResponsive"
            >
              <source src={Video1} type="video/mp4" />
            </video>
          </Box>
        </Grid>
      </Grid>

      <Grid container alignItems="center" className="pb-2">
        <Grid item xs={12} md={5} align="center">
          <Typography
            variant="h2"
            style={{ color: "#EA4C02" }}
            gutterBottom
            className={classes.paddingTitleL}
          >
            Fácil de usar
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
            gutterBottom
            className={classes.paddingL}
          >
            Tenemos presencia local en Chile, y podemos resolver todas tus dudas
            con nuestro soporte telefónico
          </Typography>
          <Box className={classes.paddingTitleL}>
            <Button
              color="secondary"
              variant="outlined"
              size="large"
              className="btn-pill"
              // onClick={() => setOpen(true)}
              href="#contact-title"
            >
              Empezar ahora
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className={classes.contenedorVideo}>
          <Box className="contVideo">
            <video
              autoPlay
              muted
              loop
              width="100%"
              height="100%"
              className="videoResponsive"
            >
              <source src={Video1} type="video/mp4" />
            </video>
          </Box>
        </Grid>
      </Grid>

      <PopUp openPopup={open} setPopup={setOpen} />
    </Container>
  );
}
