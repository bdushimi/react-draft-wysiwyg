import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const App = () => (
  <div>
    <Hello />
  </div>
);

render(<App />, document.getElementById("root"));

console.clear();
console.log("console cleared");
