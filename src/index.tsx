import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import { history, configureStore } from './store';

import Main from './components/main/main';

import 'antd/dist/antd.css';
import './index.css';

const { store, persistor } = configureStore();

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Main />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
