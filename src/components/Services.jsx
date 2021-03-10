import {
  Box,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import data from "../assets/img/dataServices";
// ¿Como pongo el path del icono en la propiedad icon, asi me ahorraria el import?

function ServiceCard(props) {
  const { title, icon, description } = props;

  return (
    <>
      <Card style={{ width: "80%" }}>
        <Typography variant="h4" align="center" style={{paddingTop:"15px"}}>{title}</Typography>
        <CardContent align="center">
          <Box component="img" src={icon} width="50%"></Box>
          <Typography
            color="textSecondary"
            style={{ padding: "30px 0px 0px 0px" }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default function Services() {
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
    <Container>
      <Typography variant="h2" align="center">
        Estas son algunas de las aplicaciones que puedes crear con Baustack:
      </Typography>
      <Grid container spacing={3} justify="center">
        {/* Lo mejor para recorrer un elemento es enviar el dato a una funcion. */}
        {data.map((service) => getData(service))}
      </Grid>
    </Container>
  );
}
