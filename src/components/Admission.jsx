import React from 'react'

import {
  motion,
} from 'framer-motion'

import { useInView } from 'react-intersection-observer'

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from 'react-icons/fa'

/* ===================================================== */
/* DATA */
/* ===================================================== */

const steps = [
  {
    number: '01',
    title: 'Admission Enquiry',
    description:
      'Connect with us through WhatsApp or phone call and share your academic goals.',

    action: 'Start Enquiry',

    link:
      'https://wa.me/918053678711?text=Namaste%20Sir,%20mujhe%20Vidya%20Dham%20Mandir%20mein%20admission%20ke%20baare%20mein%20jaankari%20chahiye.',
  },

  {
    number: '02',
    title: 'Student Guidance',
    description:
      'Receive counselling and academic guidance based on your learning needs and future goals.',

    action: 'Talk With Mentor',

    link:
      'tel:+918053678711',
  },

  {
    number: '03',
    title: 'Visit The Institute',
    description:
      'Experience the learning environment, meet mentors, and understand the academic approach.',

    action: 'View Location',

    link:
      'https://maps.google.com/?q=Palwal,Haryana',
  },

  {
    number: '04',
    title: 'Start Learning',
    description:
      'Attend your first learning session and begin your academic journey with mentorship support.',

    action: 'Join Classes',

    link:
      'https://wa.me/918053678711',
  },
]

const faqs = [
  {
    question:
      'Are classes completely free?',
    answer:
      'Yes. Vidya Dham Mandir provides educational support and mentorship without financial pressure.',
  },

  {
    question:
      'Is NEET preparation available?',
    answer:
      'Yes. NEET Biology guidance and NCERT focused preparation are available for students.',
  },

  {
    question:
      'Do you support board exam preparation?',
    answer:
      'Yes. Students receive conceptual learning support and board-oriented preparation.',
  },

  {
    question:
      'Can parents discuss academic guidance?',
    answer:
      'Absolutely. Parents can connect directly for counselling and mentorship discussions.',
  },
]

/* ===================================================== */
/* COMPONENT */
/* ===================================================== */

export default function Admission() {

  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  return (
    <section
      id="admission"
      ref={ref}
      className="relative section-pad overflow-hidden bg-[#fffdf9]"
      aria-labelledby="admission-heading"
    >

      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl opacity-50"></div>

        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-50 rounded-full blur-3xl opacity-40"></div>

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
            Admissions Process
          </span>

          <h2
            id="admission-heading"
            className="section-heading mt-4 text-balance"
          >

            A Simple Path To
            <span className="text-orange-soft">
              {' '}Meaningful Learning
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 max-w-3xl mx-auto">

            Join a student-first learning environment focused on
            mentorship, academic growth, and confidence building.

          </p>

        </motion.div>

        {/* ===================================================== */}
        {/* STEPS */}
        {/* ===================================================== */}

        <div className="grid lg:grid-cols-4 gap-6 mt-20">

          {steps.map((step, index) => (

            <motion.article
              key={step.number}
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
              className="premium-card relative overflow-hidden flex flex-col"
            >

              {/* Top Line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-orange-500"></div>

              {/* Number */}
              <div className="text-6xl font-bold tracking-tight text-orange-100">

                {step.number}

              </div>

              {/* Content */}
              <div className="mt-6 flex-grow">

                <h3 className="text-2xl font-semibold text-slate-900 leading-snug">

                  {step.title}

                </h3>

                <p className="mt-5 text-slate-600 leading-8">

                  {step.description}

                </p>

              </div>

              {/* CTA */}
              <a
                href={step.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300"
              >

                {step.action}

                <FaArrowRight className="text-sm" />

              </a>

            </motion.article>

          ))}

        </div>

        {/* ===================================================== */}
        {/* CTA SECTION */}
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
            delay: 0.3,
          }}
          className="mt-28"
        >

          <div className="premium-card relative overflow-hidden">

            {/* Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-50 rounded-full blur-3xl opacity-60"></div>

            <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

              {/* LEFT */}
              <div>

                <span className="section-label">
                  New Admissions Open
                </span>

                <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-4 leading-tight">

                  Begin Your Academic Journey
                  With Guidance and Support

                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl">

                  Vidya Dham Mandir provides NEET Biology guidance,
                  NCERT learning support, and mentorship designed
                  to help students build strong academic foundations.

                </p>

                {/* Points */}
                <div className="grid sm:grid-cols-2 gap-4 mt-10">

                  {[
                    'Free educational support',
                    'NEET Biology mentorship',
                    'Student-first learning',
                    'Parent guidance available',
                  ].map((point) => (

                    <div
                      key={point}
                      className="flex items-start gap-3"
                    >

                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-3"></div>

                      <p className="text-slate-700 leading-7">

                        {point}

                      </p>

                    </div>

                  ))}

                </div>

              </div>

              {/* RIGHT */}
              <div className="space-y-4">

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918053678711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 rounded-3xl bg-green-500 hover:bg-green-600 text-white p-6 transition-all duration-300"
                >

                  <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">

                    <FaWhatsapp className="text-2xl" />

                  </div>

                  <div>

                    <p className="text-sm text-green-100 uppercase tracking-wide">

                      Quick Support

                    </p>

                    <h4 className="font-semibold text-lg mt-1">

                      Connect on WhatsApp

                    </h4>

                  </div>

                </a>

                {/* Call */}
                <a
                  href="tel:+918053678711"
                  className="flex items-center gap-5 rounded-3xl bg-[#0b1120] hover:bg-slate-900 text-white p-6 transition-all duration-300"
                >

                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">

                    <FaPhoneAlt className="text-xl" />

                  </div>

                  <div>

                    <p className="text-sm text-slate-400 uppercase tracking-wide">

                      Admission Helpline

                    </p>

                    <h4 className="font-semibold text-lg mt-1 text-white">

                      +91 8053678711

                    </h4>

                  </div>

                </a>

                {/* Location */}
                <a
                  href="https://maps.google.com/?q=Palwal,Haryana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 rounded-3xl bg-orange-500 hover:bg-orange-600 text-white p-6 transition-all duration-300"
                >

                  <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">

                    <FaMapMarkerAlt className="text-xl" />

                  </div>

                  <div>

                    <p className="text-sm text-orange-100 uppercase tracking-wide">

                      Visit Institute

                    </p>

                    <h4 className="font-semibold text-lg mt-1">

                      Palwal, Haryana

                    </h4>

                  </div>

                </a>

              </div>

            </div>

          </div>

        </motion.div>

        {/* ===================================================== */}
        {/* FAQ */}
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
            delay: 0.5,
          }}
          className="mt-28"
        >

          <div className="text-center mb-14">

            <span className="section-label">
              Frequently Asked Questions
            </span>

            <h3 className="section-heading mt-4">

              Common Admission Questions

            </h3>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {faqs.map((faq, index) => (

              <motion.article
                key={faq.question}
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
                className="premium-card"
              >

                <h4 className="text-xl font-semibold text-slate-900 leading-snug">

                  {faq.question}

                </h4>

                <p className="mt-5 text-slate-600 leading-8">

                  {faq.answer}

                </p>

              </motion.article>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  )
}