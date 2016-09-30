import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import configStore from './store';
import storage from './storage';

const APP_STORAGE = 'kanban';

let store = configStore(storage.get(APP_STORAGE) || {});

function onReset() {
  store = storage.set(APP_STORAGE, {});
  window.location.reload();
}

store.subscribe(() => {
  if(!storage.get('debug')) {
    storage.set(APP_STORAGE, store.getState());
  }
});

const Kanban = () => (
  <div>
    <Provider store={store}>
      <App onReset={onReset}/>
    </Provider>
  </div>
); 

export default Kanban;
