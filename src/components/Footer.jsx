import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaYoutube, FaGithub, FaPhone } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ]

  const resources = [
    { label: 'NEET Guide', href: '#courses' },
    { label: 'Board Preparation', href: '#courses' },
    { label: 'Study Tips', href: '#about' },
    { label: 'Success Stories', href: '#testimonials' },
  ]

  return (
    <footer className="bg-royal-pattern text-white relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-500 via-orange-400 to-saffron-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron-400 to-saffron-700 flex items-center justify-center text-white text-xl font-bold shadow-saffron">
                🕉
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base">
                  VIDYA DHAM MANDIR
                </h3>
                <p className="text-saffron-300 text-xs font-semibold tracking-wider">
                  VIDYA DAAN, MAHA DAAN
                </p>
              </div>
            </div>
            <p className="text-blue-200 text-sm mb-6 leading-relaxed">
              "Education for everyone — built with purpose, not business."
            </p>
            <p className="text-blue-300 text-xs">
              ✓ 100% FREE Education
              <br />
              ✓ NEET Specialized Guidance
              <br />
              ✓ Hinglish Medium Teaching
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-saffron-300 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-white text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-saffron-300 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold text-white text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 text-blue-200 hover:text-saffron-300 text-sm transition-colors"
              >
                <FaPhone className="text-saffron-400" />
                +91 99999 99999
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-200 hover:text-saffron-300 text-sm transition-colors"
              >
                <FaWhatsapp className="text-green-400" />
                WhatsApp Us
              </a>
              <p className="text-blue-200 text-sm">
                Palwal, Haryana - 121102
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-saffron-500/20 via-saffron-500/40 to-saffron-500/20 my-8" />

        {/* Social & Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: FaInstagram, link: 'https://instagram.com/vidyadhammandir', label: 'Instagram' },
              { icon: FaYoutube, link: 'https://youtube.com/@vidyadhammandir', label: 'YouTube' },
              { icon: FaWhatsapp, link: 'https://wa.me/919999999999', label: 'WhatsApp' },
            ].map((social, i) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-saffron-600/20 hover:bg-saffron-500 flex items-center justify-center text-saffron-300 hover:text-white transition-all duration-200"
                  title={social.label}
                >
                  <Icon className="text-lg" />
                </motion.a>
              )
            })}
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-saffron-500 to-orange-600 hover:from-saffron-600 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-200 shadow-saffron hover:shadow-lg"
          >
            <FaWhatsapp />
            Connect on WhatsApp
          </a>
        </motion.div>

        {/* Copyright & Credits */}
        <div className="mt-12 pt-8 border-t border-saffron-500/20">
          <p className="text-blue-300 text-xs text-center mb-4">
            © {currentYear} Vidya Dham Mandir. Education for everyone.
          </p>
          <p className="text-blue-300 text-xs text-center">
            🎨 Designed & Developed by <span className="font-bold text-saffron-300">Lokesh</span> •{' '}
            <span className="font-bold text-saffron-300">GrowUpCraft</span>
          </p>
          <p className="text-blue-400 text-xs text-center mt-4 italic">
            "विद्या दान, महा दान" — Education is the greatest gift we can give.
          </p>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-600 via-orange-400 to-saffron-600" />
    </footer>
  )
}
