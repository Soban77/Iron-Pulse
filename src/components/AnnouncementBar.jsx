import { useState } from 'react'
import { Sparkles, X } from 'lucide-react'

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="sticky top-0 z-[60] border-b border-black/10 bg-[#f97316] text-[#111827] shadow-lg shadow-[#f97316]/15">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 text-center sm:px-6">
        <div className="flex min-w-0 items-center justify-center gap-2 text-sm font-semibold sm:gap-3">
          <span className="rounded-full bg-black/10 p-1">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <p className="truncate">Free 7-day guest pass + body scan on your first visit.</p>
        </div>

        <button
          type="button"
          onClick={() => setIsVisible(false)}
          aria-label="Dismiss announcement"
          className="rounded-full border border-black/10 bg-black/5 p-1.5 text-black transition hover:bg-black/10"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default AnnouncementBar
