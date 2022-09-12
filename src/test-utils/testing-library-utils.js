import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router } from 'react-router-dom';
import { render as realRender } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { reducers } from '../app/store';

const render = ui => {
  const store = configureStore({
    reducer: reducers,
  });
  const renderResult = realRender(
    <Provider store={store}>
      <Router>{ui}</Router>
    </Provider>,
  );
  return {
    ...renderResult,
    store,
  };
};
export default render;
