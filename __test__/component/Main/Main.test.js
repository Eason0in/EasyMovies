import React from 'react';
import { createStore } from 'redux';
import * as ReactRedux from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import reducer from '../../../src/reducer/todolist';
import Main from '../../../src/component/Main';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const { Provider } = ReactRedux;

expect.extend({ toBeInTheDocument });

const generateComponent = (component, initState) => {
  const store = createStore(reducer, initState);
  const history = createMemoryHistory();
  return render(
    <Provider store={store}>
      <Router history={history}>{component}</Router>
    </Provider>
  );
};

describe('Main', () => {
  test('Main_ClickTOdoListLink_RenderTodoList', () => {
    const { getByTestId, queryByTestId } = generateComponent(<Main />);
    // expect(getByTestId('contentBlock')).toBeInTheDocument();
    const todolistLink = getByTestId('todolistLink');
    fireEvent.click(todolistLink);
    // expect(queryByTestId('contentBlock')).not.toBeInTheDocument();
    expect(getByTestId('todolistBlock')).toBeInTheDocument();
  });
});