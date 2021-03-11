import { Button, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paddingL: {
    [theme.breakpoints.up('sm')]:  {
      paddingLeft: '8em',
    },
    [theme.breakpoints.down('sm')]:  {
      paddingLeft: '5em',
    }
  },
  paddingR: {
    [theme.breakpoints.up('sm')]:  {
      paddingRight: '8em',
    },
    [theme.breakpoints.down('sm')]:  {
      paddingRight: '5em',
    }
  }
}));

export default function Demos() {
  const classes = useStyles();

  return (
    <Container component="section" className="pt-2 pb-2">
      <Grid container alignItems="center" className="pt-2">
        <Grid item xs={12} md={6} align="right">
          <Typography variant="h2" color="secondary" gutterBottom>
            Una sola fuente de información
          </Typography>
          <Typography color="textSecondary" variant="body1" gutterBottom className={classes.paddingL}>
            Centralizar la información permite agilizar el trabajo en equipo,
            optimizando el uso de recursos
          </Typography>
          <Button
            color="secondary"
            variant="outlined"
            size="large"
            className="btn-pill"
          >
            Empezar ahora
          </Button>
        </Grid>
        <Grid item xs={12} md={6} align="center">
          VIDEO
        </Grid>
      </Grid>

      <Grid container alignItems="center" direction="row-reverse" className="pt-2 pb-2">
        <Grid item xs={12} md={6} align="left">
          <Typography variant="h2" color="secondary" gutterBottom>
            Fácil de configurar
          </Typography>
          <Typography color="textSecondary" variant="body1" gutterBottom className={classes.paddingR}>
            Crea la estructura de tus tablas, en base a la información que tu
            consideres relevante. No necesitas saber de programación!
          </Typography>
          <Button
            color="primary"
            variant="outlined"
            size="large"
            className="btn-pill"
          >
            Empezar ahora
          </Button>
        </Grid>
        <Grid item xs={12} md={6} align="center">
          VIDEO
        </Grid>
      </Grid>

      <Grid container alignItems="center" className="pb-2">
        <Grid item xs={12} md={6} align="right">
          <Typography variant="h2" color="primary" gutterBottom>
          Fácil de usar
          </Typography>
          <Typography color="textSecondary" variant="body1" gutterBottom className={classes.paddingL}>
          Tenemos presencia local en Chile, y podemos resolver todas tus dudas con nuestro soporte  telefónico
          </Typography>
          <Button
            color="secondary"
            variant="outlined"
            size="large"
            className="btn-pill"
          >
            Empezar ahora
          </Button>
        </Grid>
        <Grid item xs={12} md={6} align="center">
          VIDEO
        </Grid>
      </Grid>
    </Container>
  );
}
