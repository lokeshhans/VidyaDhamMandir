import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const whyPoints = [
  {
    icon: '🆓',
    title: 'Completely FREE',
    desc: 'Not a single penny. Padhai har student ka haq hai.',
    psychological: 'Affordability + Trust',
  },
  {
    icon: '🗣️',
    title: 'Hinglish Medium',
    desc: 'Apni language mein seekho. Concepts crystal clear hote hain.',
    psychological: 'Comfort + Confidence',
  },
  {
    icon: '👨‍🏫',
    title: 'Personal Mentorship',
    desc: 'Har student ko individual attention. Koi bhi confused nahi rehta.',
    psychological: 'Belonging + Support',
  },
  {
    icon: '💪',
    title: 'Motivation & Discipline',
    desc: 'Sirf padhai nahi, life confidence aur discipline bhi dete hain.',
    psychological: 'Empowerment',
  },
  {
    icon: '🏆',
    title: 'Proven Results',
    desc: '500+ students success stories. Real results, real achievements.',
    psychological: 'Social Proof',
  },
  {
    icon: '📍',
    title: 'Local Understanding',
    desc: 'Palwal ke context samajhte hain. Real life examples se seekho.',
    psychological: 'Relatability',
  },
  {
    icon: '🎯',
    title: 'NEET Specialized',
    desc: 'NEET Biology experts. Medical aspirants ke liye tailor-made.',
    psychological: 'Expertise',
  },
  {
    icon: '😌',
    title: 'Stress-Free Learning',
    desc: 'No pressure. Seekho apne pace se. Failure nahi, growth seekho.',
    psychological: 'Safety',
  },
  {
    icon: '👥',
    title: 'Community Driven',
    desc: 'Sirf students nahi, ek puri community jo ek doosre ko support kare.',
    psychological: 'Community',
  },
]

const ruralConsiderations = [
  'Sirf padhai budget mein ho, zyada nahi — absolutely free solution',
  'Ghar se paas ho — Palwal mein hai',
  'Apni language mein ho — Hinglish mein complete preparation',
  'Quality compromise na ho — Best teachers, zero fees',
]

const middleClassNeeds = [
  'Board success zaruri hai — strong academic support',
  'NEET dream possible hai — specialized coaching available',
  'Character development chahiye — personality sessions included',
  'Affordable options chahiye — completely free',
]

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section ref={ref} className="section-pad bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-saffron-500/8 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-royal-900/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">क्यों चुनें हमें</p>
          <h2 className="section-heading mx-auto max-w-3xl">
            Why Students & Parents <br />
            <span className="text-gradient-saffron">Trust Vidya Dham Mandir</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Built on genuine purpose, not profit. Proven track record of transformation.
          </p>
        </motion.div>

        {/* Main grid of reasons */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {whyPoints.map((point, i) => (
            <motion.div
              key={point.title}
              variants={item}
              whileHover={{ y: -4 }}
              className="group glass-card rounded-2xl p-6 border-t-2 border-saffron-400 hover:shadow-saffron transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform group-hover:animate-bounce">
                {point.icon}
              </div>
              <h4 className="font-bold text-royal-900 text-lg mb-2">{point.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{point.desc}</p>
              <div className="text-xs font-semibold text-saffron-600 bg-saffron-50 px-3 py-1 rounded-full inline-block">
                {point.psychological}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Split section — Addressing specific needs */}
        <div className="grid lg:grid-cols-2 gap-12 my-20">
          {/* Rural & Middle-class students */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8 border-l-4 border-green-500 shadow-glass"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">🌾</div>
              <div>
                <h3 className="font-display font-bold text-2xl text-royal-900">
                  For Rural & Town Students
                </h3>
                <p className="text-saffron-600 text-sm">Village se dream dekh raha hai?</p>
              </div>
            </div>

            <ul className="space-y-4">
              {ruralConsiderations.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex gap-3 text-gray-700 text-sm"
                >
                  <span className="text-green-500 font-bold text-lg flex-shrink-0">✓</span>
                  {point}
                </motion.li>
              ))}
            </ul>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.1 }}
              className="text-green-700 font-accent text-sm italic mt-6 bg-green-50 p-4 rounded-xl"
            >
              "Tera background matter nahi karta. Tera effort hi matter karta. Aur hum har step pe hain."
            </motion.p>
          </motion.div>

          {/* Middle-class parents */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8 border-l-4 border-purple-500 shadow-glass"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">👨‍👩‍👧‍👦</div>
              <div>
                <h3 className="font-display font-bold text-2xl text-royal-900">
                  For Middle-Class Parents
                </h3>
                <p className="text-saffron-600 text-sm">Bacche ke future ke baare mein soch rahe ho?</p>
              </div>
            </div>

            <ul className="space-y-4">
              {middleClassNeeds.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex gap-3 text-gray-700 text-sm"
                >
                  <span className="text-purple-500 font-bold text-lg flex-shrink-0">★</span>
                  {point}
                </motion.li>
              ))}
            </ul>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.1 }}
              className="text-purple-700 font-accent text-sm italic mt-6 bg-purple-50 p-4 rounded-xl"
            >
              "Bacche ki future genuinely important hai hamko. Paise se zyada, progress dekh rahe hain hum."
            </motion.p>
          </motion.div>
        </div>

        {/* Comparison — Why Vidya Dham */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-20"
        >
          <h3 className="section-heading text-center mb-10">
            Hum Alag Kyun Hain?
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Regular Coaching Centers',
                points: [
                  { icon: '❌', text: 'High fees' },
                  { icon: '❌', text: 'Bulk teaching, no personal care' },
                  { icon: '❌', text: 'Limited doubt clearing' },
                  { icon: '❌', text: 'Business-focused' },
                  { icon: '❌', text: 'Pressure, stress culture' },
                ],
              },
              {
                title: 'Vidya Dham Mandir',
                points: [
                  { icon: '✅', text: '100% FREE education' },
                  { icon: '✅', text: 'Individual mentorship, personal care' },
                  { icon: '✅', text: 'Unlimited doubt sessions' },
                  { icon: '✅', text: 'Purpose-driven, mission-focused' },
                  { icon: '✅', text: 'Supportive, stress-free environment' },
                ],
              },
            ].map((comparison, i) => (
              <motion.div
                key={comparison.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.9 + i * 0.15 }}
                className={`rounded-2xl p-8 ${
                  i === 1
                    ? 'glass-card border-2 border-saffron-500 shadow-saffron'
                    : 'bg-gray-100'
                }`}
              >
                <h4 className={`font-bold text-xl mb-6 ${i === 1 ? 'text-saffron-600' : 'text-gray-700'}`}>
                  {comparison.title}
                </h4>
                <ul className="space-y-3">
                  {comparison.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3 items-center text-sm">
                      <span className="text-lg">{point.icon}</span>
                      <span className={i === 1 ? 'text-gray-700 font-medium' : 'text-gray-600'}>
                        {point.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
            Yahan genuinely students ka future important hai. <br />
            <span className="font-bold text-royal-800">
              Join kro, aur apna transformation dekho.
            </span>
          </p>
          <button className="btn-saffron text-lg px-8 py-4">
            Start Your Free Journey →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
