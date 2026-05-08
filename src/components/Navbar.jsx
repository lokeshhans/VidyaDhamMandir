import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa'
import { useApp } from '../context/AppContext'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { state, dispatch } = useApp()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    dispatch({ type: 'CLOSE_MOBILE_MENU' })
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-royal border-b border-orange-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron-500 to-saffron-700 flex items-center justify-center text-white font-bold text-lg shadow-saffron">
                🕉
              </div>
              <div>
                <p className="font-display font-bold text-green-400 text-sm sm:text-base leading-tight">
                  VIDYA DHAM MANDIR
                </p>
                <p className="text-saffron-600 text-xs font-medium tracking-wider">
                  VIDYA DAAN, MAHA DAAN
                </p>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-black hover:text-saffron-600 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-saffron-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            {/* Right CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/919999999999?text=Hello%2C%20I%20want%20to%20know%20about%20admission%20at%20Vidya%20Dham%20Mandir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm"
              >
                <FaWhatsapp className="text-base" />
                WhatsApp
              </a>
              <button
                onClick={() => scrollTo('#admission')}
                className="btn-saffron text-xs py-2 px-5"
              >
                Join Free
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => dispatch({ type: 'TOGGLE_MOBILE_MENU' })}
              className="lg:hidden text-royal-900 p-2"
              aria-label="Toggle menu"
            >
              {state.mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {state.mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-8"
          >
            <div className="absolute top-5 right-6 text-center">
              <p className="text-xs text-saffron-600 font-bold tracking-widest">FREE EDUCATION</p>
              <p className="text-xs text-royal-400">Palwal, Haryana</p>
            </div>
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => scrollTo(link.href)}
                className="text-left py-4 border-b border-orange-50 text-royal-800 text-2xl font-display font-semibold hover:text-saffron-600 transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col gap-4"
            >
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-4 rounded-2xl text-lg"
              >
                <FaWhatsapp /> WhatsApp Now
              </a>
              <button
                onClick={() => scrollTo('#admission')}
                className="btn-saffron justify-center py-4 text-base rounded-2xl"
              >
                Join Free Classes
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
