import uuid from 'uuid';

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: uuid.v1(),    // v1 is time-based id, v4 is random one.
    text
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};
