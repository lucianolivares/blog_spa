import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { CardMedia, Grid, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';

export default function Entrada(props) {
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
    <Grid container>
      <CardMedia
        component="img"
        image="https://dummyimage.com/600x400/000/fff"
      />
      <Grid item xs={6}>
        <Typography>Autor: {entrada.author}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Fecha: SIN FECHA</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography>{entrada.body}</Typography>
      </Grid>
    </Grid>

  )
}
