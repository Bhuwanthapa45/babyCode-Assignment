'use client'
import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeBanner = () => {
  return (
    <div className="bg-[#1E3B4B] py-4">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="text-white font-semibold text-lg sm:text-xl tracking-wide"
      >
        <span className="mx-8">🇺🇸 Study in USA</span>
        <span className="mx-8">🇬🇧 Study in UK</span>
        <span className="mx-8">🇦🇺 Study in Australia</span>
        <span className="mx-8">🇨🇦 Study in Canada</span>
        <span className="mx-8"> IELTS & PTE Preparation</span>
        <span className="mx-8"> Boost Your Band Score</span>
      </Marquee>
    </div>
  )
}

export default MarqueeBanner
