import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '../data/gymData'

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#f97316]">FAQ</p>
        <h2 className="text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">Everything you need to know.</h2>
      </div>

      <div className="space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = expandedIndex === index

          return (
            <div key={item.question} className="rounded-[1.5rem] border border-white/10 bg-[#111111] transition-all duration-300">
              <button
                type="button"
                onClick={() => setExpandedIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-base font-semibold text-white md:text-lg">{item.question}</span>
                <ChevronDown className={`h-5 w-5 text-zinc-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-zinc-300">{item.answer}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ
