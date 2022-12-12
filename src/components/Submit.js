import React from "react";

export default function Submit() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Good Morning React Developer");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
