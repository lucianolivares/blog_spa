import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import { GridList, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import PostCard from './PostCard';
import Header from './Header'


const useStyles = makeStyles({});


const App = () => {
  const [entradas, setEntrada] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    axios.get('/api/entradas')
      .then((response) => response.data)
      .then((data) => {
        setEntrada(data);
      });
  }, []);

  return (
    <Grid container direction="column" className="root">
      <Header />

      <Grid item container>
        <Grid item xs={0} sm={1} />

        <Grid item xs={12} sm={10}>
          {entradas.map((post) => (
            <PostCard author={post.author} title={post.title} body={post.body} />
          ))}
        </Grid>

        <Grid item xs={0} sm={1} />

      </Grid>
      
      <Grid item>Footer</Grid>

    </Grid>
  );
}

export default App;
