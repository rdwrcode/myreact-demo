import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import Home from './Home';
import Show from './show/Show';
//import KanbanApp from './kanban/KanbanApp';
import Kanban from './kanban2/Kanban';
import Rubix from './rubix/Rubix';
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
          <li><Link to='/myreact-demo/kanban'>Kanban</Link></li>
          <li><Link to='/myreact-demo/rubix'>Rubix</Link></li>
          <li><Link to='/myreact-demo/about'>About</Link></li>
        </ul>
        <hr/>
          <Match exactly pattern='/myreact-demo' component={Home}/>
          <Match pattern='/myreact-demo/show' component={Show}/>
          <Match pattern='/myreact-demo/kanban' component={Kanban}/>
          <Match pattern='/myreact-demo/rubix' component={Rubix}/>
          <Match pattern='/myreact-demo/about' component={About}/>
          <Miss component={NotFound}/>
      </div>
    </Router>
  );
};

export default App;
