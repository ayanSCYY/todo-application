import React, { useState,useEffect } from "react";
import Edit from "./components/edit";

function Editt(){
    const [ edit, setEdit] = useState([]);
    useEffect(() => {
        const fetchedit = () => {
          fetch("http://localhost:3000/todos")
            .then(async function(res) {
              const json = await res.json();
              setEdit(json.edit);
            });
        };
    
        const editInterval = setInterval(fetchedit, 1000);
    
        return () => {
          clearInterval(editInterval);
        };
      }, []);
      return(
        <div>
            <Edit edit={edit}/>
        </div>
      )
}
export default Editt;