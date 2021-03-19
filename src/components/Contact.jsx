import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "15px",
      boxShadow:
        "3px 3px 3px -3px rgb(0 0 0 / 10%), 0px 8px 10px 1px rgb(0 0 0 / 10%), 0px 3px 14px 2px rgb(0 0 0 / 1%)",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "0px",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderWidth: "1px",
    },
    "& .MuiFormControl-marginNormal": {
      marginTop: "16px",
      marginBottom: "0px",
    },
    "& .MuiInputLabel-formControl": {
      color: "rgba(0, 0, 0, 0.3)",
    }
  },
}));

export default function Contact() {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          className={classNames("pt-1", "pb-1", matches ? "h4InCel" : "")}
          align="center"
        >
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
            style={{
              marginTop: "1em",
              marginBottom: "3.5em",
              fontSize: "1.2em",
            }}
          >
            Enviar
          </Button>
        </form>
      </Grid>
      <Grid item xs={false} sm={3} md={4}></Grid>
    </Grid>
  );
}
