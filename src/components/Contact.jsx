import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useApp } from '../context/AppContext'
import toast from 'react-hot-toast'
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const { state, dispatch } = useApp()
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    mobile: '',
    goal: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.class || !formData.mobile || !formData.goal) {
      toast.error('Sab details fill karo please')
      return
    }

    dispatch({ type: 'FORM_LOADING' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        dispatch({ type: 'FORM_SUCCESS' })
        toast.success('Form submit ho gaya! Hum aapko contact karenge.')
        setFormData({ name: '', class: '', mobile: '', goal: '' })

        setTimeout(() => {
          dispatch({
            type: 'UPDATE_FORM',
            payload: { success: false },
          })
        }, 5000)
      } else {
        dispatch({
          type: 'FORM_ERROR',
          payload: 'Server error, try again',
        })
        toast.error('Kuch problem hua, baad mein try karo')
      }
    } catch (error) {
      dispatch({
        type: 'FORM_ERROR',
        payload: error.message,
      })
      toast.error('Error: ' + error.message)
    }
  }

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: 'Address',
      value: 'Vidya Dham Mandir, Palwal, Haryana - 121102',
      link: 'https://maps.google.com/?q=Vidya+Dham+Mandir+Palwal',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 99999 99999',
      link: 'tel:+919999999999',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: 'Chat with us anytime',
      link: 'https://wa.me/919999999999',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'contact@vidyadhammandir.in',
      link: 'mailto:contact@vidyadhammandir.in',
    },
  ]

  return (
    <section id="contact" ref={ref} className="section-pad bg-warm-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-saffron-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">संपर्क करें</p>
          <h2 className="section-heading mx-auto max-w-3xl">
            Let's <span className="text-gradient-saffron">Connect</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Any question? Hum yahan hain aapka help karne ke liye. Message karo, call karo, ya aao milne.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-royal-900 mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 mb-8">
                Choose your preferred way to reach us. We'll get back to you within hours.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={i}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="glass-card rounded-2xl p-6 flex gap-4 hover:shadow-saffron transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-saffron-500 to-orange-600 flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-royal-900 text-sm">{info.label}</p>
                      <p className="text-gray-600 text-sm mt-0.5">{info.value}</p>
                    </div>
                    <div className="text-saffron-500 text-xl group-hover:translate-x-1 transition-transform">
                      →
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-glass h-72"
            >
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5!2d77.08!3d28.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zPalwal!5e0!3m2!1sen!2sin!4v1234567890"
              />
            </motion.div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8 shadow-glass"
          >
            <h3 className="font-display text-2xl font-bold text-royal-900 mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-royal-900 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Rajesh Kumar"
                  className="w-full px-4 py-3 rounded-xl border-2 border-saffron-200 focus:border-saffron-500 focus:outline-none bg-white/50 transition-all duration-200"
                  disabled={state.admissionForm.loading}
                />
              </div>

              {/* Class */}
              <div>
                <label className="block text-sm font-semibold text-royal-900 mb-2">
                  Class / Year *
                </label>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-saffron-200 focus:border-saffron-500 focus:outline-none bg-white/50 transition-all duration-200"
                  disabled={state.admissionForm.loading}
                >
                  <option value="">Select Class</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                  <option value="12-pass">12th Pass (NEET)</option>
                </select>
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-semibold text-royal-900 mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength="10"
                  className="w-full px-4 py-3 rounded-xl border-2 border-saffron-200 focus:border-saffron-500 focus:outline-none bg-white/50 transition-all duration-200"
                  disabled={state.admissionForm.loading}
                />
              </div>

              {/* Goal / Message */}
              <div>
                <label className="block text-sm font-semibold text-royal-900 mb-2">
                  Your Goal / Message *
                </label>
                <textarea
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  placeholder="e.g., NEET preparation, Board exam, General coaching..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border-2 border-saffron-200 focus:border-saffron-500 focus:outline-none bg-white/50 transition-all duration-200 resize-none"
                  disabled={state.admissionForm.loading}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={state.admissionForm.loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-saffron w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.admissionForm.loading ? 'Sending...' : 'Send Message →'}
              </motion.button>

              {/* Success message */}
              {state.admissionForm.success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg"
                >
                  <p className="text-green-700 font-semibold text-sm">
                    ✓ Thank you! We'll contact you soon.
                  </p>
                </motion.div>
              )}

              {/* Terms */}
              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to our Terms & Privacy Policy
              </p>
            </form>
          </motion.div>
        </div>

        {/* Quick actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="glass-card rounded-2xl p-8 text-center"
        >
          <h4 className="font-bold text-royal-900 text-lg mb-4">Prefer Quick Contact?</h4>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-all"
            >
              <FaWhatsapp /> WhatsApp Directly
            </a>
            <a
              href="tel:+919999999999"
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl transition-all"
            >
              <FaPhone /> Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
