import { Menu, X, Dumbbell } from 'lucide-react'
import { useState } from 'react'
import { navLinks } from '../data/gymData'

const Navbar = ({ onOpenTrial }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-[48px] z-50 border-b border-white/10 bg-black/40 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f97316] text-black shadow-[0_0_25px_rgba(249,115,22,0.5)]">
            <Dumbbell className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-black tracking-[0.2em] text-white">IRON</p>
            <p className="-mt-1 text-[10px] uppercase tracking-[0.5em] text-zinc-400">PULSE</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm text-zinc-300 lg:flex">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={onOpenTrial}
            className="rounded-full border border-[#f97316]/70 bg-[#f97316] px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_22px_rgba(249,115,22,0.45)] transition hover:scale-[1.02]"
          >
            Book Free Trial
          </button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-200 lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#111111]/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm text-zinc-300">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                onOpenTrial()
                setIsOpen(false)
              }}
              className="mt-2 rounded-full bg-[#f97316] px-4 py-2.5 font-semibold text-black shadow-[0_0_22px_rgba(249,115,22,0.45)]"
            >
              Book Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
