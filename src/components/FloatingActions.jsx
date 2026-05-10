import React, { useEffect, useState } from 'react'

import {
  motion,
  AnimatePresence,
} from 'framer-motion'

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaArrowUp,
  FaComments,
} from 'react-icons/fa'

/* ===================================================== */
/* HELPERS */
/* ===================================================== */

function scrollToSection(id) {

  const element = document.querySelector(id)

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
    })
  }
}

/* ===================================================== */
/* COMPONENT */
/* ===================================================== */

export default function FloatingActions() {

  const [showScrollTop, setShowScrollTop] = useState(false)

  const [showMobileBar, setShowMobileBar] = useState(true)

  /* ===================================================== */
  /* SCROLL DETECTION */
  /* ===================================================== */

  useEffect(() => {

    const handleScroll = () => {

      setShowScrollTop(window.scrollY > 500)

      if (window.scrollY > 150) {
        setShowMobileBar(true)
      }

    }

    window.addEventListener('scroll', handleScroll)

    return () =>
      window.removeEventListener('scroll', handleScroll)

  }, [])

  /* ===================================================== */
  /* SCROLL TO TOP */
  /* ===================================================== */

  function scrollTop() {

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

  }

  /* ===================================================== */
  /* UI */
  /* ===================================================== */

  return (
    <>

      {/* ===================================================== */}
      {/* MOBILE ACTION BAR */}
      {/* ===================================================== */}

      <AnimatePresence>

        {showMobileBar && (

          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: 100,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="fixed bottom-4 left-4 right-4 z-[60] lg:hidden"
          >

            <div className="backdrop-blur-2xl bg-white/90 border border-white/40 rounded-3xl shadow-2xl p-3">

              <div className="grid grid-cols-3 gap-3">

                {/* Call */}
                <a
                  href="tel:+918053678711"
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-[#0b1120] text-white py-4 transition-all duration-300 active:scale-[0.97]"
                >

                  <FaPhoneAlt className="text-sm" />

                  <span className="text-[11px] font-semibold tracking-wide">
                    Call
                  </span>

                </a>

                {/* Join */}
                <button
                  onClick={() =>
                    scrollToSection('#admission')
                  }
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-orange-500 text-white py-4 transition-all duration-300 active:scale-[0.97]"
                >

                  <FaComments className="text-sm" />

                  <span className="text-[11px] font-semibold tracking-wide">
                    Join Free
                  </span>

                </button>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918053678711?text=Namaste%20Sir,%20mujhe%20Vidya%20Dham%20Mandir%20ke%20classes%20ke%20baare%20mein%20jaankari%20chahiye."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-green-500 text-white py-4 transition-all duration-300 active:scale-[0.97]"
                >

                  <FaWhatsapp className="text-base" />

                  <span className="text-[11px] font-semibold tracking-wide">
                    WhatsApp
                  </span>

                </a>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* ===================================================== */}
      {/* DESKTOP FLOATING ACTIONS */}
      {/* ===================================================== */}

      <div className="hidden lg:flex fixed bottom-8 right-8 z-[60] flex-col items-end gap-4">

        {/* ================================================= */}
        {/* WHATSAPP */}
        {/* ================================================= */}

        <motion.a
          href="https://wa.me/918053678711?text=Namaste%20Sir,%20mujhe%20Vidya%20Dham%20Mandir%20ke%20classes%20ke%20baare%20mein%20jaankari%20chahiye."
          target="_blank"
          rel="noopener noreferrer"
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="group flex items-center gap-4 rounded-full bg-green-500 text-white pl-5 pr-6 py-4 shadow-2xl hover:bg-green-600 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >

          <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">

            <FaWhatsapp className="text-xl" />

          </div>

          <div>

            <p className="text-[11px] uppercase tracking-[0.18em] text-green-100">
              Quick Support
            </p>

            <p className="font-semibold text-sm mt-1">
              Chat on WhatsApp
            </p>

          </div>

        </motion.a>

        {/* ================================================= */}
        {/* CALL */}
        {/* ================================================= */}

        <motion.a
          href="tel:+918053678711"
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.1,
          }}
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="group flex items-center gap-4 rounded-full bg-[#0b1120] text-white pl-5 pr-6 py-4 shadow-2xl border border-white/5 hover:bg-slate-900 transition-all duration-300"
          aria-label="Call Now"
        >

          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">

            <FaPhoneAlt className="text-sm" />

          </div>

          <div>

            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
              Admission Help
            </p>

            <p className="font-semibold text-sm mt-1">
              +91 8053678711
            </p>

          </div>

        </motion.a>

        {/* ================================================= */}
        {/* SCROLL TOP */}
        {/* ================================================= */}

        <AnimatePresence>

          {showScrollTop && (

            <motion.button
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              onClick={scrollTop}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="w-14 h-14 rounded-2xl bg-white text-slate-900 shadow-2xl border border-slate-100 flex items-center justify-center transition-all duration-300"
              aria-label="Scroll to top"
            >

              <FaArrowUp className="text-sm" />

            </motion.button>

          )}

        </AnimatePresence>

      </div>

    </>
  )
}