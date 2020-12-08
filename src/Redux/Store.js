import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combineReducers from './Reducers';
import rootSaga from './Actions';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
