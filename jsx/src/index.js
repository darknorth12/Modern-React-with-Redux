// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const buttonText = "Click Me!";

// Create a react component
const App = () => {
  return (
    <div className="form">
      <label htmlFor="name">Enter name:</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "salmon", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
