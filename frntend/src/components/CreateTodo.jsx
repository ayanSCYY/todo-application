import { useState } from "react";
import fff from './fff.jpg';
 function Createtodo(){
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    return <div className="container">
    <div className="left">
        <div className="txt">Stay on track <br />Finish Strong </div>
        <div className="cmp">
        <div id="ttl">Title</div>
        <input id="desc" type="text" placeholder="title" onChange={function(e){
             const value = e.target.value;
             setTitle(e.target.value);
        }}/><br />
        <div id="ttl">Description</div>
        <input id="desc" type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
       }}/><br />

        <a><button className="add"  onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description,  
                }) ,
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(async function(res){
                const json=await res.json();
                console.log(json);
                alert("todo added")
            })
        }}>Add a todo</button></a></div>
    </div>
    <div className="right">
        <img src={fff} alt="" />
    </div>
    </div>
}

export default Createtodo