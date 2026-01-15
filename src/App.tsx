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
    <div className="relative min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
      
      {/* Unified decorative background */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900/90" />

        {/* Subtle floating blurred shapes */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-20 w-72 h-72 bg-teal-400/8 rounded-full blur-2xl animate-spin-slow" />
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-amber-400/6 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/6 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Site content */}
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

export default App;

