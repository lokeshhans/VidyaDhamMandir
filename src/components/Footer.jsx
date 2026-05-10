import logo from "../assets/logo.webp"
import React from 'react'
import { motion } from 'framer-motion'

import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa'

/* ===================================================== */
/* DATA */
/* ===================================================== */

const quickLinks = [
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
]

const resources = [
  {
    label: 'NEET Biology Guidance',
    href: '#courses',
  },
  {
    label: 'NCERT Learning',
    href: '#about',
  },
  {
    label: 'Student Mentorship',
    href: '#contact',
  },
  {
    label: 'Free Counselling',
    href: '#contact',
  },
]

const socialLinks = [
  {
    icon: FaInstagram,
    href: 'https://instagram.com/prashantsirbiology',
    label: 'Instagram',
  },
  {
    icon: FaYoutube,
    href: 'https://youtube.com/@prashantsirpalwal',
    label: 'YouTube',
  },
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/918053678711',
    label: 'WhatsApp',
  },
]

/* ===================================================== */
/* COMPONENT */
/* ===================================================== */

export default function Footer() {

  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden bg-[#0b1120] text-white"
      aria-label="Footer"
    >

      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>

      </div>

      {/* ===================================================== */}
      {/* TOP BORDER */}
      {/* ===================================================== */}

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-orange-400/50 to-transparent"></div>

      {/* ===================================================== */}
      {/* MAIN */}
      {/* ===================================================== */}

      <div className="container-custom relative z-10 py-20">

        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-14">

          {/* ===================================================== */}
          {/* BRAND */}
          {/* ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
          >

            {/* Logo */}
            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center overflow-hidden justify-center shadow-lg shadow-orange-500/20">

                <img src={logo} alt="" />

              </div>

              <div>

                <h2 className="text-xl font-bold tracking-tight text-white">
                  Vidya Dham Mandir
                </h2>

                <p className="text-sm text-orange-300 mt-1 tracking-wide">
                  Education Built Around Students
                </p>

              </div>

            </div>

            {/* Description */}
            <p className="mt-8 text-slate-300 leading-8 max-w-md">

              Vidya Dham Mandir is a student-first educational initiative
              focused on free learning support, NEET Biology guidance,
              NCERT foundation learning, and mentorship for students
              across Haryana.

            </p>

            {/* Trust */}
            <div className="mt-8 space-y-3">

              {[
                'Free educational support for students',
                'NEET Biology and NCERT focused learning',
                'Personal mentorship and guidance',
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <div className="w-2 h-2 rounded-full bg-orange-400 mt-3"></div>

                  <p className="text-sm text-slate-300 leading-7">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </motion.div>

          {/* ===================================================== */}
          {/* QUICK LINKS */}
          {/* ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="w-12 h-[2px] bg-orange-400 rounded-full mt-4 mb-8"></div>

            <ul className="space-y-5">

              {quickLinks.map((link) => (

                <li key={link.href}>

                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-orange-300 transition-colors duration-300 text-sm"
                  >

                    {link.label}

                  </a>

                </li>

              ))}

            </ul>

          </motion.div>

          {/* ===================================================== */}
          {/* RESOURCES */}
          {/* ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >

            <h3 className="text-lg font-semibold text-white">
              Learning Resources
            </h3>

            <div className="w-12 h-[2px] bg-orange-400 rounded-full mt-4 mb-8"></div>

            <ul className="space-y-5">

              {resources.map((resource) => (

                <li key={resource.label}>

                  <a
                    href={resource.href}
                    className="text-slate-300 hover:text-orange-300 transition-colors duration-300 text-sm leading-7"
                  >

                    {resource.label}

                  </a>

                </li>

              ))}

            </ul>

          </motion.div>

          {/* ===================================================== */}
          {/* CONTACT */}
          {/* ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >

            <h3 className="text-lg font-semibold text-white">
              Contact Information
            </h3>

            <div className="w-12 h-[2px] bg-orange-400 rounded-full mt-4 mb-8"></div>

            <div className="space-y-6">

              {/* Phone */}
              <a
                href="tel:+918053678711"
                className="flex items-start gap-4 group"
              >

                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">

                  <FaPhoneAlt className="text-orange-300 text-sm" />

                </div>

                <div>

                  <p className="text-sm text-slate-400">
                    Call Us
                  </p>

                  <p className="text-white font-medium mt-1">
                    +91 8053678711
                  </p>

                  <p className="text-white font-medium">
                    +91 8950052463
                  </p>

                </div>

              </a>

              {/* Email */}
              <a
                href="mailto:prashantsir2107@gmail.com"
                className="flex items-start gap-4 group"
              >

                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">

                  <FaEnvelope className="text-orange-300 text-sm" />

                </div>

                <div>

                  <p className="text-sm text-slate-400">
                    Email Address
                  </p>

                  <p className="text-white font-medium mt-1 break-all">
                    prashantsir2107@gmail.com
                  </p>

                </div>

              </a>

              {/* Location */}
              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center">

                  <FaMapMarkerAlt className="text-orange-300 text-sm" />

                </div>

                <div>

                  <p className="text-sm text-slate-400">
                    Location
                  </p>

                  <p className="text-white font-medium mt-1">
                    Palwal, Haryana
                  </p>

                  <p className="text-slate-400 text-sm">
                    India • 121102
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* ===================================================== */}
        {/* DIVIDER */}
        {/* ===================================================== */}

        <div className="w-full h-[1px] bg-white/10 my-14"></div>

        {/* ===================================================== */}
        {/* BOTTOM */}
        {/* ===================================================== */}

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Social */}
          <div className="flex items-center gap-4">

            {socialLinks.map((social, index) => {

              const Icon = social.icon

              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-300 hover:bg-orange-500 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >

                  <Icon className="text-lg" />

                </motion.a>
              )
            })}

          </div>

          {/* CTA */}
          <a
            href="https://wa.me/918053678711"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >

            <FaWhatsapp />

            Connect on WhatsApp

          </a>

        </div>

        {/* ===================================================== */}
        {/* COPYRIGHT */}
        {/* ===================================================== */}

        <div className="mt-14 pt-10 border-t border-white/10 text-center">

          <p className="text-slate-400 text-sm leading-7">

            © {currentYear} Vidya Dham Mandir. All rights reserved.

          </p>

          <p className="mt-4 text-slate-500 text-sm leading-7 max-w-2xl mx-auto">

            Education focused on mentorship, accessibility,
            and meaningful student growth.

          </p>

          <p className="mt-6 text-slate-500 text-sm">

            Designed & Developed by
            <span className="text-orange-300 font-medium">
              {' '}Lokesh • GrowUpCraft
            </span>

          </p>

        </div>

      </div>

    </footer>
  )
}