import React from "react";
import { Grid, Divider } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
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

      <Home />
      
    </Grid>
  );
}
