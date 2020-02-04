import todolistReducer from '../../src/reducer/todolist';
import { fetchDataSuccess } from '../../src/action/todolist';

describe('TodoList Reducer', () => {
  test('TodolistReducer_Action_FetchData_Success', () => {
    const assertState = todolistReducer({}, fetchDataSuccess('test'));
    expect(assertState).toEqual({ data: 'test' });
  });
});
