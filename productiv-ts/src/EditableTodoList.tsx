import React from "react";
import EditableTodo from "./EditableTodo";
import { ITodo } from "./TodoApp";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

export interface IEditableTodos {
    todos: ITodo[];
    remove: Function;
    update: Function;
}

function EditableTodoList({ todos, update, remove }: IEditableTodos): JSX.Element[] {
  return todos.map(todo => (
      <EditableTodo
          key={todo.id}
          todo={todo}
          update={update}
          remove={remove}
      />
  ));
}

export default EditableTodoList;
