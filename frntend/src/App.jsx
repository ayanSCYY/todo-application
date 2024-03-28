import React, { useState, useEffect } from 'react';
import { CreateTodo } from './components/CreateTodo';
import Todos from './components/Todos';
import Completedtodos from './components/Completeodos';


function App() {
  const [todos, setTodos] = useState([]);
  const [completedtodos, setCompletedTodos] = useState([]);

  {useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json.todos);
      });
  }, []);}

 {useEffect(() => {
    fetch("http://localhost:3000/completedtodos")
      .then(async function(res) {
        const json = await res.json();
        setCompletedTodos(json.completedtodos);
      });
  }, []);} 

  return (
    <div>
      <CreateTodo />
     <Cardwrap> <div><Todos todos={todos} /></div></Cardwrap>
     <Cardwrap> <div><Completedtodos completedtodos={completedtodos} /></div></Cardwrap>
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