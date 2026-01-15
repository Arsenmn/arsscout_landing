import CtaSection from "./components/CtaSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import QA from "./components/QA"
import Sellers from "./components/Sellers"
import StatsSection from "./components/Stats"


function App() {

  return (
    <div className="">
      <Header />
      <Hero />
      <StatsSection />
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
