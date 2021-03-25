import React from "react";
import { Box, Button, Link, makeStyles } from "@material-ui/core";
import logo from "../assets/img/logo.png";
import "../helpers/stylesNav.css";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  sizeFont: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "17px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
}));

export default function NavBarNew() {
  const classes = useStyles();

  const navbarMenu = document.querySelector(".navbar ul");
  const navbarToggler = document.querySelector(".navbar-toggler");

  const handleToggle = (e) => {
    e.currentTarget.classList.toggle("open-navbar-toggler");
    navbarMenu.classList.toggle("open");
  };

  const navbarAClick = () => {
    try{
      if (navbarMenu.classList.contains("open")) {
        // Ejecuto evento click al navbartoggler
        navbarToggler.click();
      }
    }catch {}
  };

  return (
    <div className="contNavbar">
      <nav className="navbar" id="navbar">
        <Link href="/" className="navbar-brand">
          <Box
            component="img"
            src={logo}
            alt="logo"
            style={{ verticalAlign: "middle" }}
          />
        </Link>
        <Box component="ul">
          <li>
            <Link
              href="#contact-title"
              underline="none"
              color="textPrimary"
              onClick={navbarAClick}
              className={classes.sizeFont}
            >
              Comunícate con ventas
            </Link>
          </li>
          <li>
            <Button
              className={classNames(classes.sizeFont,"btn-blue", "btn-pill")}
              style={{ padding: "4px 21px" }}
              onClick={navbarAClick}
            >
              Iniciar Sesión
            </Button>
          </li>
        </Box>
        <button className="navbar-toggler" onClick={handleToggle}>
          <span></span>
        </button>
      </nav>
    </div>
  );
}
