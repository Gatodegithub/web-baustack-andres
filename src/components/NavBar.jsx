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
    [theme.breakpoints.up("lg")]: {
      marginLeft: theme.spacing(8),
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(-2)
    }
  },
  linksContainer: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: theme.spacing(8)
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
      <AppBar position="static" className={classes.root} component="nav">
        <Toolbar className={classes.toolBar}>
          <Link href="#"><img src={logo} alt="baustack" width="192px" className={classes.logoButton}></img></Link>
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
            {/* <Link
              href="#"
              underline="hover"
              color="textPrimary"
              className={classes.links}
            >
              Iniciar Sesión
            </Link> */}
            <Button variant="contained" className="btn-pill btn-blue" style={{padding:"4px 21px"}}>Iniciar Sesión</Button>
          </Typography>
          <IconButton
            className={matches ? "" : classes.displayNon}
            aria-label="menu"
            style={{color: "black"}}
          >
            <MenuIcon style={{ fontSize: "38px",marginBottom:"5px" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
