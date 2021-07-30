import react from "react";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  if (toggle) {
    return (
      <div className="App">
        {/* <Server /> */}
        <p>ON</p>

        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          toggle
        </button>
      </div>
    );
  } else {
    return (
      <div className="App">
        {/* <Server /> */}
        <p>OFF</p>

        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          toggle
        </button>
      </div>
    );
  }
}

export default App;
