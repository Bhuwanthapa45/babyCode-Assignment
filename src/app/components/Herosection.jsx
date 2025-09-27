'use client';
import { Skiper58, TextRoll } from '@/components/ui/skiper-ui/skiper58';
import React from 'react';

const Herosection = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 flex justify-center">
      {/* Card Container */}
      <div className="bg-[#FAFDEF] rounded-3xl shadow-xl max-w-4xl w-full p-8 sm:p-12 text-center">
        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3B4B] mb-6">
          Your Shortcut to English Exam Success with AI-Powered Practice
        </h1>

        {/* TextRoll section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <TextRoll className="text-2xl sm:text-3xl font-bold text-black" center>
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
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Personalized mock tests, instant feedback, and real-time speaking practice to boost your band score faster.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#1E3B4B] hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-md">
            Start Free Practice
          </button>
          <button className="border border-gray-300 hover:border-gray-400 text-[#1E3B4B] font-medium py-3 px-8 rounded-full transition duration-300">
            Explore Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;