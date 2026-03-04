import React from 'react'
import HeroSection from '@/components/home-page/HomeHero'
import ServiceSection from '@/components/home-page/ServiceSection'
import WorkingProcess from '@/components/home-page/WorkingProcess'
import Technologies from '@/components/home-page/Technologies'
import OurTeam from '@/components/home-page/OurTeam'
import AboutSection from '@/components/home-page/AboutSection'

export default function HomePage() {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <ServiceSection/>
      <WorkingProcess/>
      <Technologies/>
      <OurTeam/>
    </div>
  )
}
