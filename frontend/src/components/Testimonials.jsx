import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    class: 'Class 12, Palwal',
    role: 'NEET Aspirant',
    text: 'Sir bahut achhe se explain karte hain. Sabse important, vo Hinglish mein padhate hain jo mera concept bahut clear kar diya. Physics ke baad Biology mein ab confidence hai.',
    emoji: '👨‍🎓',
    rating: 5,
    category: 'student',
    achievement: 'NEET Biology - 380+ marks',
  },
  {
    id: 2,
    name: 'Priya Singh',
    class: 'Class 11, Palwal',
    role: 'Student',
    text: 'Jo doubt karte hain na, sir kabhi gussa nahi karte. Ar baat to ye hai ki free padhai aur itna achha teaching... Mummy ko bhi believe nahi hua pehle.',
    emoji: '👧',
    rating: 5,
    category: 'student',
    achievement: 'Board prep - Strong foundation',
  },
  {
    id: 3,
    name: 'Meera Devi',
    class: 'Mother, Haryana',
    role: 'Parent',
    text: 'Humara Arjun village se padh raha tha, bilkul hopeless. Ab boards mein achhe marks aa rahe hain. Sir ne jo confidence diya, vo mahatvpurn hai. Paisa to secondary hai.',
    emoji: '👩',
    rating: 5,
    category: 'parent',
    achievement: 'Son qualified for NEET',
  },
  {
    id: 4,
    name: 'Arun Sharma',
    class: 'Class 9, Hisar',
    role: 'Student',
    text: 'Motivation sessions mein jo Sir bolte hain, vo sach mein life-changing hai. Maine apna phone time bahut kam kar diya aur padhai mein focus aa gaya. Confidence bohot badh gaya.',
    emoji: '👨‍🎓',
    rating: 5,
    category: 'student',
    achievement: 'Improved grades - 85% to 92%',
  },
  {
    id: 5,
    name: 'Sunita Patel',
    class: 'Mother, Palwal',
    role: 'Parent',
    text: 'Vidya Dham Mandir se padhne ke baad humara Shruti bilkul badal gaya. Confidence aaya, discipline aa gaya, aur sabse best — kisi ki coaching fees ki parwa nahi. Genuinely best decision.',
    emoji: '👩',
    rating: 5,
    category: 'parent',
    achievement: 'Daughter pursuing medical dream',
  },
  {
    id: 6,
    name: 'Vikram Verma',
    class: 'Class 12, Faridabad',
    role: 'NEET Aspirant',
    text: 'NEET prep ke liye bohot saari expensive classes hain, par yahan free mein itna quality milta hai. Hinglish medium ne sab concepts crystal clear kar diye. Sir ki dedication dekh ke motivation kabhi kam nahi hota.',
    emoji: '👨‍🎓',
    rating: 5,
    category: 'student',
    achievement: 'Preparing for NEET 2025',
  },
  {
    id: 7,
    name: 'Renu Sharma',
    class: 'Mother, Palwal',
    role: 'Parent',
    text: 'Mujhe lagta tha expensive coaching se hi padhai hoti hai. Yahan padhne se realiza hua ki Sir ke paas genuine care hai. Jo progress hamara beta kar raha hai wo kahin nahi dekha.',
    emoji: '👩',
    rating: 5,
    category: 'parent',
    achievement: 'Family recommended to others',
  },
  {
    id: 8,
    name: 'Nikhil Pandey',
    class: 'Class 11, Palwal',
    role: 'Student',
    text: 'Mujhe lagta tha biology boring subject hai, par Sir ne itne achhe tareeke se padha diya ki ab question solve karte waqt excitement hoti hai. Hinglish medium hi success ka raaz hai.',
    emoji: '👨‍🎓',
    rating: 5,
    category: 'student',
    achievement: 'Biology - Top student',
  },
  {
    id: 9,
    name: 'Rekha Devi',
    class: 'Mother, Haryana',
    role: 'Parent',
    text: 'Mera beta rural area se aaya, usko confidence nahi tha. Lekin Vidya Dham Mandir mein aane ke baad uska personality hi badal gaya. Padhai mein top, personality mein confident.',
    emoji: '👩',
    rating: 5,
    category: 'parent',
    achievement: 'Son is class topper',
  },
]

export default function Testimonials() {
  const [filter, setFilter] = useState('all')
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const filteredTestimonials =
    filter === 'all'
      ? testimonials
      : testimonials.filter((t) => t.category === filter)

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section
      id="testimonials"
      ref={ref}
      className="section-pad bg-white relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-royal-900/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">प्रशंसापत्र</p>
          <h2 className="section-heading mx-auto max-w-3xl">
            What Students & Parents <br />
            <span className="text-gradient-saffron">Are Saying</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Real voices from real people who trusted us with their education journey.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center gap-3 mb-12"
        >
          {[
            { id: 'all', label: 'All Reviews', icon: '⭐' },
            { id: 'student', label: 'Students', icon: '👨‍🎓' },
            { id: 'parent', label: 'Parents', icon: '👨‍👩‍👧‍👦' },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-saffron-500 to-orange-600 text-white shadow-saffron'
                  : 'glass-card hover:shadow-glass'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                layout
                variants={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="glass-card rounded-2xl p-6 group hover:shadow-saffron transition-all duration-300 hover:-translate-y-2"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic font-accent">
                  "{testimonial.text}"
                </p>

                {/* Divider */}
                <div className="h-px bg-saffron-200 my-4" />

                {/* Author info */}
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{testimonial.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-royal-900">{testimonial.name}</h4>
                    <p className="text-saffron-600 text-xs font-semibold">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{testimonial.class}</p>
                    <div className="bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full mt-2 inline-block">
                      ✓ {testimonial.achievement}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Trust numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-3xl p-8 lg:p-12 text-center border-t-4 border-saffron-500"
        >
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-royal-900 mb-8">
            Trust in Numbers
          </h3>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Happy Students', icon: '👨‍🎓' },
              { number: '4.9/5', label: 'Average Rating', icon: '⭐' },
              { number: '95%', label: 'Would Recommend', icon: '👍' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <p className="text-3xl lg:text-4xl font-bold text-gradient-saffron">
                  {stat.number}
                </p>
                <p className="text-gray-600 font-semibold mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-700 mb-6 text-lg">
            Apna success story likha chahte ho?
          </p>
          <button className="btn-saffron text-lg">
            Join Karo Aur Transform Ho Jao →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
