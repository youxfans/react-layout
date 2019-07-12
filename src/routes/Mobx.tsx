import React from "react";
import { observable, computed } from "mobx";
import { observer } from "mobx-react";

interface todo { title: number, finished?: boolean }


class TodoList {
  @observable todos: todo[] = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

type TodoListViewProps = { todoList: TodoList }

@observer
class TodoListView extends React.Component<{ todoList: TodoList }> {
  // constructor(props: { todoList: TodoList}) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <ul>
          {this.props.todoList.todos.map(todo => (
            <TodoView todo={todo} key={todo.title} />
          ))}
        </ul>
        <button>Add</button>
        Tasks left: {this.props.todoList.unfinishedTodoCount}
      </div>
    )
  }
}

// const TodoListView: FunctionComponent<TodoListViewProps> = ({ todoList }) => {
//   <div>
//     <ul>
//       {todoList.todos.map(todo => (
//         <TodoView todo={todo} key={todo.title} />
//       ))}
//     </ul>
//     <button>Add</button>
//     Tasks left: {todoList.unfinishedTodoCount}
//   </div>
// }

const TodoView = observer(({ todo }) => (
  <li>
    <input type="checkbox" defaultChecked={todo.finished} onClick={() => (todo.finished = !todo.finished)} />
    {todo.title}
  </li>
))

const store = new TodoList();
store.todos.push(
  {
    title: 1,
    finished: true
  },
  {
    title: 2,
  },
);

export default function Mobx () {
  return (
    <div>
      <TodoListView todoList={store} />
    </div>
  )
}