import CtaSection from "./components/CtaSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import InfoCard from "./components/InfoCard"
import QA from "./components/QA"
import SalesPitchSection from "./components/SalesPitch"
import Sellers from "./components/Sellers"
import SellSection from "./components/SellSection"
import StatsSection from "./components/Stats"


function App() {

  return (
    <div className="">
      <Header />
      <Hero />
      <StatsSection />
      <InfoCard />
      <SalesPitchSection />
      <SellSection /> 
      <Sellers />
      <CtaSection />

      <QA />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
