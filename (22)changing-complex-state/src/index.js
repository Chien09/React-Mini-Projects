import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

/* 
Using Hook to maintain two input fName & lName state changes to <h1>
--Instead of using two States like: 
  const [fName, setFName] = React.useState("");
  const [lName, setLName] = React.useState("");

    function updateFName(event) {
    setFName(event.target.value);
  }

  function updateLName(event) {
    setLName(event.target.value);
  }
  
--We can instead save the state as object to remove duplicate code, since fName & lName are related information we can put into an object
  const [fullName, setFullName] = React.useState({
    fName: "",
    lName: ""
  });

    function handleChange(event) {
    const { name, value } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }
*/
