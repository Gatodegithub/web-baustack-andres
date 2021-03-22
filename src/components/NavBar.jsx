import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Typography,
  Link,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  Drawer,
  IconButton,
} from "@material-ui/core";
import logo from "../assets/img/logo.png";
import classNames from "classnames";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
import PopUp from "./PopUp.jsx";
import MenuIcon from '@material-ui/icons/Menu';

// https://material-ui.com/system/display/#display   << me ahorro el codigo del display menu
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 5px 0px",
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
    [theme.breakpoints.down("sm")]:{
      padding:"0px 10px",
    }
  },
  logoButton: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(2),
      // width: "160px",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(0),
      // width: "160px",
    },
  },
  linksContainer: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: theme.spacing(8),
    [theme.breakpoints.down("xs")]: {
      paddingRight: theme.spacing(0),
    },

    "& button": {
      [theme.breakpoints.down("xs")]: {
        lineHeight: "1.4",
      },
    },
  },
  links: {
    marginRight: theme.spacing(3),

    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(0),
      lineHeight: "1.4",
    },
  },
  displayNon: {
    display: "none",
  },
  rootDrawer: {
    '& ul': {
      width:"100%",
      padding: "0px",
    },
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    "& .MuiListItem-gutters": {
      padding: "35px 0px",
      textAlign: "center",
      borderBottom: "1px solid #ff660060",
      backgroundColor: "#ff660030",
      "& span":{
        fontSize: "25px",
        // fontWeight:"200",
      }
    },
  },
}));

export default function NavBar() {
  const matches = useMediaQuery("(max-width:599px)");
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const handleDrawer = () => {
    setOpen(true);
  };

  const handleModal = () => {
    setOpenModal(true);
    setOpen(false);
  };

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
              matches && classes.displayNon
            )}
            align="center"
          >
            <Link
              href="#"
              underline="none"
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
          <IconButton
            className={matches ? '': classes.displayNon}
            aria-label="menu"
            style={{ color: "black",marginRight: "-20px"}}
            onClick={handleDrawer}
          >
            <MenuIcon style={{ fontSize: "40px", marginBottom: "5px" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        transitionDuration={{ enter: 500, exit: 500 }}
      >
        <div className={classes.rootDrawer}>
          <List>
            {/* <ListItem button>
              <img component="img" src={logo} alt="logo"></img>
            </ListItem> */}

            <ListItem button>
              <ListItemText primary="Iniciar Sesión" />
            </ListItem>

            <ListItem button onClick={handleModal}>
              <ListItemText primary="Comunicate con ventas" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      {/* <Box display={{ xs: "block", sm: "none" }}>
        <Typography
          className={classNames(
            classes.linksContainer
          )}
          style={{justifyContent:"space-evenly"}}
        >
          <Link
            href="#"
            underline="always"
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
      </Box> */}

      <PopUp openPopup={openModal} setPopup={setOpenModal} />
    </div>
  );
}
