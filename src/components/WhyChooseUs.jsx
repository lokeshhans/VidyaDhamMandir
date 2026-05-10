import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/* ===================================================== */
/* DATA */
/* ===================================================== */

const features = [
  {
    title: 'Completely Free Learning',
    desc: 'Education should never stop because of financial limitations. Every student deserves equal opportunity.',
  },
  {
    title: 'Simple Hinglish Teaching',
    desc: 'Concepts explained in a natural language students actually understand and connect with.',
  },
  {
    title: 'Personal Guidance',
    desc: 'Focused mentorship and individual attention to help students grow with confidence.',
  },
  {
    title: 'NEET Biology Expertise',
    desc: 'Structured preparation designed especially for Biology and medical entrance aspirants.',
  },
  {
    title: 'Stress-Free Environment',
    desc: 'A supportive learning atmosphere where students improve steadily without unnecessary pressure.',
  },
  {
    title: 'Purpose Driven Institute',
    desc: 'Built to genuinely help students and families rather than operate like a commercial coaching center.',
  },
]

const studentNeeds = [
  'Affordable education without compromising quality',
  'Guidance in understandable language',
  'Strong NCERT and board preparation',
  'Supportive mentorship and doubt solving',
]

const parentNeeds = [
  'Safe and disciplined learning environment',
  'Focused preparation for future goals',
  'Regular student guidance and motivation',
  'Education driven by values and purpose',
]

/* ===================================================== */
/* COMPONENT */
/* ===================================================== */

export default function WhyChooseUs() {

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      className="relative section-pad overflow-hidden bg-[#fffdf9]"
      aria-label="Why Choose Vidya Dham Mandir"
    >

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl opacity-60"></div>

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container-custom relative z-10">

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >

          <span className="section-label">
            Why Students Trust Us
          </span>

          <h2 className="section-heading mt-4 text-balance">
            Education Built Around
            <span className="text-orange-soft"> Students, </span>
            Not Business
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 max-w-3xl mx-auto">
            Vidya Dham Mandir focuses on meaningful learning,
            mentorship, and real academic support for students
            preparing for NEET, board exams, and future goals.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* FEATURES GRID */}
        {/* ===================================================== */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">

          {features.map((feature, index) => (

            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="premium-card hover-lift"
            >

              {/* Top Accent */}
              <div className="w-12 h-[3px] bg-orange-500 rounded-full mb-6"></div>

              <h3 className="text-2xl font-semibold text-slate-900 leading-snug">
                {feature.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                {feature.desc}
              </p>

            </motion.article>

          ))}

        </div>

        {/* ===================================================== */}
        {/* STUDENT + PARENT SECTION */}
        {/* ===================================================== */}

        <div className="grid lg:grid-cols-2 gap-8 mt-24">

          {/* Students */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="premium-card"
          >

            <div className="flex items-center gap-3 mb-8">

              <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-orange-500"></div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  For Students
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Learning designed around clarity and confidence
                </p>
              </div>

            </div>

            <ul className="space-y-5">

              {studentNeeds.map((point, index) => (

                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.3 + index * 0.1,
                  }}
                  className="flex gap-4"
                >

                  <div className="mt-2 w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>

                  <p className="text-slate-700 leading-7">
                    {point}
                  </p>

                </motion.li>

              ))}

            </ul>

          </motion.div>

          {/* Parents */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="premium-card"
          >

            <div className="flex items-center gap-3 mb-8">

              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-slate-700"></div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  For Parents
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  A learning environment focused on discipline and growth
                </p>
              </div>

            </div>

            <ul className="space-y-5">

              {parentNeeds.map((point, index) => (

                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.3 + index * 0.1,
                  }}
                  className="flex gap-4"
                >

                  <div className="mt-2 w-2 h-2 rounded-full bg-slate-700 flex-shrink-0"></div>

                  <p className="text-slate-700 leading-7">
                    {point}
                  </p>

                </motion.li>

              ))}

            </ul>

          </motion.div>

        </div>

        {/* ===================================================== */}
        {/* COMPARISON */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >

          <div className="text-center mb-14">

            <span className="section-label">
              The Difference
            </span>

            <h3 className="section-heading mt-4">
              What Makes Vidya Dham Mandir Different
            </h3>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Traditional */}
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-8">

              <h4 className="text-2xl font-semibold text-slate-700 mb-8">
                Traditional Coaching
              </h4>

              <div className="space-y-5">

                {[
                  'High fee structure',
                  'Large classroom batches',
                  'Limited personal interaction',
                  'Business-focused systems',
                  'High-pressure environment',
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <div className="w-2 h-2 rounded-full bg-slate-400 mt-3"></div>

                    <p className="text-slate-600 leading-7">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Vidya Dham */}
            <div className="rounded-[28px] border border-orange-200 bg-white p-8 shadow-soft relative overflow-hidden">

              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-50 rounded-full blur-3xl"></div>

              <h4 className="text-2xl font-semibold text-orange-600 mb-8 relative z-10">
                Vidya Dham Mandir
              </h4>

              <div className="space-y-5 relative z-10">

                {[
                  'Completely free education support',
                  'Student-focused mentorship',
                  'Strong conceptual learning',
                  'Purpose and values driven',
                  'Supportive and calm atmosphere',
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-3"></div>

                    <p className="text-slate-700 leading-7 font-medium">
                      {item}
                    </p>

                  </div>

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
              Begin Your Learning Journey
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A place where education is guided by mentorship,
              values, and genuine student support.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

              <button className="btn-primary">
                Start Learning Free
              </button>

              <button className="btn-secondary">
                Talk With Prashant Sir
              </button>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}