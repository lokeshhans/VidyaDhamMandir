import logo from "../assets/logo.webp"
import React, {
  useEffect,
  useState,
} from 'react'

import {
  motion,
  AnimatePresence,
} from 'framer-motion'

import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaArrowRight,
} from 'react-icons/fa'

import { useApp } from '../context/AppContext'

/* ===================================================== */
/* NAV LINKS */
/* ===================================================== */

const navLinks = [
  {
    label: 'Home',
    href: '#hero',
  },

  {
    label: 'About',
    href: '#about',
  },

  {
    label: 'Programs',
    href: '#courses',
  },

  {
    label: 'Gallery',
    href: '#gallery',
  },

  {
    label: 'Testimonials',
    href: '#testimonials',
  },

  {
    label: 'Contact',
    href: '#contact',
  },
]

/* ===================================================== */
/* COMPONENT */
/* ===================================================== */

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  const { state, dispatch } = useApp()

  /* ===================================================== */
  /* SCROLL */
  /* ===================================================== */

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 20)

    }

    window.addEventListener('scroll', handleScroll)

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      )

  }, [])

  /* ===================================================== */
  /* SCROLL TO */
  /* ===================================================== */

  function scrollTo(href) {

    dispatch({
      type: 'CLOSE_MOBILE_MENU',
    })

    const element =
      document.querySelector(href)

    if (element) {

      element.scrollIntoView({
        behavior: 'smooth',
      })

    }

  }

  /* ===================================================== */
  /* UI */
  /* ===================================================== */

  return (
    <>

      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

      <motion.header
        initial={{
          y: -80,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-2xl border-b border-slate-200 shadow-[0_10px_40px_rgba(15,23,42,0.06)]'
            : 'bg-transparent'
        }`}
      >

        <div className="container-custom">

          <div className="flex items-center justify-between h-20">

            {/* ============================================= */}
            {/* LOGO */}
            {/* ============================================= */}

            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('#hero')
              }}
              whileHover={{
                scale: 1.01,
              }}
              className="flex items-center gap-4"
              aria-label="Vidya Dham Mandir"
            >

              {/* Logo */}
              <div className="relative">

                <div className="w-12 h-12 rounded-2xl overflow-hidden bg-[#0b1120] flex items-center justify-center shadow-xl">

                    <img src={logo} alt="" />

                </div>

                <div className="absolute -inset-1 rounded-2xl bg-orange-500/20 blur-xl"></div>

              </div>

              {/* Text */}
              <div>

                <h1 className={`font-bold tracking-tight leading-none transition-colors duration-300 ${
                  scrolled
                    ? 'text-slate-900'
                    : 'text-white'
                }`}>

                  Vidya Dham Mandir

                </h1>

                <p className={`text-xs tracking-[0.18em] uppercase mt-2 transition-colors duration-300 ${
                  scrolled
                    ? 'text-orange-600'
                    : 'text-orange-300'
                }`}>

                  Free Educational Initiative

                </p>

              </div>

            </motion.a>

            {/* ============================================= */}
            {/* DESKTOP NAV */}
            {/* ============================================= */}

            <nav className="hidden lg:flex items-center gap-10">

              {navLinks.map((link) => (

                <button
                  key={link.href}
                  onClick={() =>
                    scrollTo(link.href)
                  }
                  className={`relative text-sm font-medium transition-colors duration-300 group ${
                    scrolled
                      ? 'text-slate-700 hover:text-orange-600'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >

                  {link.label}

                  {/* Line */}
                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>

                </button>

              ))}

            </nav>

            {/* ============================================= */}
            {/* RIGHT CTA */}
            {/* ============================================= */}

            <div className="hidden lg:flex items-center gap-4">

              {/* WhatsApp */}
              <a
                href="https://wa.me/918053678711"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  scrolled
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-white/10 border border-white/10 backdrop-blur-xl text-white hover:bg-white hover:text-slate-900'
                }`}
              >

                <FaWhatsapp />

                WhatsApp

              </a>

              {/* Admission */}
              <button
                onClick={() =>
                  scrollTo('#admission')
                }
                className="btn-primary"
              >

                Join Free

                <FaArrowRight className="text-xs" />

              </button>

            </div>

            {/* ============================================= */}
            {/* MOBILE BUTTON */}
            {/* ============================================= */}

            <button
              onClick={() =>
                dispatch({
                  type: 'TOGGLE_MOBILE_MENU',
                })
              }
              className={`lg:hidden w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                scrolled
                  ? 'bg-slate-100 text-slate-900'
                  : 'bg-white/10 backdrop-blur-xl border border-white/10 text-white'
              }`}
              aria-label="Toggle navigation"
            >

              {state.mobileMenuOpen
                ? <FaTimes size={18} />
                : <FaBars size={18} />}

            </button>

          </div>

        </div>

      </motion.header>

      {/* ================================================= */}
      {/* MOBILE MENU */}
      {/* ================================================= */}

      <AnimatePresence>

        {state.mobileMenuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed inset-0 z-40 bg-[#071028] lg:hidden overflow-y-auto"
          >

            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">

              <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl"></div>

              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"></div>

            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col px-8 pt-28 pb-10">

              {/* Label */}
              <div className="mb-10">

                <p className="text-orange-300 uppercase tracking-[0.18em] text-xs font-semibold">

                  Vidya Dham Mandir

                </p>

                <h2 className="text-white text-3xl font-bold tracking-tight mt-4">

                  Student Focused Learning

                </h2>

              </div>

              {/* Links */}
              <div className="flex flex-col">

                {navLinks.map((link, index) => (

                  <motion.button
                    key={link.href}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    onClick={() =>
                      scrollTo(link.href)
                    }
                    className="flex items-center justify-between border-b border-white/10 py-6 text-left"
                  >

                    <span className="text-white text-2xl font-semibold tracking-tight">

                      {link.label}

                    </span>

                    <FaArrowRight className="text-orange-400 text-sm" />

                  </motion.button>

                ))}

              </div>

              {/* Bottom CTA */}
              <div className="mt-auto pt-12 space-y-4">

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918053678711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl bg-green-500 text-white py-5 font-semibold text-lg"
                >

                  <FaWhatsapp />

                  Connect on WhatsApp

                </a>

                {/* Join */}
                <button
                  onClick={() =>
                    scrollTo('#admission')
                  }
                  className="w-full flex items-center justify-center gap-3 rounded-2xl bg-orange-500 text-white py-5 font-semibold text-lg"
                >

                  Join Free Classes

                  <FaArrowRight className="text-sm" />

                </button>

                {/* Footer */}
                <div className="pt-8 text-center">

                  <p className="text-slate-400 text-sm leading-7">

                    Free educational support focused on
                    mentorship, confidence, and meaningful learning.

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  )
}