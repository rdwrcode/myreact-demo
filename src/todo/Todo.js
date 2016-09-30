import React, { Component } from 'react';
import TodoBanner from './TodoBanner'; 
import AddItem from './AddItem'; 

import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <TodoBanner textToDisplay="What are you going to do next?"/>
        <AddItem />
        <TodoBanner textToDisplay="created by rdwrcode"/>
      </div>
    );
  }
}

export default Todo;
