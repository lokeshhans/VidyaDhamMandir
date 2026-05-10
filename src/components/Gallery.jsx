import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

/* ===================================================== */
/* GALLERY DATA */
/* ===================================================== */

const galleryImages = [
  {
    id: 1,
    category: 'classroom',
    title: 'Biology Practical Session',
    image:
      'https://images.unsplash.com/photo-1532187863486-abbb9c13f35f?w=1200&q=80',
  },
  {
    id: 2,
    category: 'neet',
    title: 'NEET Guidance Class',
    image:
      'https://images.unsplash.com/photo-1427504494785-cdfc993d4d3d?w=1200&q=80',
  },
  {
    id: 3,
    category: 'students',
    title: 'Collaborative Student Learning',
    image:
      'https://images.unsplash.com/photo-1522202176988-696cb6bfc14d?w=1200&q=80',
  },
  {
    id: 4,
    category: 'mentorship',
    title: 'Student Mentorship Session',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
  },
  {
    id: 5,
    category: 'biology',
    title: 'Advanced Biology Discussion',
    image:
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1200&q=80',
  },
  {
    id: 6,
    category: 'community',
    title: 'Educational Community Support',
    image:
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80',
  },
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'classroom', label: 'Classrooms' },
  { id: 'biology', label: 'Biology' },
  { id: 'neet', label: 'NEET Guidance' },
  { id: 'students', label: 'Students' },
  { id: 'community', label: 'Community' },
]

/* ===================================================== */
/* COMPONENT */
/* ===================================================== */

export default function Gallery() {

  const [filter, setFilter] = useState('all')

  const [lightboxOpen, setLightboxOpen] = useState(false)

  const [lightboxIndex, setLightboxIndex] = useState(0)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  /* ===================================================== */
  /* FILTERED IMAGES */
  /* ===================================================== */

  const filteredImages = useMemo(() => {

    if (filter === 'all') {
      return galleryImages
    }

    return galleryImages.filter(
      (image) => image.category === filter
    )

  }, [filter])

  /* ===================================================== */
  /* LIGHTBOX */
  /* ===================================================== */

  const slides = filteredImages.map((image) => ({
    src: image.image,
  }))

  function handleOpen(index) {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  /* ===================================================== */
  /* UI */
  /* ===================================================== */

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative section-pad overflow-hidden bg-[#fffdf9]"
      aria-labelledby="gallery-heading"
    >

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl opacity-50"></div>

        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-50 rounded-full blur-3xl opacity-40"></div>

      </div>

      <div className="container-custom relative z-10">

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >

          <span className="section-label">
            Campus Gallery
          </span>

          <h2
            id="gallery-heading"
            className="section-heading mt-4 text-balance"
          >

            A Learning Environment
            <span className="text-orange-soft">
              {' '}Built Around Students
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 max-w-3xl mx-auto">

            Explore classroom learning, mentorship sessions,
            student activities, and educational moments that
            define the Vidya Dham Mandir experience.

          </p>

        </motion.div>

        {/* ===================================================== */}
        {/* FILTERS */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mt-14"
        >

          {categories.map((category) => (

            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${
                filter === category.id
                  ? 'bg-orange-500 text-white border-orange-500 shadow-soft'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-orange-300'
              }`}
            >

              {category.label}

            </button>

          ))}

        </motion.div>

        {/* ===================================================== */}
        {/* GRID */}
        {/* ===================================================== */}

        <motion.div
          layout
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-16"
        >

          <AnimatePresence mode="popLayout">

            {filteredImages.map((image, index) => (

              <motion.article
                key={image.id}
                layout
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className="group premium-card overflow-hidden p-0 cursor-pointer"
                onClick={() => handleOpen(index)}
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={image.image}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-6 w-full">

                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white text-xs font-medium uppercase tracking-wide">

                      {image.category}

                    </div>

                    <h3 className="mt-4 text-white text-2xl font-semibold leading-snug max-w-[90%]">

                      {image.title}

                    </h3>

                    <p className="mt-3 text-sm text-slate-200">

                      Click to explore image

                    </p>

                  </div>

                </div>

              </motion.article>

            ))}

          </AnimatePresence>

        </motion.div>

        {/* ===================================================== */}
        {/* STATS */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-24"
        >

          <div className="premium-card relative overflow-hidden text-center">

            {/* Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-orange-50 rounded-full blur-3xl opacity-60"></div>

            <div className="relative z-10">

              <span className="section-label">
                Student Community
              </span>

              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-4">

                Learning Beyond The Classroom

              </h3>

              <div className="grid sm:grid-cols-3 gap-10 mt-14">

                {[
                  {
                    value: '500+',
                    label: 'Students Guided',
                  },
                  {
                    value: '50+',
                    label: 'Learning Activities',
                  },
                  {
                    value: '100%',
                    label: 'Student Focused Environment',
                  },
                ].map((item, index) => (

                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={
                      inView
                        ? {
                            opacity: 1,
                            y: 0,
                          }
                        : {}
                    }
                    transition={{
                      delay: 0.3 + index * 0.08,
                    }}
                  >

                    <p className="text-5xl font-bold tracking-tight text-orange-500">

                      {item.value}

                    </p>

                    <p className="mt-3 text-slate-600 leading-7 font-medium">

                      {item.label}

                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </motion.div>

      </div>

      {/* ===================================================== */}
      {/* LIGHTBOX */}
      {/* ===================================================== */}

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
        styles={{
          container: {
            backgroundColor: 'rgba(11,17,32,0.96)',
          },
        }}
      />

    </section>
  )
}