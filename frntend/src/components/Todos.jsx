import React, { useState } from "react";


function Todos({ todos}) {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount(prevCount => prevCount + 1);

    setTimeout(() => {
      if (clickCount === 2) {
        console.log("Single click detected");
        setClickCount(0);
      }
    }, 300);
  }

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
      // Handle error gracefully, show user-friendly message, etc.
    });
  };
 
  return (
    <div>
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={handleClick}
      >
        Updated Todos
      </button>

      {clickCount === 2 && (
        <div>
          <h2>Todos</h2>
          {todos.map(todo => (
            <div key={todo.ID}>
              <h3>{todo.ID}.{todo.title}</h3>
              <p>{todo.description}</p>
              <input
                type="checkbox"
                unchecked
                onChange={() => handleCheckboxChange(todo.ID)}
              />
            </div>
          ))}
        </div>
      )}
        </div>
      
  );
}


export default Todos;