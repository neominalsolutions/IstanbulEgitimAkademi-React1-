import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DemoClass } from "./DemoClass";

function App() {
  const number = 5;

  // return kısmında arayüze yansıtılacak bir kullanıcı tanımlı dil mevcut buna jsx formatı diyoruz.

  return (
    <div className="App">
      <DemoClass title="demo class component" />
    </div>
  );
}

export default App;
