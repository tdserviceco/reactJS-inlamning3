import React from 'react';
import ReactDOM from 'react-dom';
import favicons from './favicons';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducer from './reducers';
import './css/styles.scss';

// Redux + Redux tools for chrome/edge
// homepage: https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));