import { useMemo, useState } from 'react'
import { Clock3, CircleDot, Dumbbell } from 'lucide-react'
import { schedule } from '../data/gymData'

const Timings = () => {
  const [selectedTab, setSelectedTab] = useState('weekdays')

  const isOpenNow = useMemo(() => {
    const today = new Date()
    const day = today.getDay()
    const hour = today.getHours()

    if (day === 0) {
      return hour >= 7 && hour < 20
    }

    if (day === 6) {
      return hour >= 6 && hour < 21
    }

    return hour >= 5 && hour < 23
  }, [])

  const currentTabData = selectedTab === 'weekdays' ? schedule.weekdays : schedule.classes

  return (
    <section id="schedule" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#f97316]">Gym schedule</p>
          <h2 className="text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">Train on your time.</h2>
        </div>

        <div
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ${
            isOpenNow
              ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
              : 'border-red-500/30 bg-red-500/10 text-red-300'
          }`}
        >
          <CircleDot className="h-3 w-3 fill-current" />
          {isOpenNow ? 'Open now' : 'Closed'}
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-[#111111] p-5 shadow-2xl shadow-black/40 md:p-8">
        <div className="mb-8 flex flex-wrap gap-3">
          {[
            { key: 'weekdays', label: 'Weekdays' },
            { key: 'classes', label: 'Classes' },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setSelectedTab(tab.key)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                selectedTab === tab.key
                  ? 'bg-[#f97316] text-black'
                  : 'border border-white/10 bg-white/5 text-zinc-300 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {currentTabData.map((item) => (
              <div key={item.day || item.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#f97316]/15 p-2 text-[#f97316]">
                    {selectedTab === 'weekdays' ? <Clock3 className="h-4 w-4" /> : <Dumbbell className="h-4 w-4" />}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.day || item.name}</p>
                    {selectedTab === 'classes' && <p className="text-sm text-zinc-400">{item.schedule}</p>}
                  </div>
                </div>
                <p className="text-sm font-medium text-zinc-300">{item.hours || item.time}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[1.5rem] border border-[#f97316]/20 bg-gradient-to-br from-[#f97316]/10 to-transparent p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#fbbf24]">Today’s energy</p>
            <h3 className="mt-5 text-3xl font-black text-white">High-intensity coaching, all day.</h3>
            <p className="mt-4 text-zinc-300">
              Our floor is active from early morning to late evening with guided sessions, recovery support, and coach check-ins throughout the day.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-zinc-200">
              <div className="rounded-2xl bg-black/20 p-4">
                <p className="text-zinc-400">Peak hours</p>
                <p className="mt-2 text-xl font-bold text-white">6 AM - 9 PM</p>
              </div>
              <div className="rounded-2xl bg-black/20 p-4">
                <p className="text-zinc-400">Coach presence</p>
                <p className="mt-2 text-xl font-bold text-white">Live onsite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timings
