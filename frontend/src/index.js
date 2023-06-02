import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {positions, transitions, Provider as AlertProvider} from "react-alert";
import AlertTemplate from "react-alert-template-basic"

import App from './App';
import store from './store';
import './index.css';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
}

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>,
  root
);

