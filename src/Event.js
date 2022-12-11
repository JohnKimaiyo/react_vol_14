import React from "react";

export default function Event() {
  const developerClick = () => {
    alert("Good morning React developer Kimaiyo");
  };

  return (
    <div className="App">
      <button onClick={developerClick}>Click Me</button>
    </div>
  );
}
