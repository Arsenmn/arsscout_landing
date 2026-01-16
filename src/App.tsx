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
    <div className="min-h-screen text-white overflow-x-hidden relative">
      
      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-zinc-950" />

        {/* Soft moving noise / grid */}
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(circle_1px,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:32px_32px] animate-[gridmove_40s_linear_infinite]" />

        {/* Subtle neutral glow */}
        <div className="absolute top-[15%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] bg-linear-radial from-slate-400/10 via-transparent to-transparent blur-[120px]" />
      </div>

      <Header />
      <Hero />
      <StatsSection />
      <InfoCard />
      <SalesPitchSection />
      <SellSection />
      <Sellers />
      <CtaSection />
      <QA />
      <Footer />
    </div>
  )
}

export default App
