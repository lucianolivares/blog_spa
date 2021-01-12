import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'; 
import { CardMedia, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 20,
    [theme.breakpoints.up("sm")]: {
      color: "blue"
    }
  }
}));


export default function Entrada(props) {
  const classes = useStyles()
  const [ entrada, setEntrada ] = useState({})
  const title = props.match.params.title;
  const link = "http://192.168.20.34:8000/api/entrada/" + title

  useEffect(() => {
    async function fetichData() {
      const response = await axios(link)
      setEntrada(response.data);
    }
    console.log("fetching")
    fetichData();
  }, [link]);


  return (
    <Grid container >
      <CardMedia
        className={classes.root}
        component="img"
        image="https://dummyimage.com/600x400/000/fff"
      />
      <Grid item xs={12} className={classes.root}>
        <Typography variant="h3" className={classes.root}>
          {entrada.title}
        </Typography>
      </Grid>
      <Grid item xs={6} className={classes.root}>
        <Typography>Autor: {entrada.author}</Typography>
      </Grid>
      <Grid item xs={6} className={classes.root}>
        <Typography>Fecha: SIN FECHA</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography>{entrada.body}</Typography>
      </Grid>
    </Grid>

  )
}
