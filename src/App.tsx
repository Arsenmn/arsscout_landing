import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoCard from "./components/InfoCard";
import QA from "./components/QA";
import Sellers from "./components/Sellers";
import SellSection from "./components/SellSection";
import StatsSection from "./components/Stats";

function App() {
  return (
    <div className="min-h-screen text-on-background overflow-hidden relative scroll-smooth">
      <Header />
      <Hero />
      <StatsSection />
      <InfoCard />
      <SellSection />
      <Sellers />
      <QA />
      <Footer />
    </div>
  );
}

export default App;
