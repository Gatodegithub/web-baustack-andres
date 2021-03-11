import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";


export default function Heros({title, description, color, variant, bg, textColor}) {
  return (
    <>
      <Grid
        container
        justify="center"
        spacing={4}
        align="center"
        style={{ backgroundColor: `${bg}`, padding: "4em 0px", color: `${textColor}`}}
      >
        <Grid item xs={12}>
          <Typography variant="h2">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button color={color} variant={variant} className="btn-pill" size="large">
            Empezar ahora
          </Button>
        </Grid>
      </Grid>
      ;
    </>
  );
}
