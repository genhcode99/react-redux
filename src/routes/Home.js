import React,{ useState } from "react"
import { connect } from "react-redux";
import { actionCreators } from "../store";


function Home ({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange (event) {
    setText(event.target.value)
  }
  function onSubmit(event){
    event.preventDefault();
    addToDo(text);
    setText("");
  }

//-----------------------------------------------------------------------------------------------
  return(
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button type="submit">ADD</button>
      </form>
      <ul>
        {JSON.stringify(toDos)}
      </ul>
    </div>
    
  );
}

function mapStateToProps(state) {
  return {toDos : state}
};

function mapDispatchToProps(dispatch){
  return {
    addToDo : (text) => dispatch(actionCreators.addToDo(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);