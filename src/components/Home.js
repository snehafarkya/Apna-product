import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Opensource from './Opensource';
import Team from './Team';
import Contact from './Contact';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Opensource/>
      <Team />
      <Contact />
    </div>
  )
}
