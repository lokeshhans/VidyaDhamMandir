import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const galleryImages = [
  {
    id: 1,
    category: 'classroom',
    title: 'Biology Lab Session',
    image: 'https://images.unsplash.com/photo-1532187863486-abbb9c13f35f?w=600&h=400&fit=crop',
    emoji: '🧪',
  },
  {
    id: 2,
    category: 'classroom',
    title: 'NEET Class in Progress',
    image: 'https://images.unsplash.com/photo-1427504494785-cdfc993d4d3d?w=600&h=400&fit=crop',
    emoji: '📚',
  },
  {
    id: 3,
    category: 'activities',
    title: 'Group Study Session',
    image: 'https://images.unsplash.com/photo-1522202176988-696cb6bfc14d?w=600&h=400&fit=crop',
    emoji: '👥',
  },
  {
    id: 4,
    category: 'motivation',
    title: 'Success Stories Sharing',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    emoji: '⭐',
  },
  {
    id: 5,
    category: 'biology',
    title: 'Practical Biology Class',
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&h=400&fit=crop',
    emoji: '🧬',
  },
  {
    id: 6,
    category: 'learning',
    title: 'Collaborative Learning',
    image: 'https://images.unsplash.com/photo-1427504494785-cdfc993d4d3d?w=600&h=400&fit=crop',
    emoji: '🤝',
  },
  {
    id: 7,
    category: 'community',
    title: 'Student Achievement Board',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop',
    emoji: '🏆',
  },
  {
    id: 8,
    category: 'activities',
    title: 'Motivational Workshop',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    emoji: '💪',
  },
  {
    id: 9,
    category: 'achievements',
    title: 'NEET Success Celebrations',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    emoji: '🎉',
  },
]

const categories = [
  { id: 'all', label: 'All', icon: '📸' },
  { id: 'classroom', label: 'Classrooms', icon: '📚' },
  { id: 'biology', label: 'Biology Classes', icon: '🧬' },
  { id: 'activities', label: 'Activities', icon: '🎯' },
  { id: 'motivation', label: 'Motivation', icon: '🌟' },
  { id: 'learning', label: 'Learning', icon: '👥' },
  { id: 'community', label: 'Community', icon: '💖' },
  { id: 'achievements', label: 'Achievements', icon: '🏆' },
]

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const filteredImages =
    filter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === filter)

  const lightboxSlides = filteredImages.map((img) => ({
    src: img.image,
  }))

  const handleImageClick = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="gallery" ref={ref} className="section-pad bg-warm-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-saffron-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">हमारी गैलरी</p>
          <h2 className="section-heading mx-auto max-w-3xl">
            See It in <span className="text-gradient-saffron">Action</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Real classroom moments, real student achievements, real impact.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-saffron-500 to-orange-600 text-white shadow-saffron'
                  : 'glass-card hover:shadow-glass'
              }`}
            >
              <span className="text-lg">{cat.icon}</span>
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleImageClick(idx)}
                className="group cursor-pointer rounded-2xl overflow-hidden shadow-glass hover:shadow-saffron transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image container */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-200">
                  <img
                    src={img.image}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="text-white">
                      <div className="text-3xl mb-2">{img.emoji}</div>
                      <h4 className="font-bold text-lg leading-tight">{img.title}</h4>
                      <p className="text-saffron-300 text-xs mt-2 flex items-center gap-1">
                        <span>👁️</span> Click to view
                      </p>
                    </div>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-saffron-600 shadow-sm">
                  {img.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        {lightboxOpen && (
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={lightboxSlides}
            index={lightboxIndex}
            styles={{
              container: { backgroundColor: 'rgba(15, 26, 77, 0.95)' },
            }}
          />
        )}

        {/* Statistics footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-2xl p-8 text-center border-t-2 border-saffron-500"
        >
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { number: '500+', label: 'Student Photos' },
              { number: '50+', label: 'Monthly Events' },
              { number: '100%', label: 'Real Moments' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <p className="text-3xl font-bold text-gradient-saffron">{stat.number}</p>
                <p className="text-gray-600 font-medium text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
