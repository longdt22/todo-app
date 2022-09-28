import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

export interface IState {
  people: {
    name: string;
    age: number;
    bio: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    { name: "long", age: 18, bio: "devoloper" },
  ]);
  return (
    <div className="flex w-full max-w-[1000px] mx-auto min-h-[100vh] mt-20">
      <Form people={people} setPeople={setPeople} />
      <List people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
