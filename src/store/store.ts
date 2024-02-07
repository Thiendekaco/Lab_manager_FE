import { compose, createStore, applyMiddleware, Middleware } from 'redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root-saga';

import { rootReducer } from './root-reducer';


export type RootState = ReturnType<typeof rootReducer>

type ExstendPersisconfig = PersistConfig<RootState> & {
  whitelist : (keyof RootState)[]
}

const persistConfig : ExstendPersisconfig= {
  key: 'root',
  storage,
  whitelist: [],
};

declare global{
  interface Window{
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?: typeof compose
  }
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware,
].filter((middleware) : middleware is Middleware => Boolean(middleware));


const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);