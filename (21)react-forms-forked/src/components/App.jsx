import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [headingText, setHeadingText] = React.useState("");

  //<input> detect text change
  function handleChange(event) {
    //this will log the text in the input field when change has occurred
    //"target" is the element that triggered the event, in this case it would be the <input/>
    //console.log(event.target.value);

    //log placeholder of element
    //console.log(event.target.placeholder);

    //log the type
    //console.log(event.target.type);

    //set name=event.target.value
    setName(event.target.value);
  }

  //submit button clicked
  function handleClick() {
    //set headingText=name
    setHeadingText(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
