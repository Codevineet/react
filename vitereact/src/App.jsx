import Greet from "./Test"

function App() {

  const userName = 'Vineet Jindal';

  return (
    <>
      //this is evaluated expression inside the curly braces.
      <h1>Hello {userName}</h1>
      <Greet/>
    </>
  )
}

export default App
