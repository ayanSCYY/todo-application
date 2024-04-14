import { useState,useEffect } from "react";

import Completedtodos from "./components/Completeodos";
function Addedtodo() {
    const [completedtodos, setCompletedtodos] = useState([]);
    useEffect(() => {
        const fetchCompletedtodos = () => {
          fetch("http://localhost:3000/completedtodos")
            .then(async function(res) {
              const json = await res.json();
              setCompletedtodos(json.completedtodos);
            });
        };
    
        const todosInterval = setInterval(fetchCompletedtodos, 1000);
    
        return () => {
          clearInterval(todosInterval);
        };
      }, []);

        
    return (
        <div>
            <Completedtodos completedtodos={completedtodos} />
        </div>
    );
}
export default Addedtodo;