import React from 'react';
import { createStore } from 'redux';
import * as ReactRedux from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import reducer from '../../../src/reducer/todolist';
import Content from '../../../src/component/Content';

expect.extend({ toBeInTheDocument });

const { Provider } = ReactRedux;

const generateComponent = (component, initState) => {
  const store = createStore(reducer, initState);
  return render(<Provider store={store}>{component}</Provider>);
};

describe('Content', () => {
  // 1.確認 Content 正常 render
  test('Content_Check_Render', () => {
    const { getByTestId } = generateComponent(<Content />);
    expect(getByTestId('contentBlock')).toBeInTheDocument();
  });

  // 執行 Dispatch
  test('Content_Click_ExecuteDispatch', () => {
    const mockDispatch = jest.fn();
    const mockUseDispatch = jest.spyOn(ReactRedux, 'useDispatch');
    mockUseDispatch.mockReturnValue(mockDispatch);
    const { getByTestId } = generateComponent(<Content />);

    const fetchContentDataBtn = getByTestId('fetchContentDataBtn');
    fireEvent.click(fetchContentDataBtn);

    expect(mockDispatch.mock.calls[0][0]).toEqual({ type: 'FETCH_DATA_BEGIN' });
  });

  test('Content_Check_Render', () => {
    const testInitState = { data: { test: 'test' } };
    const { getByTestId } = generateComponent(<Content />, testInitState);
    const contentBlock = getByTestId('contentData');
    expect(contentBlock.textContent).toBe(JSON.stringify(testInitState.data));
  });
});
