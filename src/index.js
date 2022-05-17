/* eslint-disable react/function-component-definition */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './app';
import rootReducer from './reducers';
// this creates the store with the reducers
const store = configureStore({
  reducer: rootReducer,
});

const root = createRoot(document.getElementById('main'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
