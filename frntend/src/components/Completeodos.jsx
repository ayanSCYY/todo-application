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
    return( <div>
      <button style={{opacity: 0.5, padding: 10, margin: 10 }} onClick={handleclick2}>completed todos</button>
    {clickCount2 === 2 && (
      <div>
        <h2>Completed Todos</h2>
        {completedtodos.map(completedtodos => (
          <div key={completedtodos.ID}>
            <h3>{completedtodos.ID}.{completedtodos.title}</h3>
            <p>{completedtodos.description}
            <input
              type="checkbox"
              checked
              onChange={() => handleCheckboxChange2(completedtodos.ID)}
            />
            <button onClick={() => handleCheckboxChange3(completedtodos.ID)}>Delete</button>
            </p>
          </div>
        ))}
        </div>
     )}<button onClick={()=>{window.location.href="/";}}>reload</button>
     </div>)
  }
  
  export default Completedtodos;