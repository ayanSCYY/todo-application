import React, { useState } from "react";
import vvvv from "./vvvv.jpg";
import '../App.css';
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
    return(  <div className="cntainer2">
    <div className="left3">
       <div class="urTodos2">
        <div className="txxt2"> your<br/>Todos</div>
         </div>
         {completedtodos.map(completedtodos => (
           <div>
             <div className="tts2">
             <div className="content2" key={completedtodos.ID}>
             {/* {todo.ID}. */}
             <div className="top2">
               <input className="chkbx2"
               type="checkbox"
               checked
               onChange={() => handleCheckboxChange2(completedtodos.ID)}
             />{completedtodos.title}</div>
             <div className="bot2">
             {completedtodos.description}</div></div> 
             <div className="cbutton2">
            {/*  <a><button onClick={()=>handleclick(todo.ID)}>edit</button></a> */}
              <a><button onClick={() => handleCheckboxChange3(completedtodos.ID)}>Delete</button></a> 
             </div>
             </div>
           </div> 
         ))}
     </div>
     <div className="right3">
     <img src={vvvv} alt="" />
     </div>
     </div>)
  }
  
  export default Completedtodos;