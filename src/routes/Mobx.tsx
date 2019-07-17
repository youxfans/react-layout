import React, { useState } from "react";
import { observable, computed, action } from "mobx";
import { observer } from "mobx-react";
import { Button, Checkbox, Input } from "antd";

interface todo { key: number, title: string, finished?: boolean }

class TodoList {
  @observable todos: todo[] = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
  @action.bound
  add(title: string) {
    this.todos.push({
      key: Math.random(),
      title,
    })
  }
  remove(key: number) {
    this.todos = this.todos.filter(todo => todo.key !== key);
  }
  reset() {
    this.todos = []
  }
}

type TodoListViewProps = { todoList: TodoList }

// @observer
// class TodoListView extends React.Component<TodoListViewProps> {
//   // constructor(props: { todoList: TodoList}) {
//   //   super(props);
//   // }
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.props.todoList.todos.map(todo => (
//             <TodoView todo={todo} key={todo.title} />
//           ))}
//         </ul>
//         <Button>Add</Button>
//         Tasks left: {this.props.todoList.unfinishedTodoCount}
//       </div>
//     )
//   }
// }

const TodoListView: React.SFC<TodoListViewProps> = observer((props) => {
  const [ newTodo, setNewTodo ] = useState('');
  return (
    <div>
      <p>未完成的任务数: {props.todoList.unfinishedTodoCount}</p>
      <Input value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <Button onClick={() => props.todoList.add(newTodo)}>Add</Button>
      <Button onClick={() => props.todoList.reset()}>Reset</Button>
      <ul>
        {props.todoList.todos.map(todo => (
          <TodoView todo={todo} key={todo.key.toString()} onRemove={(key: number) => props.todoList.remove(key)} />
        ))}
      </ul>
    </div>
  )
})

const TodoView = observer(({ todo, onRemove }) => (
  <li>
    <Checkbox defaultChecked={todo.finished} onClick={() => (todo.finished = !todo.finished)} />
    {todo.title}
    <Button onClick={() => onRemove(todo.key)}>Reset</Button>
  </li>
))

const store = new TodoList();
store.todos.push(
  {
    key: 1,
    title: '吃饭饭',
    finished: true
  },
  {
    key: 2,
    title: '打豆豆',
  },
);

export default () => <TodoListView todoList={store} />;