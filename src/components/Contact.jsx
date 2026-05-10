import React, { useState } from 'react'

import { motion } from 'framer-motion'

import { useInView } from 'react-intersection-observer'

import { useApp } from '../context/AppContext'

import toast from 'react-hot-toast'

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
} from 'react-icons/fa'

/* ===================================================== */
/* CONTACT INFO */
/* ===================================================== */

const contactInfo = [
  {
    icon: FaPhoneAlt,
    title: 'Phone Support',
    value: '+91 8053678711',
    secondary: '+91 8950052463',
    link: 'tel:+918053678711',
  },

  {
    icon: FaWhatsapp,
    title: 'WhatsApp Guidance',
    value: 'Chat with Prashant Sir',
    secondary: 'Quick student support',
    link: 'https://wa.me/918053678711',
  },

  {
    icon: FaEnvelope,
    title: 'Email Address',
    value: 'prashantsir2107@gmail.com',
    secondary: 'Academic enquiries',
    link: 'mailto:prashantsir2107@gmail.com',
  },

  {
    icon: FaMapMarkerAlt,
    title: 'Location',
    value: 'Alwalpur chock Palwal, Haryana',
    secondary: 'India • 121102',
    link: 'https://maps.google.com/?q=Palwal,Haryana',
  },
]

/* ===================================================== */
/* COMPONENT */
/* ===================================================== */

export default function Contact() {

  const { state, dispatch } = useApp()

  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    class: '',
    mobile: '',
    goal: '',
  })

  /* ===================================================== */
  /* HANDLE CHANGE */
  /* ===================================================== */

  function handleChange(e) {

    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

  }

  /* ===================================================== */
  /* SUBMIT */
  /* ===================================================== */

  async function handleSubmit(e) {

    e.preventDefault()

    if (
      !formData.name ||
      !formData.class ||
      !formData.mobile ||
      !formData.goal
    ) {
      toast.error('Please complete all required fields.')
      return
    }

    dispatch({
      type: 'FORM_LOADING',
    })

    try {

      const response = await fetch('/api/contact', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(formData),
      })

      if (response.ok) {

        dispatch({
          type: 'FORM_SUCCESS',
        })

        toast.success(
          'Your enquiry has been submitted successfully.'
        )

        setFormData({
          name: '',
          class: '',
          mobile: '',
          goal: '',
        })

      } else {

        toast.error(
          'Something went wrong. Please try again.'
        )

      }

    } catch (error) {

      toast.error(error.message)

    }

  }

  /* ===================================================== */
  /* UI */
  /* ===================================================== */

  return (
    <section
      id="contact"
      ref={ref}
      className="relative section-pad overflow-hidden bg-[#fffdf9]"
      aria-labelledby="contact-heading"
    >

      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl opacity-50"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-50 rounded-full blur-3xl opacity-40"></div>

      </div>

      <div className="container-custom relative z-10">

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
          }}
          className="max-w-4xl mx-auto text-center"
        >

          <span className="section-label">
            Contact & Guidance
          </span>

          <h2
            id="contact-heading"
            className="section-heading mt-4 text-balance"
          >

            Start Your
            <span className="text-orange-soft">
              {' '}Learning Journey
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 max-w-3xl mx-auto">

            Reach out for admissions, NEET guidance,
            academic counselling, or mentorship support.

          </p>

        </motion.div>

        {/* ===================================================== */}
        {/* MAIN GRID */}
        {/* ===================================================== */}

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 mt-20">

          {/* ================================================= */}
          {/* LEFT */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.7,
            }}
            className="space-y-6"
          >

            {/* Intro */}
            <div className="premium-card">

              <span className="section-label">
                Student Support
              </span>

              <h3 className="text-3xl font-semibold text-slate-900 mt-4">

                We’re Here To Help Students Grow

              </h3>

              <p className="mt-5 text-slate-600 leading-8">

                Vidya Dham Mandir focuses on mentorship,
                conceptual learning, and meaningful educational support
                for students across Haryana.

              </p>

            </div>

            {/* Contact Cards */}
            {contactInfo.map((item, index) => {

              const Icon = item.icon

              return (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -2,
                  }}
                  className="premium-card flex items-start gap-5 group"
                >

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-300">

                    <Icon className="text-orange-500 group-hover:text-white transition-colors duration-300" />

                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <h4 className="text-lg font-semibold text-slate-900">

                      {item.title}

                    </h4>

                    <p className="mt-2 text-slate-700 font-medium">

                      {item.value}

                    </p>

                    <p className="mt-1 text-sm text-slate-500">

                      {item.secondary}

                    </p>

                  </div>

                  <FaArrowRight className="text-orange-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                </motion.a>
              )
            })}

            {/* Map */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                delay: 0.3,
              }}
              className="overflow-hidden rounded-[28px] border border-slate-200 shadow-soft h-[320px]"
            >

              <iframe
                title="Vidya Dham Mandir Location"
                width="100%"
                height="100%"
                loading="lazy"
                style={{
                  border: 0,
                }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=VJ+Car+Accessories+Palwal&output=embed"  
              />

            </motion.div>

          </motion.div>

          {/* ================================================= */}
          {/* RIGHT */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.7,
            }}
            className="premium-card"
          >

            {/* Header */}
            <div>

              <span className="section-label">
                Admission Enquiry
              </span>

              <h3 className="text-3xl font-semibold text-slate-900 mt-4">

                Request Guidance

              </h3>

              <p className="mt-5 text-slate-600 leading-8">

                Fill out the enquiry form and our team
                will contact you regarding admissions,
                NEET preparation, or academic support.

              </p>

            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >

              {/* Name */}
              <div>

                <label className="block text-sm font-semibold text-slate-900 mb-3">

                  Student Name

                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter student name"
                  disabled={state.admissionForm.loading}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-orange-400 transition-all duration-300"
                />

              </div>

              {/* Grid */}
              <div className="grid sm:grid-cols-2 gap-5">

                {/* Class */}
                <div>

                  <label className="block text-sm font-semibold text-slate-900 mb-3">

                    Class

                  </label>

                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    disabled={state.admissionForm.loading}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-orange-400 transition-all duration-300"
                  >

                    <option value="">
                      Select Class
                    </option>

                    <option value="9">
                      Class 9
                    </option>

                    <option value="10">
                      Class 10
                    </option>

                    <option value="11">
                      Class 11
                    </option>

                    <option value="12">
                      Class 12
                    </option>

                    <option value="neet">
                      NEET Preparation
                    </option>

                  </select>

                </div>

                {/* Mobile */}
                <div>

                  <label className="block text-sm font-semibold text-slate-900 mb-3">

                    Mobile Number

                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    maxLength="10"
                    disabled={state.admissionForm.loading}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-orange-400 transition-all duration-300"
                  />

                </div>

              </div>

              {/* Goal */}
              <div>

                <label className="block text-sm font-semibold text-slate-900 mb-3">

                  Academic Goal

                </label>

                <textarea
                  rows="5"
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  placeholder="Tell us about your academic goals or learning needs..."
                  disabled={state.admissionForm.loading}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-orange-400 transition-all duration-300 resize-none"
                />

              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={state.admissionForm.loading}
                className="btn-primary w-full justify-center"
              >

                {state.admissionForm.loading
                  ? 'Submitting Enquiry...'
                  : 'Submit Enquiry'}

              </button>

              {/* Success */}
              {state.admissionForm.success && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4"
                >

                  <p className="text-green-700 text-sm font-medium">

                    Your enquiry has been submitted successfully.

                  </p>

                </motion.div>

              )}

              {/* Terms */}
              <p className="text-xs text-slate-500 text-center leading-6">

                By submitting this form, you agree to receive
                communication regarding admissions and academic guidance.

              </p>

            </form>

          </motion.div>

        </div>

        {/* ===================================================== */}
        {/* BOTTOM CTA */}
        {/* ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            delay: 0.3,
          }}
          className="mt-24"
        >

          <div className="premium-card text-center relative overflow-hidden">

            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-orange-50 rounded-full blur-3xl opacity-60"></div>

            <div className="relative z-10">

              <span className="section-label">
                Quick Support
              </span>

              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-4">

                Need Immediate Guidance?

              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">

                Connect directly on WhatsApp for admission support,
                NEET counselling, and student guidance.

              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

                <a
                  href="https://wa.me/918053678711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >

                  Connect on WhatsApp

                </a>

                <a
                  href="tel:+918053678711"
                  className="btn-secondary"
                >

                  Call Now

                </a>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}