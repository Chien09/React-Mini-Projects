import React from "react";

function App() {
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = React.useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  //Automatically update Time every 5secs
  setInterval(updateTime, 5000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
