import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaArrowUp, FaPlus, FaTimes, FaCalendarAlt } from 'react-icons/fa'

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const menuItems = [
    {
      icon: <FaPhone />,
      label: 'Call Now',
      href: 'tel:+919999999999',
      color: 'bg-blue-600',
    },
    {
      icon: <FaCalendarAlt />,
      label: 'Join Classes',
      onClick: () => {
        setMenuOpen(false)
        document.querySelector('#admission')?.scrollIntoView({ behavior: 'smooth' })
      },
      color: 'bg-saffron-600',
    },
    {
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      href: 'https://wa.me/919999999999?text=Mujhe%20Vidya%20Dham%20Mandir%20ke%20classes%20join%20karni%20hain',
      color: 'bg-green-500',
    },
  ]

  return (
    <>
      {/* Sticky bottom bar on mobile */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden z-40 bg-white border-t border-gray-100 shadow-lg px-4 py-3 flex gap-3">
        <a
          href="tel:+919999999999"
          className="flex-1 flex items-center justify-center gap-2 bg-royal-900 text-white text-sm font-semibold py-3 rounded-xl"
        >
          <FaPhone className="text-xs" /> Call
        </a>
        <button
          onClick={() => document.querySelector('#admission')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex-1 flex items-center justify-center gap-2 bg-saffron-600 text-white text-sm font-semibold py-3 rounded-xl"
        >
          Join Free
        </button>
        <a
          href="https://wa.me/919999999999?text=Mujhe%20join%20karna%20hai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-semibold py-3 rounded-xl"
        >
          <FaWhatsapp /> WhatsApp
        </a>
      </div>

      {/* Desktop FAB group */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-50 flex-col items-end gap-3">
        {/* Scroll to top */}
        <AnimatePresence>
          {showScroll && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollTop}
              className="w-11 h-11 rounded-full bg-white shadow-premium border border-gray-100 flex items-center justify-center text-royal-800 hover:bg-royal-50 transition-colors"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="text-sm" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Expandable menu items */}
        <AnimatePresence>
          {menuOpen &&
            menuItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20, scale: 0.7 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.7 }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-3"
              >
                <span className="bg-white text-xs font-semibold text-royal-900 px-3 py-1.5 rounded-full shadow-md whitespace-nowrap">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center text-lg shadow-lg hover:scale-110 transition-transform`}
                  >
                    {item.icon}
                  </a>
                ) : (
                  <button
                    onClick={item.onClick}
                    className={`w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center text-lg shadow-lg hover:scale-110 transition-transform`}
                  >
                    {item.icon}
                  </button>
                )}
              </motion.div>
            ))}
        </AnimatePresence>

        {/* Main FAB toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMenuOpen((v) => !v)}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-xl shadow-xl transition-all duration-300 ${
            menuOpen ? 'bg-gray-700 rotate-45' : 'bg-saffron-600'
          }`}
          style={!menuOpen ? { animation: 'glow 3s ease-in-out infinite' } : {}}
          aria-label="Open contact menu"
        >
          {menuOpen ? <FaTimes /> : <FaPlus />}
        </motion.button>
      </div>

      {/* WhatsApp always visible bottom-right on desktop */}
      <a
        href="https://wa.me/919999999999?text=Namaste%21%20Mujhe%20Vidya%20Dham%20Mandir%20ke%20baare%20mein%20jaankari%20chahiye."
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:flex fixed bottom-8 left-8 z-50 items-center gap-3 bg-green-500 text-white pl-4 pr-5 py-3 rounded-full shadow-xl hover:bg-green-600 transition-all duration-200 hover:scale-105 whatsapp-pulse"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="text-sm font-bold">WhatsApp Us</span>
      </a>
    </>
  )
}
