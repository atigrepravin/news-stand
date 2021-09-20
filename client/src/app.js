import React from 'react';
import Routes from './routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './store/reducers';

const store = createStore(Reducers);

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
