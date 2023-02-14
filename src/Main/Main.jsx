import React, { useEffect, useState } from "react";
import "./main.css";
import TodoPage from "../TodoPage/TodoPage";
import { motion } from "framer-motion";
const Main = () => {
  const [name, setName] = useState("");
  const [todoPage, setTodoPage] = useState(false);


  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setTodoPage(true);
    }
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setTodoPage(true);
    }
  };

  const initialAnimation = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: [1, 1.5, 1],
      transition: {
        duration: 1.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <motion.div className="main" variants={initialAnimation} initial="initial" animate="animate">
      <div className="main_component">
        {!todoPage ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="main_input"
              placeholder="Enter Name ..."
            />
          </form>
        ) : (
          <TodoPage name={name} setName={setName} />
        )}
      </div>
    </motion.div>
  );
};

export default Main;
