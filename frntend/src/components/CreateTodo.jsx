import { useState } from "react";

 function Createtodo(){
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    return <div>
        <input id="title" style={{
            padding:10,
            margin:10,
        }} type="text" placeholder="title" onChange={function(e){
             const value = e.target.value;
             setTitle(e.target.value);
        }}/><br />
        <input id="desc" style={{
            padding:10,
            margin:10,
        }}  type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
       }}/><br />

        <button style={{
            padding:10,
            margin:10,
        }} onClick={()=>{
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
        }}>Add a todo</button>
        <button style={{opacity: 0.5, padding: 10, margin: 10 }}  onClick={()=>{window.location.href="/todo"}}>addedtodos</button>
        <button style={{opacity: 0.5, padding: 10, margin: 10 }}  onClick={()=>{window.location.href="/completedtodos"}}>completedtodos</button>
    </div>
}

export default Createtodo