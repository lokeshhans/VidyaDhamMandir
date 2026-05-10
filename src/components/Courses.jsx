import React, { useState } from 'react'

import {
  motion,
  AnimatePresence,
} from 'framer-motion'

import { useInView } from 'react-intersection-observer'

import {
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa'

/* ===================================================== */
/* DATA */
/* ===================================================== */

const courses = [
  {
    title: 'NEET Biology',
    category: 'Medical Entrance Preparation',
    students: '150+ Students',
    description:
      'Structured NEET Biology preparation focused on NCERT mastery, conceptual clarity, mock tests, and mentorship.',

    benefits: [
      'Complete NCERT syllabus coverage',
      'Mock tests and performance analysis',
      'Previous year NEET questions',
      'Personal mentorship support',
      'Concept-focused learning',
      'Doubt clearing sessions',
    ],

    parents: [
      'Student-friendly Hinglish teaching',
      'Regular academic guidance',
      'Supportive learning environment',
      'Focused exam preparation',
    ],
  },

  {
    title: 'Class 11–12 Science',
    category: 'Board Exam Preparation',
    students: '200+ Students',
    description:
      'Comprehensive support for Physics, Chemistry, and Biology with a focus on conceptual understanding and board performance.',

    benefits: [
      'Board aligned preparation',
      'Conceptual learning approach',
      'Revision and test practice',
      'Weekly assessment support',
      'Small batch mentorship',
      'Academic progress tracking',
    ],

    parents: [
      'Strong academic foundation',
      'Disciplined learning support',
      'Student confidence development',
      'Future career guidance',
    ],
  },

  {
    title: 'NCERT Foundation',
    category: 'Class 9–10 Support',
    students: '180+ Students',
    description:
      'Foundation-focused learning designed to strengthen Science, Mathematics, and conceptual clarity for future academic growth.',

    benefits: [
      'Strong conceptual base',
      'NCERT focused learning',
      'Regular assignments',
      'Monthly progress evaluations',
      'Interactive doubt sessions',
      'Study material support',
    ],

    parents: [
      'Builds future readiness',
      'Improves learning confidence',
      'Safe academic environment',
      'Consistent mentorship',
    ],
  },

  {
    title: 'Personality Development',
    category: 'Confidence & Communication',
    students: '100+ Students',
    description:
      'Programs focused on communication, confidence building, discipline, leadership, and long-term student growth.',

    benefits: [
      'Public speaking practice',
      'Communication improvement',
      'Confidence building',
      'Career counselling',
      'Leadership activities',
      'Motivation sessions',
    ],

    parents: [
      'Supports holistic development',
      'Improves communication skills',
      'Builds future confidence',
      'Encourages discipline',
    ],
  },
]

/* ===================================================== */
/* COMPONENT */
/* ===================================================== */

export default function Courses() {

  const [activeCourse, setActiveCourse] = useState(null)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  /* ===================================================== */
  /* UI */
  /* ===================================================== */

  return (
    <section
      id="courses"
      ref={ref}
      className="relative section-pad overflow-hidden bg-[#fffdf9]"
      aria-labelledby="courses-heading"
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
        {/* HEADER */}
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
            Learning Programs
          </span>

          <h2
            id="courses-heading"
            className="section-heading mt-4 text-balance"
          >

            Academic Programs
            <span className="text-orange-soft">
              {' '}Designed Around Student Growth
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 max-w-3xl mx-auto">

            Structured educational programs focused on conceptual clarity,
            mentorship, confidence building, and long-term academic success.

          </p>

        </motion.div>

        {/* ===================================================== */}
        {/* GRID */}
        {/* ===================================================== */}

        <div className="grid lg:grid-cols-2 gap-7 mt-20">

          {courses.map((course, index) => {

            const isOpen = activeCourse === index

            return (
              <motion.article
                key={course.title}
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
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className={`premium-card overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-orange-300'
                    : ''
                }`}
              >

                {/* ================================================= */}
                {/* TOP */}
                {/* ================================================= */}

                <button
                  onClick={() =>
                    setActiveCourse(
                      isOpen
                        ? null
                        : index
                    )
                  }
                  className="w-full text-left"
                >

                  {/* Category */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold tracking-wide uppercase">

                    {course.category}

                  </div>

                  {/* Title */}
                  <div className="flex items-start justify-between gap-6 mt-6">

                    <div>

                      <h3 className="text-3xl font-semibold text-slate-900 leading-tight">

                        {course.title}

                      </h3>

                      <p className="mt-3 text-sm font-medium text-orange-600">

                        {course.students}

                      </p>

                    </div>

                    <motion.div
                      animate={{
                        rotate: isOpen
                          ? 90
                          : 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="mt-2 text-orange-500"
                    >

                      <FaArrowRight />

                    </motion.div>

                  </div>

                  {/* Description */}
                  <p className="mt-6 text-slate-600 leading-8">

                    {course.description}

                  </p>

                </button>

                {/* ================================================= */}
                {/* EXPANDED */}
                {/* ================================================= */}

                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: 'auto',
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="overflow-hidden"
                    >

                      <div className="divider my-8"></div>

                      <div className="grid md:grid-cols-2 gap-10">

                        {/* Benefits */}
                        <div>

                          <h4 className="text-xl font-semibold text-slate-900">

                            Student Benefits

                          </h4>

                          <div className="space-y-4 mt-6">

                            {course.benefits.map((item) => (

                              <div
                                key={item}
                                className="flex items-start gap-3"
                              >

                                <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />

                                <p className="text-slate-700 leading-7 text-sm">

                                  {item}

                                </p>

                              </div>

                            ))}

                          </div>

                        </div>

                        {/* Parent Trust */}
                        <div>

                          <h4 className="text-xl font-semibold text-slate-900">

                            Parent Confidence

                          </h4>

                          <div className="space-y-4 mt-6">

                            {course.parents.map((item) => (

                              <div
                                key={item}
                                className="flex items-start gap-3"
                              >

                                <div className="w-2 h-2 rounded-full bg-orange-500 mt-3 flex-shrink-0"></div>

                                <p className="text-slate-700 leading-7 text-sm">

                                  {item}

                                </p>

                              </div>

                            ))}

                          </div>

                        </div>

                      </div>

                      {/* CTA */}
                      <div className="mt-10 flex flex-col sm:flex-row gap-4">

                        <button className="btn-primary">

                          Join This Program

                        </button>

                        <a
                          href="https://wa.me/918053678711?text=Namaste%20Sir,%20mujhe%20course%20ke%20baare%20mein%20jaankari%20chahiye."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                        >

                          Talk on WhatsApp

                        </a>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.article>
            )
          })}

        </div>

        {/* ===================================================== */}
        {/* BOTTOM CTA */}
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
            delay: 0.2,
          }}
          className="mt-28"
        >

          <div className="premium-card text-center relative overflow-hidden">

            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-orange-50 rounded-full blur-3xl opacity-60"></div>

            <div className="relative z-10">

              <span className="section-label">
                Need Guidance?
              </span>

              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-4">

                Find The Right Learning Path

              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">

                Get guidance on choosing the most suitable program
                based on academic goals, preparation level, and future plans.

              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

                <button className="btn-primary">

                  Free Course Consultation

                </button>

                <a
                  href="https://wa.me/918053678711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >

                  Contact on WhatsApp

                </a>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}