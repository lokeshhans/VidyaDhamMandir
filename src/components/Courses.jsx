import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaChevronRight } from 'react-icons/fa'

const courses = [
  {
    title: 'NEET Biology',
    subtitle: 'Advanced Medical Preparation',
    description: 'Complete NEET Biology with detailed explanations in Hinglish. Covering all chapters from NCERT, previous year questions, and mock tests.',
    students: '150+',
    icon: '🧬',
    color: 'from-rose-500 to-pink-600',
    benefits: [
      'Complete NCERT syllabus coverage',
      'Chapter-wise detailed notes',
      'Previous year solved papers',
      'Weekly mock tests & analysis',
      'One-on-one doubt sessions',
      'Personal mentorship',
    ],
    parents: [
      'Hinglish medium — concepts are clear',
      'Affordable — 100% FREE',
      'Personal attention to every student',
      'Regular progress updates',
    ],
  },
  {
    title: 'Class 11-12 Science',
    subtitle: 'Board Exam Excellence',
    description: 'Comprehensive Science coaching for Class 11 & 12 boards. Physics, Chemistry, and Biology integrated learning approach.',
    students: '200+',
    icon: '🔬',
    color: 'from-blue-500 to-cyan-600',
    benefits: [
      'Board syllabus aligned',
      'Conceptual clarity focus',
      'Practicals & experiments explained',
      'Previous year board papers',
      'Small batch size — personalized',
      'Weekend revision classes',
    ],
    parents: [
      'Strong board performance record',
      'Character development included',
      'Discipline & focus inculcated',
      'Career guidance provided',
    ],
  },
  {
    title: 'NCERT Foundation',
    subtitle: 'Class 9-10 Basics',
    description: 'Strong foundation building for Class 9 & 10 students. Clear concepts in Mathematics, Science, and Hindi.',
    students: '180+',
    icon: '📚',
    color: 'from-green-500 to-emerald-600',
    benefits: [
      'Concept-based learning',
      'Regular homework & assignments',
      'Monthly progress tests',
      'Doubt clearing sessions',
      'Study material provided',
      'Parent-teacher meetings',
    ],
    parents: [
      'Strong foundation for future',
      'Confidence building approach',
      'Affordable rates',
      'Safe, supportive learning environment',
    ],
  },
  {
    title: 'Personality Development',
    subtitle: 'Beyond Books',
    description: 'Holistic development of students. Communication, confidence, time management, and leadership skills.',
    students: '100+',
    icon: '✨',
    color: 'from-yellow-500 to-amber-600',
    benefits: [
      'Confidence building sessions',
      'Public speaking practice',
      'Interview preparation',
      'Personality enhancement',
      'Career counseling',
      'Motivation workshops',
    ],
    parents: [
      'Develops all-round personality',
      'Improves communication skills',
      'Builds confidence for interviews',
      'Guides future path',
    ],
  },
  {
    title: 'Revision Classes',
    subtitle: 'Last-Minute Preparation',
    description: 'Intensive revision sessions before exams. Shortcuts, important questions, and exam-focused strategies.',
    students: '250+',
    icon: '🚀',
    color: 'from-purple-500 to-indigo-600',
    benefits: [
      'Exam-focused strategy',
      'Important questions list',
      'Quick revision notes',
      'Answer writing practice',
      'Time management tips',
      'Previous year analysis',
    ],
    parents: [
      'Exam success oriented',
      'Stress relief sessions',
      'Confidence boost before exams',
      'Proven track record',
    ],
  },
  {
    title: 'Doubt Sessions',
    subtitle: 'One-on-One Clarification',
    description: 'Personalized doubt clearing sessions. Any topic, any time, unlimited clarification.',
    students: '350+',
    icon: '💬',
    color: 'from-orange-500 to-red-600',
    benefits: [
      'Unlimited doubt clarification',
      'Flexible timing',
      'Video call available',
      'Detailed explanations',
      'Follow-up notes',
      'Progress tracking',
    ],
    parents: [
      'Child\'s questions get answers',
      'Strong conceptual clarity',
      'No confusion left behind',
      'Regular feedback provided',
    ],
  },
]

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="courses" ref={ref} className="section-pad bg-warm-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 left-1/4 w-80 h-80 bg-royal-900/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">हमारे कोर्स</p>
          <h2 className="section-heading mx-auto max-w-3xl">
            Courses Built for <span className="text-gradient-saffron">Student Success</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            From Class 9 NEET preparation to personality development, we cover every aspect of student growth.
          </p>
        </motion.div>

        {/* Courses grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              variants={item}
              onClick={() => setSelectedCourse(selectedCourse === i ? null : i)}
              className="group cursor-pointer"
            >
              <div
                className={`relative h-full glass-card rounded-2xl p-7 overflow-hidden transition-all duration-300 group-hover:shadow-saffron group-hover:-translate-y-2 border-l-4 ${
                  selectedCourse === i
                    ? 'ring-2 ring-saffron-500 shadow-saffron'
                    : 'border-saffron-300'
                }`}
              >
                {/* Gradient background */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${course.color} opacity-10 rounded-full -mr-16 -mt-8`}
                />

                {/* Icon */}
                <div className="relative z-10 text-5xl mb-3">{course.icon}</div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-display font-bold text-xl text-royal-900 mb-1">
                    {course.title}
                  </h3>
                  <p className="text-saffron-600 text-xs font-semibold mb-2 tracking-wide">
                    {course.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-orange-100">
                    <span className="text-xs font-bold text-saffron-600 tracking-widest">
                      {course.students} STUDENTS
                    </span>
                    <motion.div
                      animate={{ x: selectedCourse === i ? 4 : 0 }}
                      className="text-saffron-500"
                    >
                      <FaChevronRight />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Expanded details */}
              <AnimatePresence>
                {selectedCourse === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 glass-card rounded-2xl p-6 border-t-2 border-saffron-500"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Student benefits */}
                      <div>
                        <h4 className="font-bold text-royal-900 mb-3 flex items-center gap-2">
                          <span>👨‍🎓</span> Student Benefits
                        </h4>
                        <ul className="space-y-2">
                          {course.benefits.map((benefit) => (
                            <li key={benefit} className="flex gap-2 text-sm text-gray-700">
                              <span className="text-green-500 flex-shrink-0">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Parent benefits */}
                      <div>
                        <h4 className="font-bold text-royal-900 mb-3 flex items-center gap-2">
                          <span>👨‍👩‍👧</span> Parent Confidence
                        </h4>
                        <ul className="space-y-2">
                          {course.parents.map((parent) => (
                            <li key={parent} className="flex gap-2 text-sm text-gray-700">
                              <span className="text-saffron-500 flex-shrink-0">★</span>
                              {parent}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button className="btn-saffron mt-6 w-full justify-center">
                      Enroll Now
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6 }}
          className="glass-card rounded-3xl p-8 lg:p-12 text-center bg-gradient-to-br from-royal-900 to-royal-800 text-white border-0 shadow-royal"
        >
          <h3 className="font-display text-3xl font-bold mb-3">
            Not Sure Which Course?
          </h3>
          <p className="text-blue-200 mb-6 max-w-lg mx-auto">
            Our counselors will help you choose the perfect course based on your goals and current level.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="btn-saffron">
              Free Course Consultation
            </button>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white text-white hover:bg-white hover:text-royal-900"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
