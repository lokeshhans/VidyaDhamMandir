import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Counter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  useEffect(() => {
    if (!inView) return

    let start = 0
    const increment = target / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [inView, target, duration])

  return <span ref={ref}>{count.toLocaleString('en-IN')}</span>
}

const notices = [
  'Free Counseling Sessions Available',
  'New Batch Starting Next Month',
  'NEET Biology Advanced Classes',
  'Free Motivation Workshops',
  'Scholarship Support for Deserving Students',
  'Personal Mentorship Program',
  'NCERT Foundation Classes',
  'Board Exam Preparation',
]

export default function Impact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const stats = [
    { number: 500, label: 'Students Guided', icon: '👨‍🎓' },
    { number: 6, label: 'Years of Teaching', icon: '⏳' },
    { number: 2000, label: 'Free Counseling Sessions', icon: '💬' },
    { number: 150, label: 'NEET Aspirants Mentored', icon: '🚀' },
  ]

  return (
    <section ref={ref} className="section-pad bg-white overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#f97316"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-3">हमारा प्रभाव</p>
          <h2 className="section-heading mx-auto max-w-2xl">
            Real Impact, <span className="text-gradient-saffron">Real Stories</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-xl mx-auto">
            Numbers tell a story of commitment to free quality education in Palwal.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card rounded-2xl p-8 text-center group hover:shadow-saffron transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-3 inline-block group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>

              <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-saffron-500 to-orange-600 mb-2 font-display">
                <Counter target={stat.number} duration={2} />
                {stat.number >= 100 && '+'}
              </div>

              <p className="text-gray-700 font-semibold text-sm">{stat.label}</p>

              <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-saffron-500 to-transparent transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-16">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-saffron-500 to-transparent" />
            <span className="text-saffron-600 font-semibold text-sm tracking-widest">
              NOTICES & UPDATES
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-saffron-500 to-transparent" />
          </div>
        </div>

        {/* Marquee Notice Board */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
          className="relative overflow-hidden"
        >
          <div className="bg-gradient-to-r from-saffron-600 to-orange-500 rounded-2xl p-6 shadow-saffron relative overflow-hidden group">
            {/* Animated background */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
              }}
            />

            <div className="relative z-10">
              <p className="text-white font-bold text-xs tracking-widest mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse" />
                LATEST ANNOUNCEMENTS
              </p>

              <div className="overflow-hidden">
                <motion.div
                  className="flex gap-8 whitespace-nowrap"
                  animate={{ x: [0, -100 * notices.length + '%'] }}
                  transition={{
                    duration: notices.length * 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {[...notices, ...notices].map((notice, i) => (
                    <span
                      key={i}
                      className="text-white font-semibold text-sm md:text-base flex-shrink-0 flex items-center gap-3"
                    >
                      <span>📢</span>
                      {notice}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust messaging */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid sm:grid-cols-2 gap-6"
        >
          {[
            {
              icon: '🤝',
              title: 'Community Trust',
              desc: 'Thousands of families trust Vidya Dham Mandir for genuine education.',
            },
            {
              icon: '⭐',
              title: 'Student Success',
              desc: 'Our students achieve their dreams with consistent mentorship and support.',
            },
            {
              icon: '💖',
              title: 'Genuine Mission',
              desc: 'Education for everyone — yahi hamara commitment hai.',
            },
            {
              icon: '🎯',
              title: 'Real Results',
              desc: 'NEET qualifications, board success, and confidence in every student.',
            },
          ].map((trust, i) => (
            <motion.div
              key={trust.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl bg-orange-50 border border-saffron-200 hover:shadow-glass transition-all"
            >
              <div className="text-3xl flex-shrink-0">{trust.icon}</div>
              <div>
                <h4 className="font-bold text-royal-800 mb-1">{trust.title}</h4>
                <p className="text-gray-600 text-sm">{trust.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
