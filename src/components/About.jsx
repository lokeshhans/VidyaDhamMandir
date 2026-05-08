import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import aboutImg from '../assets/about-students.webp'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: 'easeOut',
    },
  }),
}

const values = [
  {
    icon: '🎯',
    title: 'Mission-Driven',
    desc: 'Profit nahi, purpose hai hamara.',
  },
  {
    icon: '❤️',
    title: 'Students First',
    desc: 'Har student ka future hamari zimmedari hai.',
  },
  {
    icon: '🌱',
    title: 'Free Forever',
    desc: 'Paisa nahi, padhai maangti hai mehnat.',
  },
  {
    icon: '🤝',
    title: 'Community',
    desc: 'Milke seekhein, milke badein.',
  },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
  })

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-[#faf7f2] py-16 sm:py-20 lg:py-28 px-4 sm:px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* SECTION TOP */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-orange-500 uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-3">
            Hamari Kahani
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight max-w-4xl mx-auto">
            Ek Mandir Jo Sirf{' '}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Vidya Ko Pooja
            </span>{' '}
            Karta Hai
          </h2>

          <div className="flex items-center justify-center mt-5">
            <div className="w-14 h-[2px] bg-orange-400" />
            <span className="mx-3 text-orange-500 text-lg">🕉</span>
            <div className="w-14 h-[2px] bg-orange-400" />
          </div>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* IMAGE SIDE */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="relative order-2 lg:order-1"
          >
            {/* Main Image */}
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="Vidya Dham Students"
                className="w-full h-[280px] sm:h-[420px] lg:h-[560px] object-cover"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-[#0f172a]/10 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 backdrop-blur-xl bg-white/90 border border-white/40 rounded-2xl px-5 py-4 shadow-xl max-w-[260px]"
            >
              <p className="text-[#0f172a] text-sm leading-relaxed font-medium">
                “Yahan sirf subjects nahi, students ka confidence bhi build hota
                hai.”
              </p>

              <div className="mt-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                  PS
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#0f172a]">
                    Prashant Singh
                  </p>

                  <p className="text-xs text-orange-500">
                    Founder, Vidya Dham
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="order-1 lg:order-2"
          >
            {/* Premium Quote Box */}
            <div className="relative overflow-hidden bg-[#0f172a] rounded-[28px] p-6 sm:p-8 text-white shadow-2xl mb-8">
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />

              <span className="text-orange-400 text-6xl leading-none">
                "
              </span>

              <p className="text-blue-100 text-base sm:text-lg leading-relaxed -mt-4 relative z-10">
                VIDYA DHAM MANDIR ka mission sirf padhai tak limited nahi hai.
                Yahan har student ko confidence, guidance aur ek better future
                dene par equally focus kiya jata hai.
              </p>
            </div>

            {/* Content */}
            <div className="space-y-5">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                2016 mein jab Prashant Singh ne Palwal ke chhote se kamre mein
                padhaana shuru kiya tha, tab sirf ek sapna tha — ki koi bhi
                student paison ki wajah se padhai se door na rahe.
              </p>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Aaj Vidya Dham Mandir ek movement ban chuka hai — jahan gaon aur
                sheher ke hundreds of students free mein NEET preparation,
                NCERT foundation aur life guidance paate hain.
              </p>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="text-[#0f172a] italic leading-relaxed text-sm sm:text-base font-medium">
                  "Hum maante hain ki ek educated student sirf ek family nahi,
                  ek poore samaj ko badalta hai."
                </p>
              </div>
            </div>

            {/* VALUE CARDS */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  custom={3 + i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'show' : 'hidden'}
                  whileHover={{ y: -4 }}
                  className="backdrop-blur-xl bg-white/70 border border-white/60 rounded-2xl p-4 sm:p-5 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <span className="text-3xl block mb-3">{v.icon}</span>

                  <h4 className="font-semibold text-[#0f172a] text-sm sm:text-base mb-1">
                    {v.title}
                  </h4>

                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* STATS */}
            <div className="mt-8 bg-[#0f172a] rounded-3xl px-4 sm:px-6 py-5 grid grid-cols-3 gap-3 text-center shadow-2xl">
              {[
                { num: '500+', label: 'Students' },
                { num: '8+', label: 'Years' },
                { num: '100%', label: 'Free' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-orange-400 text-2xl sm:text-3xl font-bold">
                    {s.num}
                  </p>

                  <p className="text-blue-200 text-xs sm:text-sm mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="mt-6 bg-orange-50 border border-orange-200 rounded-2xl p-5 shadow-sm">
              <p
                className="text-orange-900 text-sm sm:text-base italic leading-relaxed"
                style={{ fontFamily: "'Lora', serif" }}
              >
                "Vidya Dham mein aane wale har student ke liye ek hi message hai
                — <strong>tu agar mehnat karega, hum poori zindagi saath denge.</strong>"
              </p>

              <p className="text-orange-500 text-xs mt-3 text-right">
                — Prashant Sir
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 