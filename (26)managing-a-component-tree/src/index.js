import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

/* 
Using "props" to pass the function for deleting an item from list
NOT only can you pass properties but also functions through "props"

In This project Exam we send the function "deleteItem()" to the 
ToDOItem.jsx to handle when items are clicked to delete it from the array 

We can delete item based on ID through "index" .map(todoItem, index) and "key" & "id"
that is passed as "props", it is advised to set "key" as UUID --> https://www.npmjs.com/package/uuid npm package to create UUIDs
but for this project we will just use index
*/
