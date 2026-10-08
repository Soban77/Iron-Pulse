import { Star } from 'lucide-react'
import { testimonials } from '../data/gymData'

const Testimonials = () => {
  return (
    <section id="reviews" className="bg-[#111111] px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#f97316]">Success stories</p>
          <h2 className="text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">Members who transformed.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-[2rem] border border-white/10 bg-[#171717] p-6">
              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="text-lg font-bold text-white">{item.name}</p>
                  <p className="text-sm text-[#f97316]">{item.result}</p>
                </div>
              </div>

              <div className="mt-5 flex gap-1 text-[#fbbf24]">
                {[...Array(item.rating)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mt-5 text-lg leading-relaxed text-zinc-200">“{item.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
