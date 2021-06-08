import React,{ useState } from "react"

function Home () {
  const [text, setText] = useState("");
  function onChange (event) {
    setText(event.target.value)
  }
  function onSubmit(event){
    event.preventDefault();
    console.log(text);
  }

//-----------------------------------------------------------------------------------------------
  return(
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button type="submit">ADD</button>
      </form>
      <ul></ul>
    </div>
    
  );
}

export default Home;