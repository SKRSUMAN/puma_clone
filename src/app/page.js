import Block1 from '@/content/home/Block1'
import Block2 from '@/content/home/Block2'
import HeroSection from '@/content/home/HeroSection'
import React from 'react'
// import "./globals.css";

const page = () => {
  return (
    <div className=''>
      <HeroSection/>
      <Block1/>
      <Block2/>
    </div>
  )
}

export default page