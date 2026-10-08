import { useState } from 'react'
import { contactDetails } from '../data/gymData'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [submissionStatus, setSubmissionStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubscribe = async (event) => {
    event.preventDefault()

    const subscriberEmail = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subscriberEmail)) {
      setSubmissionStatus('error')
      setStatusMessage('Please enter a valid email address.')
      return
    }

    setSubmissionStatus('loading')
    setStatusMessage('')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(contactDetails.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: subscriberEmail,
          _subject: 'New Newsletter Subscriber',
          message: `A new user with email ${subscriberEmail} has subscribed to the gym newsletter.`,
          _template: 'table',
        }),
      })
      const result = await response.json()

      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error('The email service did not accept the subscription.')
      }

      setEmail('')
      setSubmissionStatus('success')
      setStatusMessage('🎉 Successfully subscribed! The gym owner has been notified.')
    } catch {
      setSubmissionStatus('error')
      setStatusMessage('We could not submit your subscription. Please try again.')
    }
  }

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 text-sm text-zinc-400 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <p className="text-lg font-black tracking-[0.25em] text-white">IRON PULSE</p>
          <p className="mt-4 max-w-sm">High-performance training for stronger bodies, sharper habits, and lasting confidence.</p>
        </div>

        <div>
          <p className="text-base font-bold text-white">Quick links</p>
          <ul className="mt-4 space-y-2">
            <li><a href="#schedule" className="hover:text-white">Schedule</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        <div>
          <p className="text-base font-bold text-white">Hours</p>
          <ul className="mt-4 space-y-2">
            <li>Mon - Fri: 5:00 AM - 11:00 PM</li>
            <li>Sat: 6:00 AM - 9:00 PM</li>
            <li>Sun: 7:00 AM - 8:00 PM</li>
          </ul>
        </div>

        <div>
          <p className="text-base font-bold text-white">Newsletter</p>
          <form className="mt-4" onSubmit={handleSubscribe} noValidate>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  if (submissionStatus !== 'idle') {
                    setSubmissionStatus('idle')
                    setStatusMessage('')
                  }
                }}
                placeholder="Your email"
                aria-label="Your email address"
                aria-describedby="newsletter-status"
                className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none transition placeholder:text-zinc-500 hover:border-white/20 focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/30"
              />
              <button
                type="submit"
                disabled={submissionStatus === 'loading'}
                className="rounded-full bg-[#f97316] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] disabled:cursor-wait disabled:opacity-60"
              >
                {submissionStatus === 'loading' ? 'Sending…' : 'Join'}
              </button>
            </div>
            <p
              id="newsletter-status"
              role={submissionStatus === 'error' ? 'alert' : 'status'}
              aria-live="polite"
              className={`mt-3 min-h-5 text-xs ${submissionStatus === 'error' ? 'text-red-400' : submissionStatus === 'success' ? 'text-emerald-400' : 'text-zinc-500'}`}
            >
              {statusMessage || 'Join our mailing list for gym updates.'}
            </p>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs uppercase tracking-[0.2em] text-zinc-500">
        © 2026 Iron Pulse Gym
      </div>
    </footer>
  )
}

export default Footer
