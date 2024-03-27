import React, { useState, useEffect } from 'react';
import { CreateTodo } from './components/CreateTodo';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json.todos);
      });
  }, []);

  return (
    <div>
      <CreateTodo />
     <Cardwrap> <div><Todos todos={todos} /></div></Cardwrap>
     {/*  //{alert("ur uploaded todos")}// */}
    </div>
  );
}
function Cardwrap({children}){
        return <div style={{
          border: "1px solid black",
          padding: 10,
          margin: 10,
        }}>
          {children}
        </div>
}

export default App;