'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const slides = [
  {
    img: '/images/hero1.jpg',
    title: 'Industry-Leading Experts',
    text: 'We guide businesses towards success. Our passionate tech experts craft cutting-edge solutions, while our experienced consultants unlock your full potential through customized strategies. Together, we navigate change and empower you to thrive in today’s dynamic landscape.'
  },
  {
    img: '/images/hero2.jpg',
    title: 'A Legacy of Success',
    text: 'We’re not just about innovation, we’re about results. Our proven track record speaks for itself – we have a history of delivering successful projects and exceeding client expectations.'
  },
  {
    img: '/images/hero3.jpg',
    title: 'Tailored for Your Success',
    text: 'We believe in a one-size-fits-one approach. We take the time to understand your unique needs and develop customized solutions that perfectly align with your business goals.'
  },
  {
    img: '/images/hero4.jpg',
    title: 'Solutions for Tomorrow’s Needs',
    text: 'We’re obsessed with progress. Our dedication to innovation ensures you have access to the latest and most effective solutions, keeping your business at the forefront of your industry.'
  },
  {
    img: '/images/hero5.jpg',
    title: 'Building Long-Term Partnerships',
    text: 'We’re more than just a service provider – we’re your trusted partner. We invest in understanding your long-term goals and work alongside you to achieve them.'
  },
  {
    img: '/images/hero6.jpg',
    title: 'Your Satisfaction is Our Priority',
    text: 'We put our clients at the heart of everything we do. Our success is measured by your satisfaction.'
  }
];

export default function WhyChooseUs() {
  const swiperRef = useRef(null);

  return (
    <section className="py-20 bg-white text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="uppercase text-[#1447e6] font-bold text-lg tracking-wide text-center">
          Why choose us
        </h3>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-black">At MITworx</h2>

          <div className="flex gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 flex items-center justify-center rounded-full
              bg-[#02208b] text-white shadow text-2xl hover:bg-[#062fae] transition"
            >
              ❮
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 flex items-center justify-center rounded-full
              bg-[#02208b] text-white shadow text-2xl hover:bg-[#062fae] transition"
            >
              ❯
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          slidesPerView={1}
          spaceBetween={40}
          onSwiper={swiper => (swiperRef.current = swiper)}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {slides.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="bg-white text-black rounded-xl shadow-lg border border-gray-300
                hover:shadow-2xl transition-shadow h-[520px] flex flex-col"
              >
                <div className="w-full h-80 relative shrink-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="100%"
                    className="object-cover rounded-t-xl"
                  />
                </div>

                <div className="p-5 flex flex-col h-full">
                  <h3 className="font-bold text-xl text-[#1447e6] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm overflow-y-auto pr-1">
                    {item.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
