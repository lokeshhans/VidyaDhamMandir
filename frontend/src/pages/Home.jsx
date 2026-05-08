import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Impact from '../components/Impact'
import Courses from '../components/Courses'
import WhyChooseUs from '../components/WhyChooseUs'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Admission from '../components/Admission'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import DeveloperSection from '../components/DeveloperSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Impact />
      <Courses />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Admission />
      <Contact />
      <DeveloperSection/>
      <Footer />
    </main>
  )
}
