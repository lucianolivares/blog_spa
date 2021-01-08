import React, { useState, useEffect } from "react";

import { Grid, Divider } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';


const useStyles = makeStyles({
  sep: {
    marginBottom: 10,
  }
});


export default function App() {

  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Header />
      <Divider className={classes.sep} variant="middle" />

      <Grid item container>
        <Grid item xs={0} sm={1} />

        <Grid item xs={12} sm={10}>
          <Home />
        </Grid>

        <Grid item xs={0} sm={1} />

      </Grid>
      
      <Footer />

    </Grid>
  );
}
