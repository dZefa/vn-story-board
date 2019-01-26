import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import * as storage from 'localforage';
import thunk from 'redux-thunk';

import createRootReducer from '../reducers';

const persistConfig = {
  key: 'vn-story-board',
  storage
};

export const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, createRootReducer(history));

export const configureStore = (preloadedState?: any) => {
  const store = createStore(
    persistedReducer,
    preloadedState,
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
      )
    )
  );

  const persistor = persistStore(store);

  return { store, persistor };
};


