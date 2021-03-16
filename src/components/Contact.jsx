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
    <Grid container justify="center">
      <Grid item xs={12}>
        <Typography variant="h4" className="pt-1 pb-1" align="center">
          Contacto
        </Typography>
      </Grid>
      {/* <Grid item xs={false} sm={4}></Grid> */}
      <Grid item xs={10} sm={4}>
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            fullWidth
            className="shadow"
            margin="normal"
          />
          {/* <TextField
            id="outlined-basic"
            label="Teléfono"
            variant="outlined"
            fullWidth
            margin="normal"
            className="shadow"
          /> */}
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
          <Button className="btn-pill btn-blue" fullWidth variant="contained" color="primary" size="large" style={{marginTop: "2em"}}>Enviar</Button>
        </form>
      </Grid>
      {/* <Grid item xs={false} sm={4}></Grid> */}
    </Grid>
  );
}
