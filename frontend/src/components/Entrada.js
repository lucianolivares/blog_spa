import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'; 
import { CardMedia, Grid, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 20,
    [theme.breakpoints.up("sm")]: {
      color: "blue"
    }
  }
}));


export default function Entrada() {
  const classes = useStyles()
  const [ entrada, setEntrada ] = useState({})
  let { title } = useParams()

  useEffect(() => {
    axios.get('/api/entrada/' + title)
      .then((response) => response.data )
      .then((data) => {
        setEntrada(data)
      })
  }, []);

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
