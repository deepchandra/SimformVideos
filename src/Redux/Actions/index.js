import {all} from 'redux-saga/effects';
import videoList from './Video/VideoList';

const rootSaga = function* rootSaga() {
  yield all([videoList()]);
};

export default rootSaga;
