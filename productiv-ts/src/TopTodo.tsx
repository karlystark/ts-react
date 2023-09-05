import React from "react";
import { ITodo } from "./TodoApp";
import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

interface TodosInterface {
  todos: ITodo[];
}

function TopTodo({ todos }: TodosInterface): (JSX.Element | null) {
  if (todos.length === 0) return null;

  // lowest-priority # is the highest priority
  let top = todos.reduce(
      (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  return <Todo todo={top} />;
}

export default TopTodo;