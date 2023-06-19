import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

import UserList from "./components/UserList";

const people = [
  {
    name: "John",
    email: "john@example.com",
    age: 20,
    emoji: "👨‍💻",
  },
  {
    name: "Jane",
    email: "jane@example.com",
    age: 30,
    emoji: "👩‍💻",
  },
  {
    name: "Jack",
    email: "jack@example.com",
    age: 40,
    emoji: "👨",
  },
];

function App() {
  return <UserList users={people} />;
}

export default App;
