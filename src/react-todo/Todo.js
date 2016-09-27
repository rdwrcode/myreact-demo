import React from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

import './Todo.css';

const Todo = () => (
  <div className="Todo">
    <div className="Todo-content">
      <p>What are you going to do next?</p>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  </div>
);

export default Todo;
