  
import React from "react";
import { Route } from "react-router-dom";

import Entrada from './components/Entrada'

import LastNews from './containers/LastNews';
import About from './containers/About';
import Gallery from './containers/Gallery'
import Calendar from './containers/Calendar';
import News from './containers/News';

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={LastNews}/>
    <Route path="/news" component={News}/>
    <Route path="/about" component={About}/>
    <Route path="/gallery" component={Gallery}/>
    <Route path="/calendar" component={Calendar} />
    <Route path="/detail/:slug" component={Entrada}/>
  </div>
);

export default BaseRouter;