import React from 'react'
import Todo from './todo/Todo'
import Hello from './basic/Hello'
import Box from './basic/Box'
import Person from './basic/Person'
import ClickCounter from './basic/ClickCounter'
import StopWatch from './basic/StopWatch'
import RepoList from './basic/RepoList'
import AnimatedDot from './basic/AnimatedDot'

import './App.css';

const Basic = () => (
  <div>
    <h2>Basic</h2>
    <Hello user={{firstName: 'rdwrcode', lastName: '@GitHub'}} />
    <Todo />
    <ClickCounter />
    <StopWatch />
    <Person
      name="rdwrcode"
      title="JavaScript Nerd"
      avatar="https://avatars1.githubusercontent.com/u/21320188"
      twitter="rdwrcode"
      github="rdwrcode"
    />
    <RepoList user="rdwrcode" />
    <Box size="large" style={{backgroundColor: '#e8117f'}} />
    <Box size="small" style={{backgroundColor: 'steelblue'}} />
    <AnimatedDot />
  </div>
)

export default Basic
