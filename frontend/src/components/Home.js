import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core'
import PostCard from './PostCard';
import axios from 'axios'; 
import Entrada from './Entrada'

export default function Home() {

  const [entradas, setEntrada] = useState([]);

  useEffect(() => {
    axios.get('/api/entradas')
      .then((response) => response.data)
      .then((data) => {
        setEntrada(data);
      });
  }, []);


  function renderEntradas() {
    return (
      entradas.map((post) => (
        <PostCard author={post.author} title={post.title} body={post.body} />
      ))
    )
  };

  return (
    <Router>
      <Switch>
        <Route 
          exact
          path="/"
          render={() => {
            return renderEntradas()
          }}
        />
        <Route
          path="/entrada/:title/"
          component={Entrada}
        />
      </Switch>
    </Router>
  )
}
