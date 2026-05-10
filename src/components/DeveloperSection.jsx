import React from 'react'

import { motion } from 'framer-motion'

import {
  FaInstagram,
  FaWhatsapp,
  FaGlobe,
  FaPhoneAlt,
  FaArrowRight,
} from 'react-icons/fa'

/* ===================================================== */
/* DATA */
/* ===================================================== */

const skills = [
  'React.js',
  'Tailwind CSS',
  'Framer Motion',
  'SEO Optimization',
  'Responsive Design',
  'Modern UI/UX',
]

/* ===================================================== */
/* COMPONENT */
/* ===================================================== */

export default function DeveloperSection() {

  return (
    <section
      id="developer"
      className="relative overflow-hidden bg-[#071028] section-pad"
      aria-labelledby="developer-heading"
    >

      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>

      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">

        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

      </div>

      <div className="container-custom relative z-10">

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">

          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            {/* Label */}
            <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-300 text-xs uppercase tracking-[0.18em] font-semibold">

              Website Developer

            </span>

            {/* Heading */}
            <h2
              id="developer-heading"
              className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]"
            >

              Crafted with Precision
              <span className="block text-orange-400">
                by GrowUpCraft
              </span>

            </h2>

            {/* Description */}
            <p className="mt-8 text-lg leading-8 text-slate-300 max-w-2xl">

              Modern educational websites focused on premium UI/UX,
              mobile responsiveness, SEO optimization, emotional storytelling,
              and high-conversion digital experiences.

            </p>

            <p className="mt-6 text-slate-400 leading-8">

              Every section is carefully designed to help institutes
              build trust, improve engagement, and create a strong
              digital identity for students and parents.

            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mt-10">

              {skills.map((skill) => (

                <div
                  key={skill}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-200 text-sm"
                >

                  {skill}

                </div>

              ))}

            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-12">

              {/* Website */}
              <a
                href="https://grow-up-craft.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >

                <FaGlobe />

                Visit Website

              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918930296001"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-white/5 border-white/10 text-white hover:bg-white hover:text-slate-900"
              >

                <FaWhatsapp />

                WhatsApp

              </a>

            </div>

          </motion.div>

          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-2xl">

              {/* Glow */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-3xl"></div>

              {/* Image Section */}
              <div className="relative h-[80px] overflow-hidden">

                {/* AI Portrait */}
                {/* <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                  alt="Lokesh Founder of GrowUpCraft"
                  loading="lazy"
                  className="w-full h-full object-cover"
                /> */}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071028] via-[#071028]/20 to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute top-6 left-6 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl px-4 py-2">

                  <p className="text-xs uppercase tracking-[0.18em] text-orange-300 font-semibold">

                    Developer

                  </p>

                </div>

              </div>

              {/* Content */}
              <div className="relative z-10 p-8">

                {/* Name */}
                <div className="flex items-start justify-between gap-6">

                  <div>

                    <h3 className="text-3xl font-bold text-white tracking-tight">

                      Lokesh

                    </h3>

                    <p className="text-orange-300 mt-2 font-medium">

                      Founder • GrowUpCraft

                    </p>

                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center shadow-2xl shadow-orange-500/20">

                    <div className="w-3 h-3 rounded-full bg-white"></div>

                  </div>

                </div>

                {/* Description */}
                <p className="mt-8 text-slate-300 leading-8">

                  Specialized in building premium modern websites
                  for educational institutes, startups, and businesses
                  with focus on design quality, SEO, and responsive performance.

                </p>

                {/* Contact Cards */}
                <div className="space-y-4 mt-10">

                  {/* Website */}
                  <a
                    href="https://grow-up-craft.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-5 hover:bg-white/[0.05] transition-all duration-300"
                  >

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">

                        <FaGlobe className="text-orange-400 text-lg" />

                      </div>

                      <div>

                        <p className="text-white font-medium">
                          Portfolio Website
                        </p>

                        <p className="text-slate-400 text-sm mt-1">
                          grow-up-craft.vercel.app
                        </p>

                      </div>

                    </div>

                    <FaArrowRight className="text-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/growupcraft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-5 hover:bg-white/[0.05] transition-all duration-300"
                  >

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center">

                        <FaInstagram className="text-pink-400 text-lg" />

                      </div>

                      <div>

                        <p className="text-white font-medium">
                          Instagram
                        </p>

                        <p className="text-slate-400 text-sm mt-1">
                          @growupcraft
                        </p>

                      </div>

                    </div>

                    <FaArrowRight className="text-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  </a>

                  {/* Contact */}
                  <a
                    href="tel:+918930296001"
                    className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-5 hover:bg-white/[0.05] transition-all duration-300"
                  >

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center">

                        <FaPhoneAlt className="text-green-400 text-lg" />

                      </div>

                      <div>

                        <p className="text-white font-medium">
                          Contact Number
                        </p>

                        <p className="text-slate-400 text-sm mt-1">
                          +91 8930296001
                        </p>

                      </div>

                    </div>

                    <FaArrowRight className="text-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  </a>

                </div>

                {/* Footer Note */}
                <div className="mt-10 rounded-2xl border border-orange-500/20 bg-orange-500/10 px-5 py-5">

                  <p className="text-orange-100 leading-7 italic">

                    “Building modern websites that combine performance,
                    storytelling, trust, and premium user experience.”

                  </p>

                  <p className="mt-4 text-sm text-orange-300 font-medium">

                    — GrowUpCraft

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}