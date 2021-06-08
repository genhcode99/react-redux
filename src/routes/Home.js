import React,{ useState } from "react"
import { connect } from "react-redux";

function Home ({toDos}) {
  console.log(props)
  const [text, setText] = useState("");
  function onChange (event) {
    setText(event.target.value)
  }
  function onSubmit(event){
    event.preventDefault();
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

export default connect(mapStateToProps)(Home);