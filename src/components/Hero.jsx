import { useState } from 'react'
import { ArrowRight, Play, Flame, Users, Zap, X } from 'lucide-react'
import { heroStats } from '../data/gymData'

const Hero = ({ onOpenTrial }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section id="home" className="relative overflow-hidden bg-[#0a0a0a]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.22),transparent_35%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/30" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f97316]/30 bg-[#1a1a1a] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#fbbf24]">
            <Flame className="h-3.5 w-3.5" />
            Built for real progress
          </div>

          <h1 className="max-w-xl text-5xl font-black leading-none tracking-[-0.06em] text-white md:text-6xl lg:text-7xl">
            Transform Your Body,<br />
            Elevate Your Mind
          </h1>

          <p className="mt-6 max-w-lg text-lg text-zinc-300">
            Build strength, sharpen focus, and create habits that last with elite coaching, premium equipment, and a community that pushes you forward.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={onOpenTrial}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f97316] px-6 py-3.5 text-sm font-semibold text-black shadow-[0_0_20px_rgba(249,115,22,0.4)] transition hover:scale-[1.02]"
            >
              Claim free pass
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm"
            >
              <Play className="h-4 w-4" />
              Watch intro
            </button>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 md:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-10 hidden rounded-2xl border border-white/10 bg-[#111111]/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-sm md:block">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#f97316]/15 p-2 text-[#f97316]">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Peak performance</p>
                <p className="text-lg font-bold text-white">45 min zones</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 right-4 hidden rounded-2xl border border-white/10 bg-[#111111]/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-sm lg:block">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-500/15 p-2 text-emerald-400">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Supportive team</p>
                <p className="text-lg font-bold text-white">500+ members</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.65)]">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
              alt="Athlete training in the gym"
              className="h-[560px] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111111]">
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/AeffK3IdMpg"
                title="Gym intro video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
