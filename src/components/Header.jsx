import { Button, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import imgHeader from "../assets/img/analytics.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 104px)",
    [theme.breakpoints.up('sm')]:  {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('sm')]:  {
      marginBottom: '20em',
    }
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container alignItems="center">
        <Grid item sm={12} md={5}>
          <Typography variant="h1" style={{wordBreak: "break-word"}}><b>Tablas inteligentes en la nube</b></Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Aprovecha las ventajas de trabajar en una base de datos, con la
            simpleza de una planilla Excel
          </Typography>
          <Button variant="contained" color="primary" className="btn-pill">
            Empezar ahora
          </Button>
        </Grid>
        <Grid item sm={11} md={7}>
          <img
            src={imgHeader}
            alt="analytics"
            style={{ maxWidth: "100%" }}
          ></img>
        </Grid>
      </Grid>
    </Container>
  );
}
