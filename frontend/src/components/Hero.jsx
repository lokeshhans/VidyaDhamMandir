import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaChevronDown } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import heroBg from '../assets/hero-bg.webp'

const pills = [
  { icon: '📚', text: 'Free Education' },
  { icon: '🧬', text: 'NEET Guidance' },
  { icon: '🗣️', text: 'Hinglish Teaching' },
  { icon: '🧭', text: 'Personal Mentorship' },
  { icon: '📖', text: 'NCERT Focus' },
]

const floatVariants = {
  initial: { y: 0 },
  animate: (i) => ({
    y: [0, -12, 0],
    transition: {
      duration: 5 + i,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: i * 0.8,
    },
  }),
}

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Vidya Dham Mandir"
          className="w-full h-full object-cover scale-105"
          style={{
            filter: 'brightness(0.8) contrast(1.1)',
          }}
        />

        {/* Dark Premium Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(5,10,30,0.88) 0%, rgba(10,20,55,0.82) 45%, rgba(20,30,70,0.88) 100%)',
          }}
        />

        {/* Saffron Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/20 blur-3xl rounded-full" />

        {/* Blue Glow */}
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-500/20 blur-3xl rounded-full" />
      </div>

      {/* Decorative Rings + Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[400, 600, 800, 1000].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full border border-orange-400/10"
            style={{
              width: size,
              height: size,
              top: '50%',
              left: '50%',
              marginLeft: -size / 2,
              marginTop: -size / 2,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 30 + i * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}

        {/* Floating Emojis */}
        {['📖', '🧬', '🏆', '✨', '🌟'].map((emoji, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={floatVariants}
            initial="initial"
            animate="animate"
            className="absolute text-2xl opacity-30"
            style={{
              top: `${15 + i * 15}%`,
              left: i % 2 === 0 ? `${5 + i * 4}%` : `${75 + i * 3}%`,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Admission Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />

              <span className="text-green-400 text-xs font-bold tracking-widest uppercase">
                Admissions Open — 2026
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-4 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            >
              Free Education.
              <span
                className="italic"
                style={{
                  background:
                    'linear-gradient(135deg, #f97316 0%, #fbbf24 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {' '}
                Bigger Dreams.
              </span>
              <br />
              Better Future.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-blue-100 text-lg sm:text-xl leading-relaxed mb-4 max-w-lg"
            >
              Empowering students of Palwal with quality education,
              mentorship, confidence, and a brighter future.
            </motion.p>

            {/* Trust Line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-orange-300 text-sm font-medium tracking-wide mb-8 flex items-center gap-2"
            >
              <HiSparkles />
              An educational movement built for students, not profits.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={() => scrollTo('#admission')}
                className="bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-xl hover:scale-105"
              >
                Join Classes →
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="border border-white/30 text-white hover:bg-white hover:text-blue-950 px-6 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Free Counseling
              </button>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:scale-105"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp Now
              </a>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {pills.map((pill, i) => (
                <motion.span
                  key={pill.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.65 + i * 0.07 }}
                  className="backdrop-blur-xl bg-white/10 border border-white/10 text-blue-100 text-xs px-4 py-2 rounded-full flex items-center gap-2 font-medium shadow-lg"
                >
                  <span>{pill.icon}</span>
                  {pill.text}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center justify-center gap-6"
          >
            {/* Main Glass Card */}
            {/* <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-8 w-full max-w-sm shadow-2xl relative">
              <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                100% FREE
              </div>

              <div className="text-center mb-6">
                <div className="text-5xl mb-3">🕉️</div>

                <h3 className="text-white text-2xl font-bold">
                  Vidya Dham Mandir
                </h3>

                <p className="text-orange-300 text-sm mt-1 italic">
                  "विद्या दान, महा दान"
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    label: 'Classes',
                    value: 'NEET • Class 9-12',
                    icon: '📚',
                  },
                  {
                    label: 'Language',
                    value: 'Hindi / Hinglish',
                    icon: '🗣️',
                  },
                  {
                    label: 'Batch',
                    value: 'Morning & Evening',
                    icon: '⏰',
                  },
                  {
                    label: 'Fees',
                    value: 'Absolutely FREE',
                    icon: '✅',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 border border-white/5"
                  >
                    <div className="flex items-center gap-2">
                      <span>{item.icon}</span>

                      <span className="text-blue-200 text-xs">
                        {item.label}
                      </span>
                    </div>

                    <span className="text-white text-xs font-semibold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Founder Card */}
            {/* <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-4 shadow-xl w-full max-w-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-xl font-bold shadow-lg flex-shrink-0">
                PS
              </div>

              <div>
                <p className="font-semibold text-white text-sm">
                  Prashant Singh
                </p>

                <p className="text-orange-300 text-xs">
                  Founder & Head Teacher
                </p>

                <p className="text-blue-200 text-xs mt-0.5">
                  Vidya Dham Mandir, Palwal
                </p>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo('#about')}
      >
        <span className="text-blue-200 text-xs tracking-widest">
          SCROLL
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaChevronDown className="text-orange-300 text-sm" />
        </motion.div>
      </motion.div>
    </section>
  )
}