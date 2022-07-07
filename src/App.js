// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Card from "./components/Card";
// import cardData from "./cardData";
import Header from "./components/Header";
import Meme from "./components/Meme";
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
  return (
    <div>
      <Header />
      <Meme />
    </div>
  );
}

export default App;
