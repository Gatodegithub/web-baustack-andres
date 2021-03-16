import { Button, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
// import imgHeader from "../assets/img/analytics.svg";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      height: "calc(100vh - 104px)",
      paddingLeft: "72px",
      paddingRight: "72px"
    },

  },
  title: {
    fontWeight: "bold",
    [theme.breakpoints.only("md")]: {
      fontSize: "5rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: ".6em",
      fontSize: "4.5rem",
      paddingRight: "3.4em"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "4.2rem",
      paddingRight: "2em"
    },
  },
  description: {
    [theme.breakpoints.up("lg")]: {
      paddingRight: "11em",
    },
    [theme.breakpoints.only("md")]: {
      paddingRight: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: "10em",
    },
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Container className={classes.root} component="header">
      <Grid container alignItems="center" style={{height:"100%"}}>
        <Grid item sm={12} md={5}>
          <Typography variant="h1" className={classes.title}>
            Tablas inteligentes en la nube
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classNames(classes.description, "pb-1")}
          >
            Aprovecha las ventajas de trabajar en una base de datos, con la
            simpleza de una planilla Excel
          </Typography>
          <Button variant="contained" className="btn-pill btn-blue">Empezar ahora</Button>
        </Grid>
        <Grid item sm={11} md={7} align="center">
          img
          {/* <img
            src={imgHeader}
            alt="analytics"
            style={{ maxWidth: "100%" }}
          ></img> */}
        </Grid>
      </Grid>
    </Container>
  );
}
