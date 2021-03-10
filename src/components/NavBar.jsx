import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Link } from "@material-ui/core";
import logo from "../assets/img/logo.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px 40px",
    flexGrow: 1,
    backgroundColor: "#fff",
    boxShadow: "0px 0px",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "0",
    paddingRight: "0",
  },
  logoButton: {
    marginRight: theme.spacing(2),
  },
  linksContainer: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  links: {
    marginRight: theme.spacing(3),
  },
  displayNon: {
    display: "none",
  },
}));

export default function NavBar() {
  const matches = useMediaQuery("(max-width:875px)");
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            className={classes.logoButton}
            aria-label="menu"
            disableRipple
          >
            <img src={logo} alt="baustack" width="192px"></img>
          </IconButton>
          <Typography
            className={classNames(
              classes.linksContainer,
              matches && classes.displayNon
            )}
            align="center"
          >
            <Link
              href="#"
              underline="hover"
              color="textPrimary"
              className={classes.links}
            >
              Comunícate con ventas
            </Link>
            <Link
              href="#"
              underline="hover"
              color="textPrimary"
              className={classes.links}
            >
              Iniciar Sesión
            </Link>
            <Button
              size="medium"
              color="primary"
              variant="contained"
              className={"btn-pill"}
            >
              Empezar ahora
            </Button>
          </Typography>
          <IconButton
            className={matches ? "" : classes.displayNon}
            aria-label="menu"
            style={{color: "black"}}
          >
            <MenuIcon style={{ fontSize: "38px" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
