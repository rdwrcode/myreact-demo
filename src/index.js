import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';

import './index.css';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
    </Router>
  ), document.getElementById('root')
);
