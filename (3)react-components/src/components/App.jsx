//must code every time you make a new React component, meaning this file
import React from "react";
import Heading from "./Heading"; //importing a React component
import BulletList from "./BulletList"; //importing a React component

function App() {
  return (
    <div>
      <Heading />
      <BulletList />
    </div>
  );
}

export default App;
