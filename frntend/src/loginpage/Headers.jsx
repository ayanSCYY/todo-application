import React from "react";
import task from "./task.png";

function Headers() {
  return (
    <div id="navbar">
      <header>
        <div className="heading">
          <img className="logo" src={task}/>
          <div>EaSydo</div>
          <div style={{color:"#2e9fe4"}}>TODO</div>
          <div><a><button className="button2" onClick={()=>{window.location.href="/todo"}}>Addedtodos</button></a></div>
          <div><a><button className="button3" onClick={()=>{window.location.href="/completedtodos"}}>Completedtodos</button></a></div>
        </div>
      </header>
    </div>
  );
}

export default Headers;
