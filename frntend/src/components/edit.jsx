import React, {useState} from 'react'
function Edit({todos}){
    const [title,setTitle]=useState("");    
    const [description,setDescription]=useState("");
    return (<div>
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

    <button  style={{
        padding:10,
        margin:10,
    }} onClick={()=>{
        fetch("http://localhost:3000/edit",{
            method:"PUT",
            body:JSON.stringify({
                ID:todos.ID,
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
export default Edit