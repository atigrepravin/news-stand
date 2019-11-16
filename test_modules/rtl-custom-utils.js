import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from '../src/store/reducers';

const rtl = require('@testing-library/react');

const AllTheProviders = ({ children }) => {
  const store = createStore(Reducer);
  return <Provider store={store}>{children}</Provider>;
};
const customRender = (ui, options) =>
  rtl.render(ui, { wrapper: AllTheProviders, ...options });

module.exports = {
  ...rtl,
  render: customRender
};
