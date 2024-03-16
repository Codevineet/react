import { useState } from "react";
 
function App() {

  let [counter , setCounter] =  useState(0);
  let warningState;
  if(counter < 0){
    counter = 0;
    warningState = 'Counter cannot be negative';
    console.log("The counter cannot be negative");
  }

  // let counter = 0;
  const addVal = () =>{
    //counter = counter + 1;
    setCounter(counter + 1);
    console.log(counter);
  };
  const subVal = () =>{
    setCounter(counter - 1);
  }; 

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addVal}>Add Value</button>
      <br />
      <br />
      <button onClick={subVal}>Remove Value</button>
      <p>{warningState}</p>
    </>
  )
}

export default App
