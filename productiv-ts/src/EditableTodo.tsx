import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { ITodo } from "./TodoApp";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

interface IFormData {
    title: string;
    description: string;
    priority: number;
}

export interface IEditableTodo {
    todo: ITodo;
    remove: Function;
    update: Function;
}

function EditableTodo({ todo, remove, update }: IEditableTodo): JSX.Element {
  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit(): void {
    setIsEditing(edit => !edit);
  }

  /** Call remove fn passed to this. */
  function handleDelete(): void {
    return remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData: IFormData): void {
    update({ id: todo.id, ...formData});
    setIsEditing(false);
  }

  return (
      <div className="EditableTodo">
        {isEditing
            ? (
                <TodoForm
                    initialFormData={ todo }
                    handleSave={handleSave} />
            ) : (
                <div className="mb-3">
                  <div className="float-end text-sm-end">
                    <button
                        className="EditableTodo-toggle btn-link btn btn-sm"
                        onClick={toggleEdit}>
                      Edit
                    </button>
                    <button
                        className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
                        onClick={handleDelete}>
                      Del
                    </button>
                  </div>
                  <Todo todo={todo} />
                </div>
            )
        }
      </div>
  );
}

export default EditableTodo;
