import React, { useState, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../action/todolist';
import { Link } from 'react-router-dom';

interface TaskProps {
  task: string;
}

interface TodoListState {
  todoList: string[];
}

const Task = (props: TaskProps) => {
  const { task } = props;
  return (
    <li>
      <Link to={`/list/${task}`}>{task}</Link>
    </li>
  );
};

const TodoListPage = () => {
  const todoList = useSelector((state: TodoListState) => state.todoList);
  const todoListElm = todoList.map((task: string) => (
    <ul key={task}>
      <Task task={task} />
    </ul>
  ));
  return (
    <div>
      <div>其他內容什麼的</div>
      {todoListElm}
    </div>
  );
};

const CurrentTask = () => {
  const todoList = useSelector((state: TodoListState) => state.todoList);
  return <div>{`下一件事要做：${todoList[0]}`}</div>;
};

const Main = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: TodoListState) => state.todoList);
  const [newTodo, setNewTodo] = useState('');
  return (
    <div data-testid="todolistBlock">
      <span>{`代辦事項數：${todoList.length}`}</span>
      <div>
        <input
          value={newTodo}
          onChange={e => {
            setNewTodo(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            dispatch(addTodo(newTodo));
          }}
        >
          新增事項
        </button>
      </div>
      <TodoListPage />
      <CurrentTask />
    </div>
  );
};

export default Main;
