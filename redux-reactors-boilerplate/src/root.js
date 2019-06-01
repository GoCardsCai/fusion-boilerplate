import React from 'react';

import {Router, Route, Switch} from 'fusion-plugin-react-router';

import Header from './components/header.js';
import Home from './pages/home.js';
import PageNotFound from './pages/pageNotFound.js';
import Styles from './pages/styles.js';
import Weather from './pages/weather.js';
//<Route exact path="/weather" component={Weather} />
const root = (
  <div>
  	<Header />
    <Weather></Weather>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/styles" component={Styles} />

      <Route component={PageNotFound} />
    </Switch>
  </div>
);
export default root;
