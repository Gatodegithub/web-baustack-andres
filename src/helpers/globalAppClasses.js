import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  // Clase global!
  "@global": {
    ".btn-pill": { borderRadius: "50rem!important" },
    ".btn-blue": {backgroundColor: "#2680EB", color:"#fff", padding:"9px 38px"},
    ".btn-blue:hover": {backgroundColor: "#2680EB", color:"#fff"},
    // theme spacing?
    ".pt-1": { paddingTop: "1em" },
    ".pt-2": { paddingTop: "2em" },
    ".pt-3": { paddingTop: "2.5em" },
    ".pt-4": { paddingTop: "3.5em" },
    ".pb-1": { paddingBottom: "1em" },
    ".pb-2": { paddingBottom: "2em" },
    ".pb-3": { paddingBottom: "2.5em" },
    ".pb-4": { paddingBottom: "3.5em" },
    ".contVideo": {position:"relative", paddingTop: "56.25%"},
    ".videoResponsive": {position:"absolute",top:"0",left:"0"},
    ".MuiButton-containedPrimary": {color:"#fff"},
    ".MuiButton-outlinedSizeLarge,.MuiButton-containedSizeLarge": {padding:"7px 38px"},
    ".MuiBox-root-23,.MuiBox-root-29": {marginLeft: "1.2em"}
  },
  textColor: {
    [theme.breakpoints.up("md")]: {
      paddingRight: "4.8em",
      paddingLeft: "4.8em",
    },
  },
}));