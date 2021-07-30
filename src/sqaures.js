import { useState } from "react";
import react from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("red");

  let count = counter;

  function handleClick() {
    setCounter(counter + 2);
  }

  if (count == 10) {
    return (
      <div className="App">
        <p>you clicked me {counter} times </p>
        <h1>plz change the colour to {color}</h1>

        <button onClick={handleClick}>INC by 2</button>

        <button color={color} onClick={() => setCounter(counter + 1)}>
          increment
        </button>
      </div>
    );
  } else {
    return (
      <div className="App">
        <p>you clicked me {counter} times </p>
        {count == 3 ? <h2>green</h2> : <h2>blue</h2>}
        <div>
          <button onClick={handleClick}>INC by 2</button>
        </div>
        <button onClick={() => setCounter(counter + 1)}>increment</button>
      </div>
    );
  }
}

// const variablle= function(param){
//     console.log("___")
// }
// const check = typeOf.variablle
// console.log(check)

export default App;
