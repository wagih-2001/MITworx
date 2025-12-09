'use client';
import React, { useState, useEffect } from 'react';

const slides = [
  {
    img: '/images/hero3.jpg',
    title: 'Enterprise Technology Solutions',
    desc: 'The digital landscape is evolving at an unprecedented pace, demanding innovative enterprise technology solutions. \n At MITworx, we empower businesses to thrive in this dynamic environment'
  },
  {
    img: '/images/hero4.jpg',
    title: 'Enterprise Technology Solutions',
    desc: 'Business happens everywhere – office, home, on the road. We secure and digitize your business, \n ensuring it flows effortlessly between decision-makers – anywhere, anytime, on any device.'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="whitespace-pre-line relative w-full h-screen flex items-center justify-center overflow-hidden">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.img}
          className={`
            absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700
            ${current === index ? 'opacity-100' : 'opacity-0'}
          `}
        />
      ))}

      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      <div className="relative z-20 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {slides[current].title}
        </h1>

        <p className="text-lg md:text-xl text-gray-200">
          {slides[current].desc}
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a className=" cursor-pointer px-6 py-3 bg-blue-700 text-white rounded-md font-semibold hover:bg-blue-800 transition">
            Work With US
          </a>
          <a className="cursor-pointer px-6 py-3 bg-white text-gray-900 rounded-md font-semibold hover:bg-gray-100 transition">
            Learn More
          </a>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-3 rounded-full text-2xl"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-3 rounded-full text-2xl"
      >
        ❯
      </button>
    </div>
  );
}
