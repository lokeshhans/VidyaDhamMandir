import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/* ===================================================== */
/* TESTIMONIAL DATA */
/* ===================================================== */

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'NEET Aspirant',
    location: 'Class 12 • Palwal',
    category: 'student',
    achievement: 'Improved Biology performance significantly',
    text: 'The biggest difference for me was understanding concepts clearly in Hinglish. Learning became comfortable and confidence started growing naturally.',
  },
  {
    id: 2,
    name: 'Priya Singh',
    role: 'Student',
    location: 'Class 11 • Palwal',
    category: 'student',
    achievement: 'Built stronger academic foundation',
    text: 'Doubts are explained patiently and learning never feels stressful. It genuinely feels like students matter here.',
  },
  {
    id: 3,
    name: 'Meera Devi',
    role: 'Parent',
    location: 'Haryana',
    category: 'parent',
    achievement: 'Positive academic and personal growth',
    text: 'My son became more confident and disciplined after joining. The guidance and support made a visible difference.',
  },
  {
    id: 4,
    name: 'Arun Sharma',
    role: 'Student',
    location: 'Class 9 • Hisar',
    category: 'student',
    achievement: 'Improved focus and consistency',
    text: 'The mentorship sessions helped me become more serious about studies and manage my time much better.',
  },
  {
    id: 5,
    name: 'Sunita Patel',
    role: 'Parent',
    location: 'Palwal',
    category: 'parent',
    achievement: 'Better confidence and learning habits',
    text: 'The environment feels supportive and genuine. We never expected this level of quality and care without expensive fees.',
  },
  {
    id: 6,
    name: 'Vikram Verma',
    role: 'NEET Aspirant',
    location: 'Class 12 • Faridabad',
    category: 'student',
    achievement: 'Preparing confidently for NEET',
    text: 'Complex Biology topics became easier to understand because teaching focuses on clarity instead of pressure.',
  },
]

/* ===================================================== */
/* COMPONENT */
/* ===================================================== */

export default function Testimonials() {

  const [filter, setFilter] = useState('all')

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  /* ===================================================== */
  /* FILTERED DATA */
  /* ===================================================== */

  const filteredTestimonials = useMemo(() => {

    if (filter === 'all') {
      return testimonials
    }

    return testimonials.filter(
      (testimonial) => testimonial.category === filter
    )

  }, [filter])

  /* ===================================================== */
  /* UI */
  /* ===================================================== */

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative section-pad overflow-hidden bg-[#fffdf9]"
      aria-labelledby="testimonials-heading"
    >

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl opacity-50"></div>

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50 rounded-full blur-3xl opacity-40"></div>

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
            Testimonials
          </span>

          <h2
            id="testimonials-heading"
            className="section-heading mt-4 text-balance"
          >
            Trusted by Students
            <span className="text-orange-soft"> and Families </span>
            Across Haryana
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 max-w-3xl mx-auto">
            Real experiences from students and parents who
            found confidence, mentorship, and academic support
            through Vidya Dham Mandir.
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

          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'student', label: 'Students' },
            { id: 'parent', label: 'Parents' },
          ].map((tab) => (

            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${
                filter === tab.id
                  ? 'bg-orange-500 text-white border-orange-500 shadow-soft'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-orange-300'
              }`}
            >
              {tab.label}
            </button>

          ))}

        </motion.div>

        {/* ===================================================== */}
        {/* TESTIMONIAL GRID */}
        {/* ===================================================== */}

        <motion.div
          layout
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16"
        >

          <AnimatePresence mode="popLayout">

            {filteredTestimonials.map((testimonial, index) => (

              <motion.article
                key={testimonial.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={
                  inView
                    ? { opacity: 1, y: 0 }
                    : {}
                }
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="premium-card flex flex-col h-full"
              >

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">

                  {[...Array(5)].map((_, i) => (

                    <div
                      key={i}
                      className="w-4 h-4 rounded-full bg-orange-400"
                    ></div>

                  ))}

                </div>

                {/* Quote */}
                <blockquote className="text-slate-700 leading-8 flex-grow">
                  “{testimonial.text}”
                </blockquote>

                {/* Divider */}
                <div className="divider my-7"></div>

                {/* Footer */}
                <div className="flex items-start gap-4">

                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center flex-shrink-0">

                    <span className="text-lg font-bold text-orange-600">
                      {testimonial.name.charAt(0)}
                    </span>

                  </div>

                  {/* Info */}
                  <div>

                    <h3 className="font-semibold text-slate-900">
                      {testimonial.name}
                    </h3>

                    <p className="text-sm text-orange-600 font-medium mt-1">
                      {testimonial.role}
                    </p>

                    <p className="text-sm text-slate-500 mt-1">
                      {testimonial.location}
                    </p>

                    <div className="inline-flex items-center mt-3 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-medium">
                      {testimonial.achievement}
                    </div>

                  </div>

                </div>

              </motion.article>

            ))}

          </AnimatePresence>

        </motion.div>

        {/* ===================================================== */}
        {/* TRUST STATS */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >

          <div className="premium-card text-center overflow-hidden relative">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-orange-50 rounded-full blur-3xl opacity-60"></div>

            <div className="relative z-10">

              <span className="section-label">
                Community Trust
              </span>

              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-4">
                Built on Real Student Progress
              </h3>

              <div className="grid sm:grid-cols-3 gap-10 mt-14">

                {[
                  {
                    value: '500+',
                    label: 'Students Guided',
                  },
                  {
                    value: '4.9/5',
                    label: 'Average Parent Satisfaction',
                  },
                  {
                    value: '95%',
                    label: 'Students Recommend Us',
                  },
                ].map((stat, index) => (

                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView
                        ? { opacity: 1, y: 0 }
                        : {}
                    }
                    transition={{
                      delay: 0.2 + index * 0.1,
                    }}
                  >

                    <p className="text-5xl font-bold text-orange-500 tracking-tight">
                      {stat.value}
                    </p>

                    <p className="mt-3 text-slate-600 font-medium leading-7">
                      {stat.label}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </motion.div>

        {/* ===================================================== */}
        {/* CTA */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mt-24"
        >

          <div className="max-w-3xl mx-auto">

            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Become Part of a Learning Community
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Join students who are building confidence,
              discipline, and stronger academic foundations
              through meaningful mentorship.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

              <button className="btn-primary">
                Start Learning Free
              </button>

              <button className="btn-secondary">
                Contact Prashant Sir
              </button>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}