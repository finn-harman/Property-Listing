import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'spectre.css';
import './global.css';
import './helpers.scss';

import Home from './pages/Home';
import Details from './pages/Details';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/details/:propertyId" component={Details} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
