import React, { useState,useEffect } from "react";

 import Todos from "./components/Todos"; 
function Todo() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const fetchTodos = () => {
          fetch("http://localhost:3000/todos")
            .then(async function(res) {
              const json = await res.json();
              setTodos(json.todos);
            });
        };
    
        const todosInterval = setInterval(fetchTodos, 1000);
    
        return () => {
          clearInterval(todosInterval);
        };
      }, []);

        
    return (
        <div>
            <Todos todos={todos} />
        </div>
    );
}
export default Todo;