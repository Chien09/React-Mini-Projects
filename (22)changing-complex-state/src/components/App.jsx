import React from "react";

function App() {
  const [fullName, setFullName] = React.useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    //checking which input element triggered the change
    //console.log(event.target.name); //this can be either the input fName or input lName

    //checking the value to change to
    //console.log(event.target.value);

    // const inputName = event.target.name;
    // const newValue = event.target.value;

    //Using destructing to reduce code above
    const { name, value } = event.target;

    //get the previous object state {fName: "", lName: ""} --> prevValue
    setFullName((prevValue) => {
      //console.log(prevValue);
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else {
        //name === "lName"
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
          onChange={handleChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
