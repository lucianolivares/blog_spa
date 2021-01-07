import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import { GridList, Grid } from "@material-ui/core";
import PostCard from './PostCard';

export default function App() {
  const [entradas, setEntrada] = useState([]);

  useEffect(() => {
    axios.get('/api/entradas')
      .then((response) => response.data)
      .then((data) => {
        setEntrada(data);
      });
  }, []);

    return (
      <GridList container className="center">
        <Grid item xs={12}>
          {entradas.map((post) => (
            <PostCard author={post.author} title={post.title} body={post.body} />
          ))}
        </Grid>
      </GridList>
    );
  }
