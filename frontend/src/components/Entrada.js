import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useParams } from 'react-router-dom';
import { Button, CardMedia, Grid, Typography } from '@material-ui/core';
import axiosInstance from '../axios'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 20,
    [theme.breakpoints.up("sm")]: {
      color: "black"
    }
  },
  button : {
    position: 'absolute',
    color: 'white',
    top: 10,
    left: '10%',
    transform: 'translateX(-30%)'
  }
}));


export default function Entrada() {
  const classes = useStyles()
  const [ post, setPost ] = useState({})
  const { slug } = useParams();

  useEffect(() => {
		axiosInstance.get(slug).then((res) => {
      setPost(res.data)
      console.log(res.data)
    })
	}, [setPost]);


  return (
    <Grid container >
      <CardMedia
        className={classes.root}
        component="img"
        image="https://source.unsplash.com/random"
      />
      <Button 
        component={Link}
        to= {"/news"}
        variant="contained"
        color="secondary"
        className={classes.button}>Regresar</Button>

      <Grid item xs={12} className={classes.root}>
        <Typography variant="h3" className={classes.root}>
          {post.title}
        </Typography>
      </Grid>
      <Grid item xs={6} className={classes.root}>
        <Typography>Autor: {post.author}</Typography>
      </Grid>
      <Grid item xs={6} className={classes.root}>
        <Typography>Fecha: SIN FECHA</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography>{post.content}</Typography>
      </Grid>
    </Grid>

  )
}
