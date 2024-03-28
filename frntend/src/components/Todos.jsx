import { useState } from "react";
function Todos({ todos }) {
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
    function handleCheckboxChange(id) { 

      const newTodos = todos.map(todo => {
        if (todo.ID === id) {
          return {
            ...todo,
            completed:"true",
          };
        }
        return todo;
      });
      setTodos(newTodos);
        
      if(todos.completed==="true"){

        fetch("http://localhost:3000/completed",{
                method:"DELETE",
                body:JSON.stringify({
                   ID:newTodos.ID
                }) ,
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(async function(res){
              const json=await res.json();
              console.log(json);
              alert("todo removed")
          })
       
      
    }}
  
    return (
      <div>
        <button
          style={{
            padding: 10,
            margin: 10,
          }}
          onClick={handleClick}
        >
          updated todos
        </button>
  
        {clickCount === 2 && (
          <div>
            <h2>Todos</h2>
            
              {todos.map(todo => (
                <>
                  <h3>{todo.ID}.{todo.title}</h3>
                  <p>{todo.description}</p>
                  <p>{todo.completed}</p>
                   <input type="checkbox" unchecked={todo.completed==="false"} onChange={() => handleCheckboxChange(todo.ID)} />

               </>
              ))}
           
          </div>
        )}
      </div>
    );
              }
  export default Todos