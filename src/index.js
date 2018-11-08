import React from "react";
import ReactDOM from "react-dom";



import notifyMe from 'Components/Notifications/Notifications';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faQuestion, faPowerOff, faIdBadge, faCertificate, faRibbon } from '@fortawesome/free-solid-svg-icons';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';


import App from './views/main/App'
const initialState = {
}
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);
import './index.css';

library.add(faStroopwafel, faQuestion, faPowerOff, faIdBadge, faCertificate, faRibbon);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("app"));