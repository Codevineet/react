import { useState } from "react";
import "./App.css";

function App() {
  const [clrName, setClrName] = useState("Black");

  function changeColor() {
    setClrName("red");
  }

  return (
    <>
      <div className="container" style={{ backgroundColor: clrName }}>
        <h1>hello</h1>
      </div>

      <button id="red" onClick={changeColor}>
        Red
      </button>
    </>
  );
}

export default App;
