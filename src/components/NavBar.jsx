import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Link } from "@material-ui/core";
import logo from "../assets/img/logo.png";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import classNames from "classnames";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
import PopUp from "./PopUp.jsx";

// https://material-ui.com/system/display/#display   << me ahorro el codigo del display menu
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 5px",
    },
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
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),
      width: "160px"
    },
  },
  linksContainer: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing(0),
    },

    '& button': {
      [theme.breakpoints.down("sm")]: {
        lineHeight: "1.4",
      }
    }

  },
  links: {
    marginRight: theme.spacing(3),

    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0),
      lineHeight: "1.4",
    },

  },
  displayNon: {
    display: "none",
  },
  rootDrawer: {
    width: "200px",
    "& .MuiListItem-gutters": {
      padding: "50px 16px",
      textAlign: "center",
      borderBottom: "1px solid gray"
    },
  },
}));

export default function NavBar() {
  // const matches = useMediaQuery("(max-width:875px)");
  const classes = useStyles();

  // const [open, setOpen] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  // const handleDrawer = () => {
  //   setOpen(true);
  // };

  const handleModal = () => {
    setOpenModal(true);
    // setOpen(false);
  }

  // const itemList = [
  //   { text: "Iniciar Sesión", icon: <InboxIcon /> },
  //   { text: "Comunicate con ventas", icon: <InboxIcon /> },
  // ];

  return (
    <div>
      <AppBar position="static" className={classes.root} component="nav">
        <Toolbar className={classes.toolBar}>
          <Link href="#">
            <img
              src={logo}
              alt="baustack"
              width="192px"
              className={classes.logoButton}
            ></img>
          </Link>
          <Typography
            className={classNames(
              classes.linksContainer,
              // matches && classes.displayNon
            )}
            align="center"
          >
            <Link
              href="#"
              underline="hover"
              color="textPrimary"
              className={classes.links}
              onClick={handleModal}
            >
              Comunícate con ventas
            </Link>
            <Button
              variant="contained"
              className="btn-pill btn-blue"
              style={{ padding: "4px 21px" }}
            >
              Iniciar Sesión
            </Button>
          </Typography>
          {/* <IconButton
            className={matches ? "" : classes.displayNon}
            aria-label="menu"
            style={{ color: "black",marginRight: "-20px",display:"none" }}
            onClick={handleDrawer}
          >
            <MenuIcon style={{ fontSize: "38px", marginBottom: "5px" }} />
          </IconButton> */}
        </Toolbar>
      </AppBar>

      {/* <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        transitionDuration={{ enter: 500, exit: 1000 }}
      >
        <div className={classes.rootDrawer}>
          <List>
            <ListItem button>
              <ListItemText primary="Iniciar Sesión" />
            </ListItem>

            <ListItem button onClick={handleModal}>
              <ListItemText primary="Comunicate con ventas" />
            </ListItem>
          </List>
        </div>
      </Drawer> */}

      <PopUp openPopup={openModal} setPopup={setOpenModal}/>
    </div>
  );
}
