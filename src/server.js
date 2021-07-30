import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <p>hello, this is {counter} clicks</p>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        increament{" "}
      </button>
    </div>
  );
}

export default App;
