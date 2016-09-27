import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Todo from './Todo';

const TodoApp = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);

export default TodoApp;
