import React from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("Hello");
  const [isMouseOver, setMouseOver] = React.useState(false); //if mouse over button then is "true"

  function handleClicked() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClicked}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
