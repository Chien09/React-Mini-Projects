import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  //console.log(contacts);

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        personName={contacts[0].name}
        imgLink={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        personName={contacts[1].name}
        imgLink={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        personName={contacts[2].name}
        imgLink={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
