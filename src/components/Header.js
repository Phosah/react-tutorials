import React from "react";
import troll from "../images/troll.png";
export default function Header() {
  return (
    <header className="header">
      <img src={troll} alt="troll face" className="header--image" />
      <h2 className="header--title">Header</h2>
      <h4 className="header--project">React course - Project 3</h4>
    </header>
  );
}
