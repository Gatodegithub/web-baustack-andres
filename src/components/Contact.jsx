import {
  Button,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

export default function Contact() {
  // const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} align="center">
        <Typography variant="h2" className="pt-1 pb-1">
          Contacto
        </Typography>
      </Grid>
      <Grid item xs={false} sm={4}></Grid>
      <Grid item xs={12} sm={4}>
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            fullWidth
            className="shadow"
            margin="normal"
          />
          <TextField
            id="outlined-basic"
            label="Teléfono"
            variant="outlined"
            fullWidth
            margin="normal"
            className="shadow"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            className="shadow"
            margin="normal"
          />
          {/* <TextareaAutosize
            rowsMax={10}
            rowsMin={7}
            placeholder="Escribenos"
            margin="normal"
            className="shadow"
          /> */}
        </form>
      </Grid>
      <Grid item xs={false} sm={4}></Grid>
      <Grid item xs={12} align="center">
        <Button variant="contained" color="primary" size="large" style={{marginTop: "2em"}}>Enviar</Button>
      </Grid>
    </Grid>
  );
}
