import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Title from "./components/Title";
import Myname from "./components/Myname";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="Frontend developer" />
      <Title name="Mobile developer" />
      <Title name="Solidity developer" />
      <Myname/>
    </div>
  );
}

export default App;
