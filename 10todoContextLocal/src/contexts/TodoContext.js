import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"what to do",
            completed:false,
        }
    ],

    addTodo: (todo) =>{},
    updateTodo: (todo,id) =>{},
    removeTodo: (id) =>{},
    toggleComplete: (id) =>{},
})

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider