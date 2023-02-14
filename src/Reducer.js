export const todoReducer = (todo, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todo,
        {
          id: Math.round(Math.random() * 1000),
          todo: action.payload,
          completed: false,
        },
      ];
    case "DELETE_TODO":
      return todo.filter((todo) => todo.id !== action.id);
    case "TOGGLE_TODO":
      return todo.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return todo;
  }
};