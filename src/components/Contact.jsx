import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "15px",
      boxShadow:
        "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "0px",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderWidth: "1px",
    },
    "& .MuiFormControl-marginNormal": {
      marginTop: "16px",
      marginBottom: "0px"
    }
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h4" className="pt-1 pb-1" align="center">
          Contacto
        </Typography>
      </Grid>
      <Grid item xs={false} sm={3} md={4}></Grid>
      <Grid item xs={10} sm={6} md={4} align="center">
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />

          <TextField
            id="outlined-basic"
            label="Teléfono"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label="Mensaje"
            required
            multiline
            rows={5}
            rowsMax={8}
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <Button
            className="btn-pill btn-blue"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "1em",marginBottom:"3.5em",fontSize:"1.2em" }}
          >
            Enviar
          </Button>
        </form>
      </Grid>
      <Grid item xs={false} sm={3} md={4}></Grid>
    </Grid>
  );
}
