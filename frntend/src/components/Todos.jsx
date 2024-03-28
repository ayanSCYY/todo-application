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
    function handleClicks(){
        setClickCounts(prevCount => prevCount + 1); 
  
      setTimeout(() => {
        if (clickCounts === 2) {
          console.log("Single click detected");
          setClickCounts(0);
        }
      }, 300);
        
    }
    function handleCheckboxChange(id) {
      setTodos(todos.map(todo => 
        todo.ID === id ? {...todo, completed: todo.completed} : todo
      ));
      
    }
  
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
                  <input type="checkbox" unchecked={!todo.completed} onChange={() => handleCheckboxChange(todo.ID)} />
               </>
              ))}
           
          </div>
        )}
      </div>
    );
  }
  export default Todos