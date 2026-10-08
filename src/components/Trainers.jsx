import { Globe, Send, X } from 'lucide-react'
import { trainers } from '../data/gymData'

const Trainers = () => {
  return (
    <section id="trainers" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#f97316]">Meet the team</p>
        <h2 className="text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">Expert coaches, real accountability.</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {trainers.map((trainer) => (
          <article key={trainer.name} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]">
            <img src={trainer.image} alt={trainer.name} className="h-80 w-full object-cover" />
            <div className="p-6">
              <p className="text-2xl font-bold text-white">{trainer.name}</p>
              <p className="mt-1 text-sm font-medium text-[#f97316]">{trainer.role}</p>
              <p className="mt-4 text-sm text-zinc-300">{trainer.specialty}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {trainer.certifications.map((cert) => (
                  <span key={cert} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-zinc-300">
                    {cert}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 text-zinc-400">
                <a href={trainer.socials.instagram} className="rounded-full border border-white/10 p-2 transition hover:border-[#f97316] hover:text-[#f97316]" aria-label="Instagram">
                  <Globe className="h-4 w-4" />
                </a>
                <a href={trainer.socials.linkedin} className="rounded-full border border-white/10 p-2 transition hover:border-[#f97316] hover:text-[#f97316]" aria-label="LinkedIn">
                  <Send className="h-4 w-4" />
                </a>
                <a href={trainer.socials.x} className="rounded-full border border-white/10 p-2 transition hover:border-[#f97316] hover:text-[#f97316]" aria-label="X">
                  <X className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Trainers
