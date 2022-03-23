import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

/* 
Extracting or separating more components from Card into Avatar and Detail 

NOTE: WHen passing Props from different components APP to CARD to Avatar it can be confusing,
so use "React DevTools" from the Developer Console in Webbrowser to see the tree of 
components along with all the props being passed 

EXAMPLE: 
App > Card > Avatar 

You can also Install Extension to chrome called "React Developer Tools"
Open Developer Tools > Components tab 
*/
