import { useMemo, useState } from 'react'
import { X } from 'lucide-react'
import { gallery } from '../data/gymData'

const categories = ['All', 'Weights', 'Cardio', 'Studio', 'Locker Room']

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages = useMemo(() => {
    if (activeFilter === 'All') return gallery
    return gallery.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="gallery" className="bg-[#111111] px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#f97316]">Our space</p>
          <h2 className="text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">A place for every goal.</h2>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeFilter === category
                  ? 'bg-[#f97316] text-black'
                  : 'border border-white/10 bg-white/5 text-zinc-300 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {filteredImages.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedImage(item)}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#1a1a1a] ${
                index === 0 || index === 3 ? 'md:col-span-2' : ''
              }`}
            >
              <img src={item.image} alt={item.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 md:h-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#fbbf24]">{item.category}</p>
                <p className="mt-2 text-2xl font-bold text-white">{item.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} className="max-h-[80vh] w-full object-cover" />
            <div className="p-6">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#fbbf24]">{selectedImage.category}</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
