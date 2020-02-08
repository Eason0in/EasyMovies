export const ADD_TODO = 'ADD_TODO';
export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const addTodo = (todo: string) => ({
  type: ADD_TODO,
  payload: {
    todo,
  },
});

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN,
});

export const fetchDataSuccess = (data: {}) => ({
  type: FETCH_DATA_SUCCESS,
  payload: { data },
});
