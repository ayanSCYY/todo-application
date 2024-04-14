import PropTypes from 'prop-types';
import iii from './iii.jpg';
import '../App.css';
/* import Edit from './edit'; */

function Todos({ todos}) {

  const handleCheckboxChange = (todoID) => {
    fetch(`http://localhost:3000/completed`, {
      method: "DELETE",
      body: JSON.stringify({
        ID: todoID,
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
      alert("todo completed");
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);

    });
  };
  const handleCheckboxChange4 = (todoID) => {
    fetch(`http://localhost:3000/delete`, {
      method: "DELETE",
      body: JSON.stringify({
        ID: todoID,
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
  const handleclick = (todoID) => {
    const ID=todoID;
    console.log(ID);
    window.location.href=`/edit`;
  }
  return (
    <div className="cntainer">
     <div className="left2">
        <div className="urTodos">
         <div className="txxt"> your<br/>Todos</div>
          </div>
          {todos.map(todo => (
            <div key="todo.ID">
              <div className="tts">
              <div className="content" key={todo.ID}>
              {/* {todo.ID}. */}
              <div className="top">
                <input className="chkbx"
                type="checkbox"
                onChange={() => handleCheckboxChange(todo.ID)}
              />{todo.title}</div>
              <div className="bot">
              {todo.description}</div></div> 
              <div className="cbutton">
              <a><button onClick={()=>handleclick(todo.ID)}>edit</button></a>
              <a><button onClick={() => handleCheckboxChange4(todo.ID)}>Delete</button></a>
              </div>
              </div>
            </div> 
          ))}
      </div>
      <div className="right2">
      <img src={iii} alt="" />
      </div>
      </div>
      
  );
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;