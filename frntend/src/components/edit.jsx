/* 
import React, {useState,useEffect} from 'react';

function Edit({ID}){
    const [title,setTitle]=useState("");    
    const [description,setDescription]=useState("");
    const [EditID,setEditID]=useState("");

    return (<div>
    <input id="title" style={{
        padding:10,
        margin:10,
    }} type="text" placeholder="title" onChange={function(e){
         setTitle(e.target.value);
    }}/><br />
    <input id="desc" style={{
        padding:10,
        margin:10,
    }}  type="text" placeholder="description" onChange={function(e){
        setDescription(e.target.value);
   }}/><br />

    <button  style={{
        padding:10,
        margin:10,
    }} onClick={()=>{
        setEditID({ID});
        fetch("http://localhost:3000/edit",{
            method:"PUT",
            body:JSON.stringify({
                ID:EditID,
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
            alert("todoedited added")
        })
    }}>Add a todo</button>  
     </div> 
    )
}
export default Edit */