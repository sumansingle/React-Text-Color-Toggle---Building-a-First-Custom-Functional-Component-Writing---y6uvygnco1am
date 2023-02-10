import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  //code here
  const [className, setClassName] = useState("redColor");
  const [value, setValue] = useState(true);

  function onButtonClick() {
    setValue(!value);
    // true to false and false to true
  }

  // whenever react component loads for the first time
  // or whenever we want to monitor any change in a state
  useEffect(() => {
    if (value === true) {
      setClassName("redColor");
    }
    if (value === false) {
      setClassName("blueColor");
    }
  }, [value]); // dependency array - whatever variable is inside this,
  // whenever it changes, run useEffect.

  return (
    <div id="main">
      <p className={className}>Newton School</p>
      <button id="button" onClick={onButtonClick}>
        Change Style
      </button>
    </div>
  );
};

export default App;
