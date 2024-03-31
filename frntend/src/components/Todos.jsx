import React, { useState } from "react";
import '../App.css';

function Todos({ todos}) {

  const handleCheckboxChange = (todoID) => {
    fetch(`http://localhost:3000/completed`, {
      method: "DELETE",
      body: JSON.stringify({
        ID: todoID,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(async function(res){
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await res.json();
      console.log(json);
      alert("todo completed");
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);

    });
  };
  const handleCheckboxChange4 = (todoID) => {
    fetch(`http://localhost:3000/delete`, {
      method: "DELETE",
      body: JSON.stringify({
        ID: todoID,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(async function(res){
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await res.json();
      console.log(json);
      alert("todo deleted");
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
  });
  };
 
  return (
    <div className="Todos">
     
        <div class="Todos">
          <h2>Todos</h2>
          {todos.map(todo => (
            <div key={todo.ID}>
              <h3>{/* {todo.ID}. */}  <input
                type="checkbox"
                unchecked
                onChange={() => handleCheckboxChange(todo.ID)}
              />{todo.title}</h3>
              <p>{todo.description}
              <button onClick={() => handleCheckboxChange4(todo.ID)}>Delete</button>
              </p>
            </div>
          ))}
        </div>
     </div>
      
  );
}


export default Todos;