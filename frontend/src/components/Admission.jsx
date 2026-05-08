import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Admission() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const steps = [
    {
      number: '1',
      title: 'WhatsApp Inquiry',
      desc: 'Message us your name, class, and goal. Instant response guaranteed.',
      icon: '💬',
      action: 'WhatsApp Us',
      link: 'https://wa.me/919999999999?text=Namaste%21%20I%20want%20to%20know%20about%20admission%20at%20Vidya%20Dham%20Mandir',
    },
    {
      number: '2',
      title: 'Free Counseling Call',
      desc: 'Our counselor will call you to understand your goals and provide guidance.',
      icon: '☎️',
      action: 'Schedule Call',
      link: 'tel:+919999999999',
    },
    {
      number: '3',
      title: 'Visit Our Institute',
      desc: 'Come see our center, meet the team, and feel the environment.',
      icon: '🏛️',
      action: 'Get Directions',
      link: 'https://maps.google.com/?q=Vidya+Dham+Mandir+Palwal',
    },
    {
      number: '4',
      title: 'Join Classes',
      desc: 'Start your journey with our first free demo class. No commitment needed.',
      icon: '🚀',
      action: 'Join Demo',
      link: 'https://wa.me/919999999999',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="admission" ref={ref} className="section-pad bg-warm-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-saffron-500/8 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-royal-900/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">भर्ती प्रक्रिया</p>
          <h2 className="section-heading mx-auto max-w-3xl">
            Simple <span className="text-gradient-saffron">4-Step Process</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Limited seats for new batches. Join now and start your transformation.
          </p>
        </motion.div>

        {/* Steps timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          {/* Desktop timeline */}
          <div className="hidden lg:grid grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={item}
                className="relative"
              >
                {/* Connecting line */}
                {i < steps.length - 1 && (
                  <div className="absolute top-20 left-[calc(50%+48px)] right-[-50%] h-1 bg-gradient-to-r from-saffron-500 to-transparent hidden" />
                )}

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 text-center h-full flex flex-col justify-between hover:shadow-saffron transition-all group">
                  {/* Number badge */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-saffron-500 to-orange-600 text-white font-bold text-lg flex items-center justify-center shadow-saffron">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <h4 className="font-bold text-royal-900 text-lg mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline border-saffron-500 text-saffron-600 hover:bg-saffron-600 hover:text-white mt-6 text-sm justify-center"
                  >
                    {step.action}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile timeline */}
          <div className="lg:hidden space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={item}
                className="glass-card rounded-2xl p-6 flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-saffron-500 to-orange-600 text-white font-bold text-xl flex items-center justify-center shadow-saffron">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-2xl mb-1">{step.icon}</div>
                  <h4 className="font-bold text-royal-900 mb-1">{step.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{step.desc}</p>
                  <a
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-saffron-600 hover:text-saffron-700 font-semibold text-sm flex items-center gap-1"
                  >
                    {step.action} →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Urgency section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-3xl p-8 lg:p-12 border-2 border-saffron-500 bg-gradient-to-br from-saffron-50 to-white shadow-saffron"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left — Urgency messaging */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">⚡</span>
                <span className="section-label">LIMITED SEATS</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-royal-900 mb-4">
                New Batches Filling <span className="text-saffron-600">Fast</span>
              </h3>
              <ul className="space-y-3 mb-6">
                {[
                  'Morning Batch: 8:00 AM - 11:00 AM (5 seats left)',
                  'Evening Batch: 4:00 PM - 7:00 PM (8 seats left)',
                  'Weekend Classes: Sat-Sun 10 AM - 1 PM (10 seats)',
                ].map((batch, i) => (
                  <li key={i} className="flex gap-3 text-gray-700">
                    <span className="text-saffron-600 font-bold">✓</span>
                    {batch}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 italic">
                Seats filling up fast. Don't miss this free opportunity!
              </p>
            </div>

            {/* Right — Contact options */}
            <div className="space-y-3">
              <a
                href="https://wa.me/919999999999?text=Mujhe%20admission%20lena%20hai%20Vidya%20Dham%20Mandir%20mein"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold p-4 rounded-xl transition-all duration-200"
              >
                <FaWhatsapp className="text-2xl" />
                <span>WhatsApp Now</span>
              </a>
              <a
                href="tel:+919999999999"
                className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-bold p-4 rounded-xl transition-all duration-200"
              >
                <FaPhone className="text-2xl" />
                <span>Call Us</span>
              </a>
              <a
                href="https://maps.google.com/?q=Vidya+Dham+Mandir+Palwal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold p-4 rounded-xl transition-all duration-200"
              >
                <FaMapMarkerAlt className="text-2xl" />
                <span>Visit Us</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* FAQ Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.7 }}
          className="mt-16"
        >
          <h3 className="font-display text-2xl font-bold text-royal-900 mb-8 text-center">
            Common Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'Kya sach mein free hai?',
                a: 'Haan bilkul free hai. Koi hidden charges nahi, sirf pure mano se free education.',
              },
              {
                q: 'Classes when start honge?',
                a: 'Next batch shuru hone wala hai 15th of this month. Abhi enroll karo.',
              },
              {
                q: 'Kya online classes bhi available hain?',
                a: 'Mostly offline hain, par special cases mein online option bhi diye ja sakte hain.',
              },
              {
                q: 'Kya board exam ki tayyari hoti hai?',
                a: 'Haan, sirf NEET nahi, board exam ki bhi quality tayyari dete hain.',
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="glass-card rounded-xl p-5"
              >
                <p className="font-bold text-royal-800 mb-2 text-sm">❓ {faq.q}</p>
                <p className="text-gray-600 text-sm">💡 {faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
