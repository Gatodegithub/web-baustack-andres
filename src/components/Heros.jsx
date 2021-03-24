import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import classNames from "classnames";
import PopUp from "./PopUp.jsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  descriptionPadding: {
    fontSize: "24px",
    fontWeight: "lighter",
    marginBottom: "27px",
    [theme.breakpoints.up("lg")]: {
      paddingRight: "330px",
      paddingLeft: "330px",
    },
    [theme.breakpoints.only("md")]: {
      paddingRight: "250px",
      paddingLeft: "250px",
    },
  },
  colorLight: {
    "&:hover": {
      backgroundColor: "rgba(248,147,33,.9)",
    },
    backgroundColor: "#f89321",
    color: "#fff",
  },
}));

export default function Heros({
  title,
  description,
  color,
  variant,
  bg,
  textColor,
  light,
}) {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");

  const [open, setOpen] = useState(false);

  return (
    <Container disableGutters maxWidth={false}>
      <Grid
        container
        justify="center"
        spacing={2}
        align="center"
        style={{
          backgroundColor: `${bg}`,
          padding: "3em 0px 4em",
          color: `${textColor}`,
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h2"
            style={{ marginBottom: "-10px", padding: "0px 5px" }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="p"
            className={classNames(
              classes.descriptionPadding,
              matches ? "subtitleHeroInCel" : ""
            )}
            gutterBottom
          >
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            color={color}
            variant={variant}
            className={classNames(light ? classes.colorLight : "", "btn-pill")}
            size="large"
            // onClick={() => setOpen(true)}
            href="#contact-title"
          >
            Empezar ahora
          </Button>
        </Grid>
      </Grid>
      ;
      <PopUp openPopup={open} setPopup={setOpen} />
    </Container>
  );
}
