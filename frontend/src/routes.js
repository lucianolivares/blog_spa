  
import React from "react";
import { Route } from "react-router-dom";

import Entrada from './components/Entrada'

import LastNews from './containers/LastNews';
import About from './containers/About';
import Account from './containers/Account'
import Calendar from './containers/Calendar';
import News from './containers/News';
import Login from './containers/Login'

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={LastNews}/>
    <Route path="/news" component={News}/>
    <Route path="/about" component={About}/>
    <Route path="/account" component={Account}/>
    <Route path="/login" component={Login}/>
    <Route path="/calendar" component={Calendar} />
    <Route path="/detail/:slug" component={Entrada}/>
  </div>
);

export default BaseRouter;