import React from "react";
import { useState } from "react";

function Myname() {
  const [name, setName] = useState("john");
  const changeName = () => {
    setName("kimaiyo");
  };

  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={changeName}>Click Me</button>
    </div>
  );
}

export default Myname;
