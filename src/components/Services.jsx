import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import data from "../assets/img/dataServices";
// ¿Como pongo el path del icono en la propiedad icon, asi me ahorraria el import?

const useStyles = makeStyles({
  card: {
    width: "80%",
    borderRadius: "15px",
    boxShadow: "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px"
  },
  carDescription: {
    padding: "30px 0px 0px"
  }
})

export default function Services() {
  const classes = useStyles();

  function ServiceCard(props) {
    const { title, icon, description } = props;

    return (
        <Card className={classes.card}>
          <Typography
            variant="h4"
            align="center"
            style={{ paddingTop: "15px" }}
          >
            {title}
          </Typography>
          <CardContent align="center">
            <Box component="img" src={icon} width="50%"></Box>
            <Typography
              color="textSecondary"
              className={classes.carDescription}
            >
              {description}
            </Typography>
          </CardContent>
        </Card>
    );
  }

  const getData = (service) => {
    return (
      // Le paso todas las propiedades con su valor al componente y termino retornando la grilla con la tarjeta. solo que en dos pasos (funciones)
      <Grid
        key={service.id}
        item
        xs={12}
        sm={10}
        md={4}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ServiceCard {...service} />
      </Grid>
    );
  };

  return (
    <Container component="main">
      <Typography variant="h2" align="center" className="pt-2 pb-1">
        Estas son algunas de las aplicaciones que puedes crear con Baustack:
      </Typography>
      <Grid container spacing={3} justify="center">
        {/* Lo mejor para recorrer un elemento es enviar el dato a una funcion. */}
        {data.map((service) => getData(service))}
      </Grid>
      <Grid container>
        <Grid item xs={12} align="center">
          <Typography variant="h2" className="pt-1 pb-2">
            ...y muchas más!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
