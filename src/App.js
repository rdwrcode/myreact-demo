import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import Home from './Home';
//import Basic from './Basic';
//import Topics from './Topics';
//import Game from './three/Game';
import Show from './show/Show';
import About from './About';

import NotFound from './NotFound';

import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to='/myreact-demo'>Home</Link></li>
          <li><Link to='/myreact-demo/show'>Show</Link></li>
          <li><Link to='/myreact-demo/about'>About</Link></li>
        </ul>
        <hr/>
          <Match exactly pattern='/myreact-demo' component={Home}/>
          <Match pattern='/myreact-demo/show' component={Show}/>
          <Match pattern='/myreact-demo/about' component={About}/>
          <Miss component={NotFound}/>
      </div>
    </Router>
  );
};

export default App;
