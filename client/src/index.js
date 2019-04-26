import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';


import './index.css';
// import reducer from './reducers';
import AppContainer from './components/App/App';



// const middleware = [thunk];
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }
// const store = createStore(reducer, applyMiddleware(...middleware));
const rootElement = document.querySelector('.page');
ReactDOM.render(
  // <Provider>
    // <Router basename="/encryptApp">
      <AppContainer />,
    // </Router>,
  // </Provider>,
  rootElement,
);

