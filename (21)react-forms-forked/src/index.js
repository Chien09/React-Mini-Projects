import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

/*
<FORM> in React and "Controlled Component" --> https://reactjs.org/docs/forms.html 
We can pass the event object into the function when an event has occurred, then
we can tap into the event object to access the properties of the element that triggered the event
Essentially we need to tell React DOM that an event has been triggered and apply state has change

Will be using the event "onChange" to demonstrate this event passing into function
"onChange" is an event for example when a input field text has changed

---------------
If you are using conventional way <form> </form>, below is a different version code

function handleClick(event){
  setHeading(name); 

  event.preventDefault(); //this will prevent the default <form> refreshing the html page
}

return (
  <div className="container">
    <h1>Hello {headingText}</h1>
    <form onSubmit={handleClick}>
      <input        
            onChange={handleChange}
            type="text"
            placeholder="What's your name?"
            value={name}
          />
          <button type="submit">Submit</button>
    </form>
  </div>
); 
*/
