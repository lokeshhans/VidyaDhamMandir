import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/* ===================================================== */
/* COUNTER */
/* ===================================================== */

function Counter({ target, suffix = '' }) {

  const [count, setCount] = useState(0)

  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  })

  useEffect(() => {

    if (!inView) return

    let current = 0

    const increment = target / 80

    const timer = setInterval(() => {

      current += increment

      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }

    }, 20)

    return () => clearInterval(timer)

  }, [inView, target])

  return (
    <span ref={ref}>
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

/* ===================================================== */
/* DATA */
/* ===================================================== */

const stats = [
  {
    number: 500,
    suffix: '+',
    label: 'Students Guided',
    description:
      'Students supported through mentorship, academic guidance, and NEET preparation.',
  },
  {
    number: 6,
    suffix: '+',
    label: 'Years of Teaching',
    description:
      'Consistent dedication toward accessible and meaningful education.',
  },
  {
    number: 2000,
    suffix: '+',
    label: 'Counselling Sessions',
    description:
      'Personal guidance sessions focused on confidence, clarity, and discipline.',
  },
  {
    number: 150,
    suffix: '+',
    label: 'NEET Aspirants',
    description:
      'Students preparing for medical entrance exams with structured support.',
  },
]

const highlights = [
  {
    title: 'Community Trust',
    description:
      'Families across Haryana trust Vidya Dham Mandir for genuine educational support.',
  },
  {
    title: 'Student-Centered Learning',
    description:
      'Teaching methods designed around clarity, mentorship, and confidence building.',
  },
  {
    title: 'Mission Driven',
    description:
      'Focused on educational impact instead of commercial coaching culture.',
  },
  {
    title: 'Consistent Academic Support',
    description:
      'Structured guidance for boards, NEET preparation, and conceptual learning.',
  },
]

const notices = [
  'Free counselling sessions available for students',
  'New Biology batch admissions open',
  'NEET preparation mentorship program',
  'NCERT foundation learning support',
]

/* ===================================================== */
/* COMPONENT */
/* ===================================================== */

export default function Impact() {

  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      className="relative section-pad overflow-hidden bg-[#fffdf9]"
      aria-labelledby="impact-heading"
    >

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-orange-50 rounded-full blur-3xl opacity-50"></div>

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-amber-50 rounded-full blur-3xl opacity-40"></div>

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
            Our Impact
          </span>

          <h2
            id="impact-heading"
            className="section-heading mt-4 text-balance"
          >
            Meaningful Learning
            <span className="text-orange-soft"> Through Real Support </span>
            and Guidance
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 max-w-3xl mx-auto">
            Every student journey represents confidence,
            consistency, and access to quality education
            without unnecessary financial pressure.
          </p>

        </motion.div>

        {/* ===================================================== */}
        {/* STATS */}
        {/* ===================================================== */}

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-20">

          {stats.map((stat, index) => (

            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="premium-card text-center h-full"
            >

              <div className="w-12 h-[3px] bg-orange-500 rounded-full mx-auto mb-8"></div>

              <div className="text-5xl md:text-6xl font-bold tracking-tight text-orange-500">

                <Counter
                  target={stat.number}
                  suffix={stat.suffix}
                />

              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {stat.label}
              </h3>

              <p className="mt-4 text-slate-600 leading-7 text-sm">
                {stat.description}
              </p>

            </motion.article>

          ))}

        </div>

        {/* ===================================================== */}
        {/* NOTICE BAR */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-24"
        >

          <div className="rounded-[28px] border border-orange-200 bg-white overflow-hidden shadow-soft">

            {/* Header */}
            <div className="border-b border-orange-100 px-6 py-4 bg-orange-50">

              <div className="flex items-center gap-3">

                <div className="w-2 h-2 rounded-full bg-orange-500"></div>

                <p className="text-sm font-semibold tracking-wide text-orange-700 uppercase">
                  Latest Updates
                </p>

              </div>

            </div>

            {/* Notices */}
            <div className="divide-y divide-slate-100">

              {notices.map((notice, index) => (

                <motion.div
                  key={notice}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.4 + index * 0.08,
                  }}
                  className="px-6 py-5 flex items-start gap-4"
                >

                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-3 flex-shrink-0"></div>

                  <p className="text-slate-700 leading-7">
                    {notice}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </motion.div>

        {/* ===================================================== */}
        {/* TRUST HIGHLIGHTS */}
        {/* ===================================================== */}

        <div className="grid md:grid-cols-2 gap-6 mt-24">

          {highlights.map((item, index) => (

            <motion.article
              key={item.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                inView
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.08,
              }}
              className="premium-card"
            >

              <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">

                <div className="w-3 h-3 rounded-full bg-orange-500"></div>

              </div>

              <h3 className="text-2xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                {item.description}
              </p>

            </motion.article>

          ))}

        </div>

        {/* ===================================================== */}
        {/* CTA */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mt-28 text-center"
        >

          <div className="max-w-3xl mx-auto">

            <span className="section-label">
              Start Your Journey
            </span>

            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mt-4">
              Education That Supports
              <span className="text-orange-soft"> Growth, Confidence, </span>
              and Future Goals
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Join a learning environment built around
              mentorship, consistency, and genuine student development.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

              <button className="btn-primary">
                Join Free Learning
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