import React from "react";
import "./todolist.css";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
const TodoList = ({ todo, dispatch }) => {
  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", id });
  };
  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };
  return (
    <div className="todo_list">
      {todo &&
        todo.map((todo) => (
          <div className="todo_items" key={todo.id}>
            <input
              type="text"
              value={todo.todo}
              disabled
              className={`list_items${todo.completed ? "_completed" : ""}`}
            />
            <AiOutlinePlus
              className="complete"
              onClick={() => toggleTodo(todo.id)}
            />
            <RxCross1 className="delete" onClick={() => deleteTodo(todo.id)} />
          </div>
        ))}
    </div>
  );
};

export default TodoList;
