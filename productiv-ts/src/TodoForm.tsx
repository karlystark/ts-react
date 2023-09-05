import React, { useState } from "react";

const defaultInitialFormData = { title: "", description: "", priority: 1 };

/** Form for adding.
 *
 * Props:
 * - initialFormData
 * - handleSave: function to call in parent.
 *
 * { TodoApp, EditableTodo } -> TodoForm
 */

interface TodoFormInterface {
  initialFormData: {
    title: string;
    description: string;
    priority: number;
  };
  handleSave: Function;
}

interface FormDataInterface {
    title: string;
    description: string;
    priority: number;
}

function TodoForm({ initialFormData = defaultInitialFormData, handleSave }: TodoFormInterface): JSX.Element {
  const [formData, setFormData] = useState<FormDataInterface>(initialFormData);

  /** Update form input. */
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value }= evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt: React.FormEvent): void {
    evt.preventDefault();
    handleSave(formData);
    setFormData(initialFormData);
  }

  return (
      <form className="NewTodoForm" onSubmit={handleSubmit}>

        <div className="mb-3">
          <input
              id="newTodo-title"
              name="title"
              className="form-control"
              placeholder="Title"
              onChange={handleChange}
              value={formData.title}
              aria-label="Title"
          />
        </div>

        <div className="mb-3">
          <textarea
              id="newTodo-description"
              name="description"
              className="form-control"
              placeholder="Description"
              onChange={handleChange}
              value={formData.description}
              aria-label="Description"
          />
        </div>

        <div className="mb-3">
          <div className="w-75 d-flex justify-content-between">
            <label htmlFor="newTodo-priority"
                   className="d-inline-flex">Priority:&nbsp;&nbsp;
            </label>
            <select id="newTodo-priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="form-control form-control-sm d-inline-flex"
            >
              <option value={1}>Ultra-Über</option>
              <option value={2}>Über</option>
              <option value={3}>Meh</option>
            </select>
          </div>
          <button className="btn-primary btn btn-sm NewTodoForm-addBtn">
            Gø!
          </button>
        </div>

      </form>
  );
}

export default TodoForm;
