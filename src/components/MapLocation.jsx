import { MapPin, Navigation } from 'lucide-react'
import { mapEmbedUrl, contactDetails } from '../data/gymData'

const MapLocation = () => {
  return (
    <section className="bg-[#0a0a0a] px-4 pb-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#f97316]">Find us</p>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">Visit the studio.</h2>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#f97316] px-5 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(249,115,22,0.35)]"
          >
            <Navigation className="h-4 w-4" />
            Get Directions
          </a>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]">
          <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4 text-zinc-300">
            <MapPin className="h-4 w-4 text-[#f97316]" />
            {contactDetails.address}
          </div>
          <iframe
            title="Gym Location Map"
            src={mapEmbedUrl}
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default MapLocation
