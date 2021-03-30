import {
  Box,
  Button,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  templateImg: {
    backgroundImage:
      "url(https://dl.airtable.com/exploreCoverImages%2FWN65pVXTeeg7T7DwyLpI_lightcrm_smiling.jpg)",
    height: "200px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "6px",
    marginBottom: "2em",
  },
  useTemplate: {
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(4),
      width: "100%",
    }
  }
}));

export default function Crm() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} lg={12}>
        <Box className={classes.templateImg}></Box>
      </Grid>
      <Grid item sm={12} md={8} lg={8}>
        <Box>
          <Typography
            variant="h3"
            align="left"
            style={{ fontWeight: 500 }}
            gutterBottom
          >
            CRM Template
          </Typography>
          <Typography color="textPrimary">
            Most CRM products make a few too many assumptions about how a CRM
            should work for you. We don't pretend to understand your business
            better than you do. Get this lightweight CRM up and running in a
            matter of minutes and customize it to fit your unique needs today.
            <br />
            <br />
            This template is perfect for startup founders, entrepreneurs, and
            small business owners who need to manage relationships of all types.
            <br />
            <br />
            It will give you a starting point to manage many different important
            strategic relationships for your startup or small business,
            including but not limited to customers, distribution partners,
            investors, and PR firms.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} lg={4} align="center">
        <Button
          variant="contained"
          color="primary"
          size="medium"
          className={classes.useTemplate}
        >
          Usar template
        </Button>
      </Grid>
    </Grid>
  );
}
