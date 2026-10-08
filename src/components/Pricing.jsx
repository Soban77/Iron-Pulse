import { Check, Star } from 'lucide-react'
import { pricingPlans } from '../data/gymData'

const Pricing = ({ onOpenTrial }) => {
  return (
    <section id="pricing" className="bg-[#0a0a0a] px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#f97316]">Membership plans</p>
          <h2 className="text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">Choose your path.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[2rem] border p-7 ${
                plan.popular
                  ? 'border-[#f97316]/60 bg-[#f97316]/10 shadow-[0_0_35px_rgba(249,115,22,0.25)]'
                  : 'border-white/10 bg-[#111111]'
              }`}
            >
              {plan.popular && (
                <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-[#f97316] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-black">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  Most Popular
                </div>
              )}

              <p className="text-xl font-bold text-white">{plan.name}</p>
              <p className="mt-5 text-sm text-zinc-300">{plan.description}</p>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-black tracking-[-0.07em] text-white">{plan.price}</span>
                <span className="pb-2 text-sm uppercase tracking-[0.2em] text-zinc-400">{plan.period}</span>
              </div>

              <ul className="mt-8 space-y-4 text-sm text-zinc-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 rounded-full bg-emerald-500/15 p-1 text-emerald-400">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={onOpenTrial}
                className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
                  plan.popular
                    ? 'bg-[#f97316] text-black shadow-[0_0_22px_rgba(249,115,22,0.35)] hover:scale-[1.01]'
                    : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
