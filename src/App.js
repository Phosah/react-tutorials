// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Card from "./components/Card";
// import cardData from "./cardData";
import Header from "./components/Header";
import Meme from "./components/Meme";
import memesData from "./memesData";
import "./App.css";

// function App() {
//   const singleCard = cardData.map((card) => {
//     return <Card key={card.id} card={card} />;
//   });
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <section className="card--list">{singleCard}</section>
//     </div>
//   );
// }

function App() {
  const totalMemes = memesData.data.memes;
  let singleMeme;
  console.log(totalMemes);
  singleMeme = totalMemes.map((meme) => {
    return console.log(meme);
  });
  return (
    <div>
      <Header />
      <Meme />
    </div>
  );
}

export default App;
