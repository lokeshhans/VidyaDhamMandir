import React from 'react'
import { motion } from 'framer-motion'
import {
  FaInstagram,
  FaWhatsapp,
  FaGlobe,
  FaPhoneAlt,
  FaCode,
} from 'react-icons/fa'

export default function DeveloperSection() {
  return (
    <section
      id="developer"
      className="relative overflow-hidden bg-[#071028] py-16 sm:py-20 lg:py-28 px-4 sm:px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-orange-400 uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-4">
              Website Developer
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Crafted with Passion by{' '}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                GrowUpCraft
              </span>
            </h2>

            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-5">
              This website is designed and developed with a premium modern
              frontend experience focused on trust, performance, emotional
              storytelling, and mobile-first design for Indian educational
              institutes.
            </p>

            <p className="text-blue-200 leading-relaxed mb-8 text-sm sm:text-base">
              From smooth animations to SEO optimization and handcrafted UI,
              every section is carefully built to create a strong digital
              presence and increase admissions, trust, and engagement.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                'React.js',
                'Tailwind CSS',
                'Framer Motion',
                'Responsive Design',
                'SEO Optimization',
                'Node.js',
                'Express.js',
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-white/10 border border-white/10 text-blue-100 text-xs sm:text-sm px-4 py-2 rounded-full backdrop-blur-xl"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://grow-up-craft.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-xl hover:scale-105 flex items-center gap-2"
              >
                <FaGlobe />
                Visit Website
              </a>

              <a
                href="https://wa.me/918930296001"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-xl hover:scale-105 flex items-center gap-2"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-[30px] p-6 sm:p-8 shadow-2xl overflow-hidden relative">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-orange-500/10 rounded-full blur-3xl" />

              {/* Top */}
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-3xl shadow-2xl flex-shrink-0">
                  <FaCode />
                </div>

                <div>
                  <h3 className="text-white text-2xl font-bold">
                    Lokesh
                  </h3>

                  <p className="text-orange-300 text-sm mt-1">
                    Frontend Developer & Founder
                  </p>

                  <p className="text-blue-200 text-sm">
                    GrowUpCraft
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4 relative z-10">
                <a
                  href="https://grow-up-craft.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/5 border border-white/5 rounded-2xl px-5 py-4 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <FaGlobe className="text-orange-400 text-lg" />

                    <div>
                      <p className="text-white text-sm font-medium">
                        Website
                      </p>

                      <p className="text-blue-200 text-xs">
                        grow-up-craft.vercel.app
                      </p>
                    </div>
                  </div>

                  <span className="text-orange-300 text-xs font-semibold">
                    Visit
                  </span>
                </a>

                <a
                  href="https://instagram.com/growupcraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/5 border border-white/5 rounded-2xl px-5 py-4 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <FaInstagram className="text-pink-400 text-lg" />

                    <div>
                      <p className="text-white text-sm font-medium">
                        Instagram
                      </p>

                      <p className="text-blue-200 text-xs">
                        @growupcraft
                      </p>
                    </div>
                  </div>

                  <span className="text-pink-300 text-xs font-semibold">
                    Follow
                  </span>
                </a>

                <a
                  href="tel:+918930296001"
                  className="flex items-center justify-between bg-white/5 border border-white/5 rounded-2xl px-5 py-4 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-green-400 text-lg" />

                    <div>
                      <p className="text-white text-sm font-medium">
                        Contact Number
                      </p>

                      <p className="text-blue-200 text-xs">
                        +91 8930296001
                      </p>
                    </div>
                  </div>

                  <span className="text-green-300 text-xs font-semibold">
                    Call
                  </span>
                </a>
              </div>

              {/* Bottom Note */}
              <div className="mt-8 bg-orange-50 rounded-2xl p-5 border border-orange-200 relative z-10">
                <p className="text-orange-900 text-sm italic leading-relaxed">
                  “Modern websites for schools, coaching institutes, local
                  businesses, and startups with premium UI/UX and strong mobile
                  responsiveness.”
                </p>

                <p className="text-orange-500 text-xs mt-3 text-right font-semibold">
                  — GrowUpCraft
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
