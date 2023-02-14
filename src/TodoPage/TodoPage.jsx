import React, {useContext, useEffect, useReducer, useState } from "react";
import "./todopage.css";
import { TodoArray } from "../Context";
import { motion } from "framer-motion";
import TodoList from "../TodoList/TodoList";
import { todoReducer } from "../Reducer";

const TodoPage = ({ name, setName }) => {
  const { todoList } = useContext(TodoArray);
  const [selectedTodo, setSelectedTodo] = useState("all");
  const [todoInput, setTodoInput] = useState("");

  const filterTodos = (todos) => {
    if (selectedTodo === "all") {
      return todos;
    } else if (selectedTodo === "completed") {
      return todos.filter((todo) => todo.completed);
    } else if (selectedTodo === "incomplete") {
      return todos.filter((todo) => !todo.completed);
    }
  };

  const initialAnimation = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  
  const [todo, dispatch] = useReducer(todoReducer, todoList, () => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo, setName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todoInput });
    setTodoInput("");
  };

  return (
    <motion.div
      className="todo_page"
      variants={initialAnimation}
      initial="hidden"
      animate="animate"
    >
      <div className="todo_page_header">
        <h1>{name}'s Todo List</h1>
      </div>
      <div className="todo_page_form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            className="todo_page_input"
            placeholder="Add a Todo..."
          />
        </form>
        <select defaultValue={"all"} onChange={(e) => setSelectedTodo(e.target.value)}>
          <option value={"all"}>All</option>
          <option value={"completed"}>Completed</option>
          <option value={"incomplete"}>Incomplete</option>
        </select>
      </div>
      <TodoList todo={filterTodos(todo)} dispatch={dispatch} />
    </motion.div>
  );
};

export default TodoPage;
