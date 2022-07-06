import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./cardData";
import "./App.css";

function App() {
  const singleCard = cardData.map((card) => {
    return <Card key={card.id} card={card} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card--list">{singleCard}</section>
    </div>
  );
}

export default App;
