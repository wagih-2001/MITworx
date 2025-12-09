'use client';

import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useRef } from 'react';

function Testimonials() {
  const swiperRef = useRef(null);

  const rawTestimonials = [
    {
      text: 'Stuck in the digital past, C La Vie Travel needed a refresh. MITworx’s business consultation services were a game-changer. Their insights transformed our online presence, boosting traffic and conversions. Now, booking travel with us is a breeze',
      name: 'Ehab Ahmed',
      company: 'C La Vie Travel, Egypt',
      position: 'CEO & Founder'
      // image: '/avatar1.jpg'
    },
    {
      text: 'MITworx delivers exceptional enterprise technology solutions. Their expertise, reliability, and innovative approach have been invaluable to our business. Highly recommended',
      name: 'Ehab Soka',
      company: 'Sascom Development LLC, Egypt',
      position: 'Managing Director'
      // image: '/avatar2.jpg'
    },
    {
      text: 'MITworx’s business development expertise helped us chart a clear path for growth. Their technology recommendations were spot-on, and their seamless implementation has boosted our productivity. Thanks to them, Pharma Pack is operating at peak efficiency!',
      name: 'Hany Alsefy',
      company: 'Pharma Pack, Egypt',
      position: 'CEO & Founder'
      // image: '/avatar3.jpg'
    }
  ];

  const testimonials = [
    ...rawTestimonials,
    ...rawTestimonials,
    ...rawTestimonials
  ];

  return (
    <section className="relative py-24 w-full overflow-hidden">
      <img
        src="/images/background.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <h3 className="uppercase font-bold text-lg tracking-wide text-center">
          testimonials
        </h3>

        <h2 className="text-3xl font-bold mt-2 mb-14 text-center">
          Voices of Satisfaction: Hear What <br /> Our Clients Have to Say!
        </h2>

        <div className="flex justify-center gap-6 mb-10">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-12 h-12 flex items-center justify-center rounded-full
            bg-[#02208b] text-white shadow cursor-pointer text-2xl
            hover:bg-[#062fae] transition"
          >
            ❮
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-12 h-12 flex items-center justify-center rounded-full
            bg-[#02208b] text-white shadow cursor-pointer text-2xl
            hover:bg-[#062fae] transition"
          >
            ❯
          </button>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
          onSwiper={swiper => (swiperRef.current = swiper)}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 }
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i} className="h-full">
              <div className="bg-white rounded-xl shadow-lg p-8 relative h-full flex flex-col min-h-[300px]">
                {/* QUOTE ICON */}
                <div className="absolute top-6 right-6 text-[#1447e6] text-4xl font-bold">
                  ❝
                </div>

                <div className="flex items-center gap-4 mb-6">
                  {/* <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src="/images/test-avatar.jpg"
                      className="w-full h-full object-cover"
                      alt="avatar"
                    />
                  </div> */}

                  <div>
                    <h4 className="font-bold text-lg text-gray-900">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500">{item.position}</p>

                    <div className="flex text-[#1447e6] text-lg mt-1">
                      ★★★★★
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed flex-grow">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
