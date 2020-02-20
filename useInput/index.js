import React, { useState } from "react";
import ReactDOM from "react-dom";

import useInput from "./useInput";

const App = () => {
  const MaxLen = value => value.length > 10;
  const name = useInput("Mr.", MaxLen);
  return (
    <div className="App">
      <h1>hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
