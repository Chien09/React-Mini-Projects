import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

/* 
Using Spread Operator to reduce code 

---EXAMPLE: ARRAY---
const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Mango", ...citrus]; 

---EXAMPLE: OBJECT---
const Person = {
  fName: "Krittidet", 
  lName: "Liu"
}

const Employee = {
  ...Person, //this means adding the properties from that object NOT the object itself
  id: 1,
  userName: krittidet123
}

*/
