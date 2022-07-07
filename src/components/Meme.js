import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [image, setImage] = useState("");
  function getMemeImage() {
    const memesArr = memesData.data.memes;
    const randNum = Math.floor(Math.random() * memesArr.length);
    const url = memesArr[randNum].url;
    console.log(url);
    setImage(url);
  }
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button onClick={getMemeImage} className="form--button">
          Get a meme image
        </button>
      </div>
      <img src={image} alt="random meme" />
    </main>
  );
}
