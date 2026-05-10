import React from 'react'

import { motion } from 'framer-motion'

import { useInView } from 'react-intersection-observer'

import aboutImg from '../assets/about-students.webp'

/* ===================================================== */
/* DATA */
/* ===================================================== */

const values = [
  {
    title: 'Student First Learning',
    description:
      'Every decision is focused on student growth, confidence, and long-term academic success.',
  },

  {
    title: 'Purpose Driven Education',
    description:
      'Vidya Dham Mandir was built around meaningful educational impact instead of commercial coaching culture.',
  },

  {
    title: 'Accessible Learning',
    description:
      'Educational guidance designed to support students regardless of financial background.',
  },

  {
    title: 'Mentorship & Discipline',
    description:
      'Students receive academic mentorship, confidence support, and structured learning guidance.',
  },
]

const stats = [
  {
    value: '500+',
    label: 'Students Guided',
  },

  {
    value: '8+',
    label: 'Years of Teaching',
  },

  {
    value: '100%',
    label: 'Student Focused',
  },
]

/* ===================================================== */
/* COMPONENT */
/* ===================================================== */

export default function About() {

  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  return (
    <section
      id="about"
      ref={ref}
      className="relative section-pad overflow-hidden bg-[#fffdf9]"
      aria-labelledby="about-heading"
    >

      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl opacity-50"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-50 rounded-full blur-3xl opacity-40"></div>

      </div>

      <div className="container-custom relative z-10">

        {/* ===================================================== */}
        {/* TOP */}
        {/* ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.7,
          }}
          className="max-w-4xl mx-auto text-center"
        >

          <span className="section-label">
            About Vidya Dham Mandir
          </span>

          <h2
            id="about-heading"
            className="section-heading mt-4 text-balance"
          >

            Education Built Around
            <span className="text-orange-soft">
              {' '}Students, Mentorship,
            </span>
            {' '}and Purpose

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 max-w-3xl mx-auto">

            Vidya Dham Mandir was created with a simple mission —
            to make meaningful education accessible while helping
            students grow with confidence, discipline, and guidance.

          </p>

        </motion.div>

        {/* ===================================================== */}
        {/* MAIN GRID */}
        {/* ===================================================== */}

        <div className="grid lg:grid-cols-[1fr_1fr] gap-14 items-center mt-20">

          {/* ================================================= */}
          {/* IMAGE SIDE */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.7,
            }}
            className="relative"
          >

            {/* Image */}
            <div className="relative overflow-hidden rounded-[32px] shadow-2xl">

              <img
                src={aboutImg}
                alt="Students learning at Vidya Dham Mandir"
                loading="lazy"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/75 via-[#0b1120]/10 to-transparent"></div>

            </div>

            {/* Founder Card */}
            <motion.div
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
                delay: 0.3,
              }}
              className="absolute left-5 right-5 bottom-5 md:left-8 md:right-auto md:max-w-sm rounded-[28px] border border-white/20 bg-white/90 backdrop-blur-xl p-6 shadow-2xl"
            >

              <p className="text-slate-700 leading-7 text-sm md:text-base">

                “Education becomes meaningful when students
                feel supported, guided, and confident in their journey.”

              </p>

              <div className="flex items-center gap-4 mt-6">

                {/* Avatar */}
                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white font-bold text-lg">

                  PS

                </div>

                {/* Info */}
                <div>

                  <h3 className="font-semibold text-slate-900">

                    Prashant Singh

                  </h3>

                  <p className="text-sm text-orange-600 mt-1">

                    Founder • Vidya Dham Mandir

                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

          {/* ================================================= */}
          {/* CONTENT SIDE */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.7,
            }}
          >

            {/* Quote Box */}
            <div className="premium-card relative overflow-hidden">

              {/* Glow */}
              <div className="absolute top-0 right-0 w-[240px] h-[240px] bg-orange-50 rounded-full blur-3xl opacity-70"></div>

              <div className="relative z-10">

                <span className="section-label">
                  Our Mission
                </span>

                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mt-4 leading-tight">

                  Learning Beyond
                  Books and Examinations

                </h3>

                <p className="mt-6 text-slate-600 leading-8 text-lg">

                  Vidya Dham Mandir focuses on more than academic
                  performance. Students receive mentorship,
                  confidence building, conceptual learning support,
                  and guidance designed for long-term growth.

                </p>

              </div>

            </div>

            {/* Story */}
            <div className="mt-10 space-y-6">

              <p className="text-slate-600 leading-8">

                What started as a small educational initiative in Palwal
                has now grown into a trusted learning environment for
                students preparing for NEET, board examinations,
                and foundational academic success.

              </p>

              <p className="text-slate-600 leading-8">

                Students from both rural and urban backgrounds
                continue to receive educational support built around
                mentorship, accessibility, and genuine academic care.

              </p>

            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-5 mt-12">

              {values.map((value, index) => (

                <motion.article
                  key={value.title}
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
                    delay: 0.2 + index * 0.08,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="premium-card"
                >

                  {/* Top */}
                  <div className="w-10 h-[3px] bg-orange-500 rounded-full mb-6"></div>

                  <h4 className="text-xl font-semibold text-slate-900 leading-snug">

                    {value.title}

                  </h4>

                  <p className="mt-4 text-slate-600 leading-7 text-sm">

                    {value.description}

                  </p>

                </motion.article>

              ))}

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">

              {stats.map((stat, index) => (

                <motion.div
                  key={stat.label}
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
                  className="rounded-[28px] bg-[#0b1120] text-white p-6 text-center shadow-2xl"
                >

                  <p className="text-4xl font-bold tracking-tight text-orange-400">

                    {stat.value}

                  </p>

                  <p className="mt-3 text-sm text-slate-300 leading-6">

                    {stat.label}

                  </p>

                </motion.div>

              ))}

            </div>

            {/* Bottom Quote */}
            <div className="mt-10 rounded-[28px] border border-orange-200 bg-orange-50 px-6 py-6">

              <p
                className="text-orange-900 leading-8 italic"
                style={{
                  fontFamily: "'Lora', serif",
                }}
              >

                “When students are given guidance, belief,
                and meaningful opportunities, education becomes
                a force that transforms families and communities.”

              </p>

              <p className="mt-4 text-sm font-medium text-orange-600">

                — Prashant Sir

              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}