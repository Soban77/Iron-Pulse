import { useMemo, useState } from 'react'

const Calculator = () => {
  const [activeTab, setActiveTab] = useState('bmi')
  const [bmi, setBmi] = useState({ height: 175, weight: 70 })
  const [calorie, setCalorie] = useState({ age: 28, weight: 70, height: 175, activity: 'moderate' })

  const bmiValue = useMemo(() => {
    if (!bmi.height || !bmi.weight) return '0.0'
    const heightInMeters = bmi.height / 100
    return ((bmi.weight / (heightInMeters * heightInMeters)) || 0).toFixed(1)
  }, [bmi])

  const bmiStatus = Number(bmiValue) < 18.5 ? 'Underweight' : Number(bmiValue) < 25 ? 'Healthy' : Number(bmiValue) < 30 ? 'Overweight' : 'Obese'

  const calorieValue = useMemo(() => {
    if (!calorie.age || !calorie.weight || !calorie.height) return 0

    const activityMultiplier = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      athlete: 1.9,
    }[calorie.activity]

    const bmr = 10 * Number(calorie.weight) + 6.25 * Number(calorie.height) - 5 * Number(calorie.age) + 5
    return Math.round(bmr * activityMultiplier)
  }, [calorie])

  return (
    <section className="bg-[#0a0a0a] px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#f97316]">Fitness tools</p>
          <h2 className="text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">Know your numbers.</h2>
        </div>

        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-[#111111] p-6">
          <div className="mb-6 flex flex-wrap gap-3">
            {['bmi', 'calorie'].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold ${
                  activeTab === tab ? 'bg-[#f97316] text-black' : 'border border-white/10 bg-white/5 text-zinc-300'
                }`}
              >
                {tab === 'bmi' ? 'BMI Calculator' : 'Calorie Calculator'}
              </button>
            ))}
          </div>

          {activeTab === 'bmi' ? (
            <div className="grid gap-6 md:grid-cols-[1fr_0.8fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-zinc-300">
                  Height (cm)
                  <input
                    type="number"
                    value={bmi.height}
                    onChange={(e) => setBmi((prev) => ({ ...prev, height: Number(e.target.value) }))}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-white"
                  />
                </label>
                <label className="text-sm text-zinc-300">
                  Weight (kg)
                  <input
                    type="number"
                    value={bmi.weight}
                    onChange={(e) => setBmi((prev) => ({ ...prev, weight: Number(e.target.value) }))}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-white"
                  />
                </label>
              </div>

              <div className="rounded-[1.5rem] bg-[#f97316]/10 p-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#fbbf24]">BMI result</p>
                <p className="mt-3 text-4xl font-black text-white">{bmiValue}</p>
                <p className="mt-2 text-lg font-semibold text-[#f97316]">{bmiStatus}</p>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-[1fr_0.8fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-zinc-300">
                  Age
                  <input
                    type="number"
                    value={calorie.age}
                    onChange={(e) => setCalorie((prev) => ({ ...prev, age: Number(e.target.value) }))}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-white"
                  />
                </label>
                <label className="text-sm text-zinc-300">
                  Weight (kg)
                  <input
                    type="number"
                    value={calorie.weight}
                    onChange={(e) => setCalorie((prev) => ({ ...prev, weight: Number(e.target.value) }))}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-white"
                  />
                </label>
                <label className="text-sm text-zinc-300">
                  Height (cm)
                  <input
                    type="number"
                    value={calorie.height}
                    onChange={(e) => setCalorie((prev) => ({ ...prev, height: Number(e.target.value) }))}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-white"
                  />
                </label>
                <label className="text-sm text-zinc-300">
                  Activity level
                  <select
                    value={calorie.activity}
                    onChange={(e) => setCalorie((prev) => ({ ...prev, activity: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-white"
                  >
                    <option value="sedentary">Sedentary</option>
                    <option value="light">Lightly Active</option>
                    <option value="moderate">Moderately Active</option>
                    <option value="active">Very Active</option>
                    <option value="athlete">Athlete</option>
                  </select>
                </label>
              </div>

              <div className="rounded-[1.5rem] bg-emerald-500/10 p-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-emerald-300">Daily target</p>
                <p className="mt-3 text-4xl font-black text-white">{calorieValue} kcal</p>
                <p className="mt-2 text-zinc-300">Estimated daily calories to maintain your current level.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Calculator
