'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Single Testimonial Card
const TestimonialCard = ({ name, review, image, rating }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-between min-w-[280px] max-w-xs mx-4"
    >
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
        <div>
          <h3 className="text-[#1E3B4B] font-semibold">{name}</h3>
          <div className="flex text-yellow-400 mt-1">
            {Array.from({ length: 5 }).map((_, idx) => (
              <span key={idx}>{idx < rating ? '★' : '☆'}</span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-sm">{review}</p>
    </motion.div>
  );
};

// Carousel Container with Auto Scrolling
const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "Anjali Sharma",
      review: "This platform helped me improve my IELTS speaking score significantly. Highly recommend!",
      image: "/students/anjali.png",
      rating: 5,
    },
    {
      name: "Rohan Mehta",
      review: "The AI-powered mock tests are amazing. I could track my progress and see instant feedback.",
      image: "/students/rohan.png",
      rating: 4,
    },
    {
      name: "Sofia Patel",
      review: "Loved the personalized practice tests. My PTE score improved faster than I expected!",
      image: "/students/sofia.png",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      review: "The speaking practice sessions are realistic and extremely helpful for exam preparation.",
      image: "/students/vikram.png",
      rating: 4,
    }
  ];

  // Duplicate testimonials to make infinite loop effect
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8  relative">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3B4B]">
          What Our Students Say
        </h2>
        <p className="text-gray-600 mt-4 text-base sm:text-lg">
          Real experiences from learners who boosted their scores using our platform
        </p>
      </div>

      {/* Auto-scrolling Carousel */}
      <motion.div
        className="flex gap-4"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {repeatedTestimonials.map((t, idx) => (
          <TestimonialCard
            key={idx}
            name={t.name}
            review={t.review}
            image={t.image}
            rating={t.rating}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialsCarousel;