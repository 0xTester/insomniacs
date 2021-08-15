import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';

import history from 'utils/history';
import createRootReducer from './reducers';

const devMode = process.env.NODE_ENV === 'development';

const rootReducer = createRootReducer(history);

const middlewares = [
  routerMiddleware(history),
];

if (devMode) {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middlewares,
  devTools: devMode,
});

export default store;
export { store };
