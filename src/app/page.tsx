import React from 'react'
import HeroSection from '@/components/home-page/HomeHero'
import ServiceSection from '@/components/home-page/ServiceSection'
import OurTeam from '@/components/home-page/OurTeam'

export default function HomePage() {
  return (
    <div>
      <HeroSection/>
      <ServiceSection/>
      <OurTeam/>
    </div>
  )
}
