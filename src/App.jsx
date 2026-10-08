import { useState } from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Timings from './components/Timings'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Trainers from './components/Trainers'
import Calculator from './components/Calculator'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import OwnerContact from './components/OwnerContact'
import MapLocation from './components/MapLocation'
import TrialModal from './components/TrialModal'
import Footer from './components/Footer'

function App() {
  const [isTrialOpen, setIsTrialOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <AnnouncementBar />
      <Navbar onOpenTrial={() => setIsTrialOpen(true)} />

      <main>
        <Hero onOpenTrial={() => setIsTrialOpen(true)} />
        <Timings />
        <Pricing onOpenTrial={() => setIsTrialOpen(true)} />
        <Gallery />
        <Trainers />
        <Calculator />
        <Testimonials />
        <FAQ />
        <OwnerContact />
        <MapLocation />
      </main>

      <Footer />
      <TrialModal isOpen={isTrialOpen} onClose={() => setIsTrialOpen(false)} />
    </div>
  )
}

export default App
