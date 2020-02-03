import { all } from 'redux-saga/effects';
import todolistSaga from '../action/todolist';

function* rootSaga() {
  yield all([todolistSaga()]);
}

export default rootSaga;
