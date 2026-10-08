import { useState } from 'react'
import { X, CheckCircle2 } from 'lucide-react'
import { contactDetails } from '../data/gymData'

const TrialModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: 'Morning',
    classType: 'Strength Lab',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(contactDetails.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          'Preferred time': formData.preferredTime,
          Class: formData.classType,
          _subject: 'Free trial booking request',
          _template: 'table',
        }),
      })
      const result = await response.json()

      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error('The email service did not accept the request.')
      }

      setSubmitted(true)
    } catch {
      setSubmitError('We could not send your request. Please try again or contact the gym directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-lg rounded-[2rem] border border-white/10 bg-[#111111] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.7)]">
        <button type="button" onClick={onClose} className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-zinc-300">
          <X className="h-4 w-4" />
        </button>

        {!submitted ? (
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f97316]">Free trial</p>
            <h3 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white">Claim your pass.</h3>
            <p className="mt-2 text-zinc-300">Tell us a bit about yourself and our team will confirm your session.</p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <label className="block text-sm text-zinc-300">
                Full name
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-white"
                  required
                />
              </label>

              <label className="block text-sm text-zinc-300">
                Phone number
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-white"
                  required
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-zinc-300">
                  Preferred time
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData((prev) => ({ ...prev, preferredTime: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-white"
                  >
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </label>

                <label className="block text-sm text-zinc-300">
                  Preferred class
                  <select
                    value={formData.classType}
                    onChange={(e) => setFormData((prev) => ({ ...prev, classType: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-white"
                  >
                    <option>Strength Lab</option>
                    <option>HIIT Burn</option>
                    <option>Mobility Flow</option>
                    <option>Boxing Circuit</option>
                  </select>
                </label>
              </div>

              {submitError && <p role="alert" className="text-sm text-red-400">{submitError}</p>}

              <button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-[#f97316] px-5 py-3 font-semibold text-black shadow-[0_0_25px_rgba(249,115,22,0.35)] disabled:cursor-not-allowed disabled:opacity-60">
                {isSubmitting ? 'Sending request…' : 'Book free session'}
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-400" />
            <h3 className="mt-5 text-3xl font-black text-white">Request sent.</h3>
            <p className="mt-3 text-zinc-300">
              Your request has been emailed to the Iron Pulse team at {contactDetails.email}. We’ll contact you to confirm your trial session.
            </p>
            <button type="button" onClick={onClose} className="mt-8 rounded-full bg-[#f97316] px-5 py-3 font-semibold text-black">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TrialModal
