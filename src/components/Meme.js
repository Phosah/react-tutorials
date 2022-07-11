import React, { useEffect, useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/1bhf.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function getMemeImage() {
    const randNum = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randNum].url;
    console.log(url);
    setMeme((prevState) => ({
      ...prevState,
      randomImg: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImage} className="form--button">
          Get a meme image
        </button>
      </div>
      <div className="meme">
        <img className="meme--image" src={meme.randomImg} alt="random meme" />
        <h2 className="meme--text_top">{meme.topText}</h2>
        <h2 className="meme--text_bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
