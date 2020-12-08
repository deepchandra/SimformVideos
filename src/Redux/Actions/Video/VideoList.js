import {put, takeLatest, call} from 'redux-saga/effects';
import ApiCaller from '@Redux/ApiCaller';

const callAPI = () => {
  return ApiCaller(
    `https://private-c31a5-task27.apiary-mock.com/videos`,
    'get',
  ).then((response) => response);
};

export default function* Login() {
  yield takeLatest('GET_VIDEOS', function* performAction() {
    yield put({type: 'GET_VIDEOS_INITIATED'});
    try {
      const data = yield call(callAPI.bind(this));
      yield put({type: 'GET_VIDEOS_SUCCESS', payload: data});
    } catch (error) {
      yield put({type: 'GET_VIDEOS_FAILED', payload: error});
    }
  });
}
