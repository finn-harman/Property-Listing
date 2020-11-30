import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import 'spectre.css';


import Home from './pages/Home';
import Details from './pages/Details'

ReactDOM.render(
  <Router>
    <Route path="/"><Home /> </Route>
    <Route path="/details/:propertyId"><Details /> </Route>
  </Router>,
  document.getElementById("root")
);
