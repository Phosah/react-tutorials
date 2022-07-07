import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "You see me",
    bottomText: "We see us",
    randomImg: "https://i.imgflip.com/1bhf.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArr = allMemeImages.data.memes;
    const randNum = Math.floor(Math.random() * memesArr.length);
    const url = memesArr[randNum].url;
    console.log(url);
    setMeme((prevState) => ({
      ...prevState,
      randomImg: url,
    }));
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
      <img className="meme--image" src={meme.randomImg} alt="random meme" />
    </main>
  );
}
