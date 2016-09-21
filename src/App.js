import React, { Component } from 'react';
import NavLink from './NavLink';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Demo</h2>
          <span><NavLink to="/home" >Home </NavLink></span>
          <span><NavLink to="/about">About </NavLink></span>
        </div>
      </div>
    );
  }
}

export default App;
