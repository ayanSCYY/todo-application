import React, { useState } from "react";
function Completedtodos({ completedtodos }) {
  
    const [clickCount2, setClickCount2] = useState(0); 
   
   
   function handleclick2(){
      setClickCount2(prevCount => prevCount + 1);
  
      setTimeout(() => {
        if (clickCount2 === 2) {
          console.log("Single click detected");
          setClickCount2(0);
        }
      }, 300);
    }
  
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
    return <div>
      <button style={{ padding: 10, margin: 10 }} onClick={handleclick2}>completed todos</button>
    {clickCount2 === 2 && (
      <div>
        <h2>Completed Todos</h2>
        {completedtodos.map(completedtodo => (
          <div key={completedtodo}>
            <h3>{completedtodo.ID}.{completedtodo.title}</h3>
            <p>{completedtodo.description}
            <input
              type="checkbox"
              checked
              onChange={() => handleCheckboxChange2(completedtodo.ID)}
            />
            <button onClick={() => handleCheckboxChange3(completedtodo.ID)}>Delete</button>
            </p>
          </div>
        ))}
        </div>
     )}
     </div>
  }
  
  export default Completedtodos;