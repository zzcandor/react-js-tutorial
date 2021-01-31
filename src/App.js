import React from "react";
import "./style.css";
import StateFunction from "./components/StateFunction";
import UseRef from "./components/UseRef";
import UseContextDemo from "./components/UseContextDemo";
import UseReducerDemo from "./components/UseReducerDemo";
import UseMemoDemo from "./components/UseMemoDemo";
import CustomHookUsage from "./components/CustomHookUsage";

export default function App() {
  return (
    <div>
      <StateFunction />
      <hr />
      <UseRef />
      <hr />
      <UseContextDemo />
      <hr />
      <UseReducerDemo />
      <hr />
      <UseMemoDemo />
      <hr />
      <CustomHookUsage />
    </div>
  );
}
