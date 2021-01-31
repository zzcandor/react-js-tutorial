import React from "react";
import "./style.css";
import StateFunction from "./components/StateFunction";
import UseRef from "./components/UseRef";
import UseContextDemo from "./components/UseContextDemo";

export default function App() {
  return (
    <div>
      <StateFunction />
      <hr />
      <UseRef />
      <hr />
      <UseContextDemo />
    </div>
  );
}
