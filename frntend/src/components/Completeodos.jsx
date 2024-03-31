import React, { useState } from "react";
function Completedtodos({ completedtodos }) {
  
    const handleCheckboxChange2 = (completedtodoID) => {
      fetch(`http://localhost:3000/todonotcompleted`, {
        method: "DELETE",
        body: JSON.stringify({
          ID: completedtodoID,
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
        alert("todo marked uncomplete");
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    };
    const handleCheckboxChange3 = (completedtodoID) => {
      fetch(`http://localhost:3000/delete`, {
        method: "DELETE",
        body: JSON.stringify({
          ID: completedtodoID,
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
    return( <div>
      <div>
        <h2>Completed Todos</h2>
        {completedtodos.map(completedtodos => (
          <div key={completedtodos.ID}>
            <h3>{/* {completedtodos.ID}. */}<input
              type="checkbox"
              checked
              onChange={() => handleCheckboxChange2(completedtodos.ID)}
            />{completedtodos.title}</h3>
            <p>{completedtodos.description}
            
            <button onClick={() => handleCheckboxChange3(completedtodos.ID)}>Delete</button>
            </p>
          </div>
        ))}
        </div>
     </div>)
  }
  
  export default Completedtodos;