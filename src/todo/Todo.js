import React, { Component } from 'react';
import TodoBanner from './TodoBanner'; 
import TodoList from './TodoList';
import AddItem from './AddItem'; 

class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <TodoBanner textToDisplay="What are you going to do next?"/>
        <TodoList />
        <AddItem />
      </div>
    );
  }
}

export default Todo;
