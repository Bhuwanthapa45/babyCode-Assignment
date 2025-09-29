'use client'
import { Skiper58, TextRoll } from '@/components/ui/skiper-ui/skiper58'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Herosection = () => {
  return (
    <div className="relative py-25 px-4 sm:px-6 lg:px-8 flex justify-center overflow-hidden min-h-[600px]">
      {/* Left Image - Hidden on mobile, aligned with girl image positioning */}
      {/* Left Image - Boy */}
      <div className="hidden lg:block absolute bottom-0 left-[20px] w-64 lg:w-[420px] xl:w-[480px] z-[100]">
        <Image
          src="/boy1.png"
          alt="Boy studying for English exams"
          width={400}
          height={600}
          className="object-contain object-bottom h-full"
          priority
        />
      </div>

      {/* Right Image - Large and flanking */}
      <div className="hidden sm:block absolute bottom-0 right-0 sm:w-48 md:w-64 lg:w-[420px] xl:w-[480px] z-[100]">
        <Image
          src="/girl1.png"
          alt="Girl studying for English exams"
          width={600}
          height={800}
          className="object-contain object-bottom h-full"
          priority
        />
      </div>

      {/* Card Container - Elevated above images */}
      <div className="bg-white/80 rounded-3xl shadow-2xl max-w-4xl w-full p-8 sm:p-12 text-center relative z-20 mx-8 sm:mx-12 md:mx-16 lg:mx-20">
        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3B4B] mb-6 leading-tight">
          Your Shortcut to English Exam Success with AI-Powered Practice
        </h1>

        {/* TextRoll section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <TextRoll
            className="text-2xl sm:text-3xl font-bold text-black"
            center
          >
            PTE
          </TextRoll>
          <TextRoll className="text-2xl sm:text-3xl font-bold text-black">
            IELTS
          </TextRoll>
          <TextRoll className="text-2xl sm:text-3xl font-bold text-black">
            TOEFL
          </TextRoll>
        </div>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Personalized mock tests, instant feedback, and real-time speaking
          practice to boost your band score faster.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#1E3B4B] hover:bg-balck text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <Link href={'/courses'}>Practice Mock Test</Link>
          </button>
          <button className="border-2 border-gray-300 hover:border-[#1E3B4B] text-[#1E3B4B] font-medium py-3 px-8 rounded-full transition duration-300 hover:bg-gray-50">
            <Link href={'/courses'}>Explore Courses</Link>
          </button>
        </div>
      </div>

      
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none z-10"></div>
    </div>
  )
}

export default Herosection
