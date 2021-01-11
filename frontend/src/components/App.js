import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core'

import Entrada from './Entrada'
import BottomBar from './BottomBar';
import LastNews from './LastNews';
import About from './About';
import Gallery from './Gallery'
import Calendar from './Calendar';
import News from './News';


export default function App() {

  return  (
    <Router>

      <Grid item container>
        <Grid item xs={0} sm={1} />

        <Grid item xs={12} sm={10}>
          <Switch>
            <Route 
              exact
              path="/"
              component={LastNews}
            />
            <Route
              path="/news"
              component={News}
            />
            <Route
              path="/about"
              component={About}
            />
            <Route
              path="/gallery"
              component={Gallery}
            />
            <Route
              path="/calendar"
              component={Calendar}
            />
            <Route
              path="/detail/:title"
              component={Entrada}
            />
         </Switch>
        </Grid>

        <Grid item xs={0} sm={1} />

      </Grid>

      <BottomBar />
    </Router>
  )
}
