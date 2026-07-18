import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Courses from './Courses'
import MentorSection from '../../components/Mentor'
import PaymentMethods from '../../components/PaymentMethods'


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <MentorSection />
      <PaymentMethods />
    </>
  )
}

export default Home