import React from 'react'
import { Link, Match } from 'react-router';
import Topic from './Topic'

const Topics = ({ pathname }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={`${pathname}/components`}>Everything is a component!</Link></li>
      <li><Link to={`${pathname}/render`}>Let React render.</Link></li>
      <li><Link to={`${pathname}/props-state`}>Props and states are friends.</Link></li>
    </ul>

    <Match pattern={`${pathname}/:topicId`} component={Topic}/>
    <Match pattern={pathname} exactly render={() => (
      <h3>Please select a topic</h3>
    )}/>
  </div>
)

export default Topics
