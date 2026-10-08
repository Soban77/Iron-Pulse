import { Mail, MapPin, Phone, MessageCircle, Globe, Send, Play } from 'lucide-react'
import { owner, contactDetails } from '../data/gymData'

const OwnerContact = () => {
  // const emailSubject = encodeURIComponent(`Gym enquiry for ${owner.name}`)
  // const emailBody = encodeURIComponent(
  //   `Hello ${owner.name},\n\nI would like to get in touch with you about Iron Pulse Gym.\n\nMessage:\n\n\nThank you,\n[Your name]`
  // )

  const emailSubject = `Gym enquiry for ${owner.name}`;
  const emailBody = 
  `Hello ${owner.name},\n\nI would like to get in touch with you about Iron Pulse Gym.\n\nMessage:\n\n\nThank you,\n[Your name]`;

  return (
    <section id="contact" className="bg-[#111111] px-4 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#171717]">
          <img src={owner.image} alt={owner.name} className="h-[540px] w-full object-cover" />
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#f97316]">Owner’s corner</p>
          <h2 className="text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">Real coaching. Real community.</h2>
          <p className="mt-5 text-lg text-zinc-300">{owner.bio}</p>

          <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] p-6">
            <p className="text-xl font-bold text-white">{owner.name}</p>
            <p className="mt-1 text-sm text-[#f97316]">{owner.title}</p>
            <p className="mt-5 text-zinc-300">{owner.welcomeMessage}</p>

            <div className="mt-6 space-y-4 text-sm text-zinc-300">
              <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 transition hover:text-white">
                <Phone className="h-4 w-4 text-[#f97316]" />
                {contactDetails.phone}
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactDetails.email}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition hover:text-white"
                aria-label={`Email ${owner.name} at ${contactDetails.email}`}
              >
                <Mail className="h-4 w-4 text-[#f97316]" />
                {contactDetails.email}
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#f97316]" />
                {contactDetails.address}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`https://wa.me/${contactDetails.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a href={contactDetails.socials[0].href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white">
                <Globe className="h-4 w-4" />
                Instagram
              </a>
              <a href={contactDetails.socials[1].href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white">
                <Send className="h-4 w-4" />
                Facebook
              </a>
              <a href={contactDetails.socials[2].href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white">
                <Play className="h-4 w-4" />
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OwnerContact
