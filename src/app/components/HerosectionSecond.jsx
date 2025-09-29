import React from 'react'
import { CustomHoverExpand } from './CustomHoverExpand'
import TestimonialsCarousel from './TestimonialCard'

const HerosectionSecond = () => {
  return (
    <section className="relative w-full py-16 px-6 sm:px-10 lg:px-20 ">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E3B4B] leading-snug mb-6">
          Know your estimated band score instantly{' '}
          <br className="hidden sm:block" />
          and track your progress with ease
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-10">
          Our AI-powered tools give you real-time feedback on your performance
          so you always know where you stand.
        </p>

        {/* Feature / Custom Component */}
        <div className="flex justify-center">
          <CustomHoverExpand />
        </div>
      </div>
      {/* Testimonials Section */}
      <TestimonialsCarousel />
    </section>
  )
}

export default HerosectionSecond
