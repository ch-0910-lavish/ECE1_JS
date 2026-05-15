import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <div className="card">
        <h1>
          React Counter <br /> Application
        </h1>

        <h2>{count}</h2>

        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>
            Increment (+)
          </button>

          <button onClick={() => setCount(count - 1)}>
            Decrement (-)
          </button>
        </div>

        <button className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;