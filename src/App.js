import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import Home from './Home';
import Basic from './Basic';
import Topics from './Topics';
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
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/basic'>Basic</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
          <li><Link to='/show'>Show</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        <hr/>
          <Match exactly pattern='/' component={Home}/>
          <Match pattern='/basic' component={Basic}/>
          <Match pattern='/topics' component={Topics}/>
          <Match pattern='/show' component={Show}/>
          <Match pattern='/about' component={About}/>
          <Miss component={NotFound}/>
      </div>
    </Router>
  );
};

export default App;
