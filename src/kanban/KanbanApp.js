import React from 'react';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import storage from './storage';

import './Kanban.css';

const APP_STORAGE = 'redux_kanban';

const store = configureStore(storage.get(APP_STORAGE) || {});
console.log(store.getState());

store.subscribe(() => {
  if(!storage.get('debug')) {
    storage.set(APP_STORAGE, store.getState());
  }
});

const KanbanApp = () => (
  <Root store={store} />
); 

export default KanbanApp;
