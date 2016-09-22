import React from 'react'
import logo from './logo.svg';
import './About.css';

const About = () => (
  <div>
    <h2>About</h2>
      <div className="About">
        <div className="About-header">
          <img src={logo} className="About-logo" alt="logo" />
          <h2>React Demo</h2>
        </div>
      </div>
  </div>
)

export default About
