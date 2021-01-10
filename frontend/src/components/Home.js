import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core'
import PostCard from './PostCard';
import axios from 'axios'; 
import Entrada from './Entrada'
import Footer from './Footer';

export default function Home() {

  const [entradas, setEntrada] = useState([]);

  useEffect(() => {
    axios.get('/api/entradas')
      .then((response) => response.data)
      .then((data) => {
        setEntrada(data);
      });
  }, []);


  function renderNews() {
    return (
      entradas.map((post) => (
        <PostCard author={post.author} title={post.title} body={post.body} />
      ))
    )
  };


  return (
    <Router>

      <Grid item container>
        <Grid item xs={0} sm={1} />

        <Grid item xs={12} sm={10}>
          <Switch>
            <Route 
              exact
              path="/"
            />
            <Route
              path="/news"
              render={() => {
                return renderNews()
              }}
            />
            <Route
              path="/about"
            />
            <Route
              path="/gallery"
            />
            <Route
              path="/calendar"
            />
            <Route
              path="/detail/:title"
              component={Entrada}
            />
         </Switch>
        </Grid>

        <Grid item xs={0} sm={1} />

      </Grid>

      <Footer />
    </Router>
  )
}
