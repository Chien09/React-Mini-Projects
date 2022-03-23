//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDom from "react-dom";

const currentDate = new Date();
const currentTime = currentDate.getHours();

let h1Text = "";

let customh1Color = "";

if (currentTime < 12) {
  h1Text = "Good Morning";
  customh1Color = "red";
} else if (currentTime < 18) {
  h1Text = "Good Afternoon";
  customh1Color = "green";
} else {
  h1Text = "Good Evening";
  customh1Color = "blue";
}

const styleObject = {
  color: customh1Color
};

ReactDom.render(
  <h1 className="heading" style={styleObject}>
    {h1Text}
  </h1>,
  document.getElementById("root")
);
