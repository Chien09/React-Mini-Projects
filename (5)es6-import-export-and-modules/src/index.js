import React from "react";
import ReactDOM from "react-dom";

//this is importing the default export pie along with the functions
import Pie, { doublePi, triplePi } from "./math";

//OR you can import everything using wild card
import * as pi from "./math"; //pi will return as an object
//console.log(pi);  // access functions and variable -->  pi.default , pi.doublePi(), p.triplePi()

ReactDOM.render(
  <ul>
    <li>{Pie}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
