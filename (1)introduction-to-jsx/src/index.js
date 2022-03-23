import React from "react";
import ReactDom from "react-dom";

const fname = "All";
const lname = "Might";
const year = new Date();

const imgplaceholder = "https://picsum.photos/200?grayscale";

const customStyle = {
  color: "red",
  fontSize: "20px"
};

//customStyle.color = "blue" //you can change the style color on the fly

/*
-render() can only pass in one tag element so put it <div></div>
-adding style to tags the style names are different for example
class="" --> className=""
-adding inline styles you need to coded like a object style={{ color: "red" }} instead of style="color: red" (html)
NOTE: inline styles is very good for customization, for example depedning on the day we want to change the background color
*/
ReactDom.render(
  <div>
    <h1 className="heading">Hello, I'm {`${fname} ${lname}`}</h1>
    <img src={imgplaceholder} alt="random image" />
    <p style={customStyle}>My favorite number is 9</p>
    <p>I hate number {Math.floor(Math.random() * 10)}</p>
    <ul>
      <label>My favorite colors:</label>
      <li>
        Black
        <div className="divColorBlack"></div>
      </li>
      <li>
        Yellow
        <div className="divColorYellow"></div>
      </li>
    </ul>
    <p>Created by Krittidet Liu</p>
    <p>Copyright @ {year.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
