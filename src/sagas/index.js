import { all } from 'redux-saga/effects';
import ContentSaga from './content';

function* rootSaga() {
  yield all([ContentSaga()]);
}

export default rootSaga;
