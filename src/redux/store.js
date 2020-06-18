// middleware receives action and do something with it
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'


import rootReducer from './root-reducer';

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//this calls our PersistStore then passes in our store
export const persistor = persistStore(store);
export default {store, persistor};

