import React from 'react';

import {Route, Switch} from 'fusion-plugin-react-router';

import Header from './components/header.js';
import Home from './pages/home.js';
import PageNotFound from './pages/pageNotFound.js';
//<Route exact path="/weather" component={Weather} />
const root = (
  <div>
  	<Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);
export default root;
