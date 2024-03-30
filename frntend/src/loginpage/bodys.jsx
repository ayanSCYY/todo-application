import React from "react";
import untitled from "./Untitled.png";
function Body() { return (<div className="body"> <div id="main">
<img src={untitled} />
<div class="title2">Be</div>
<div class="title">PRODUCTIVE <br/>and <br/>DISCIPLINED</div>
<div class="title2">with us</div>
<a href="#"><button class="button" onClick={() => { window.location.href = "/createtodo" }}>Add todo</button></a>
</div>
 </div>)}
 export default Body