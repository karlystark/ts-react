import React from "react";
import { ITodo } from "./TodoApp";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

interface TodoInterface {
  todo: ITodo;
}

function Todo({ todo }: TodoInterface): JSX.Element {
  return (
      <div className="Todo">
        <div><b>{todo.title}</b> <small>(priority: {todo.priority})</small></div>
        <div><small>{todo.description}</small></div>
      </div>
  );
}

export default Todo;
