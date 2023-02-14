import { createContext, useState } from "react";

export const TodoArray = createContext()

const Context = ({children}) => {
    const [todoList, setTodoList] = useState([])

    return (
        <TodoArray.Provider value={{todoList, setTodoList}}>
            {children}
        </TodoArray.Provider>
    )

}

export default Context