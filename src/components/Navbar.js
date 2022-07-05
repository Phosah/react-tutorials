import React from "react";
import airbnbLogo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <div>
      <img src={airbnbLogo} alt="logo" />
      <h2>This is a Navbar component in React</h2>;
    </div>
  );
}
