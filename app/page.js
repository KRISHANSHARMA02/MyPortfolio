"use clien"
import React from 'react';
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import Sociallinks from '@/components/Sociallinks';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Uparrow from '@/components/Uparrow';
import Footer from '@/components/Footer';


const page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Sociallinks />
      <About />
      <Projects />
      <Skills />
      <Contact />
      < Uparrow />
      <Footer />
    </div>
  )
}

export default page


