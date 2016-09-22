import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import Home from './Home';
import About from './About';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        <hr/>
          <Match exactly pattern='/' component={Home}/>
          <Match pattern='/about' component={About}/>
          <Miss component={NotFound}/>
      </div>
    </Router>
  );
};

export default App;
