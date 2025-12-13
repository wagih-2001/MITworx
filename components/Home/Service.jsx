'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    img: '/images/services/ECM.png',
    title: 'Enterprise Content Management',
    link: '/solutions/ecm'
  },
  {
    img: '/images/services/Managed.jpg',
    title: 'Managed Print Services',
    link: '/solutions/mps'
  },
  {
    img: '/images/services/ECM.png',
    title: 'Business Consulting',
    link: '/services/consulting'
  },
  {
    img: '/images/services/business-workflow.jpg',
    title: 'Educational Technology',
    link: '/solutions/educations'
  },
  {
    img: '/images/services/Intelligent.jpg',
    title: 'Intelligent Content Capture',
    link: '/solutions/mps'
  },
  {
    img: '/images/services/ECM.png',
    title: 'Digital Marketing',
    link: '/solutions/mps'
  }
];

const itemAnim = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 }
};

export default function ServiceGrid() {
  return (
    <section className="relative py-24 w-full overflow-hidden">
      <img
        src="/images/background.png"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <h3 className="  mb-5 uppercase font-bold text-lg tracking-wide text-center">
          Our Services
        </h3>

        <p className="max-w-3xl mx-auto text-center text-lg mb-12 leading-relaxed">
          At MITworx, we empower businesses with the power of technology. Our
          passionate, experienced team leverages a proven track record of
          success to deliver customized solutions that perfectly align with your
          unique goals. We stay at the forefront of innovation to ensure you
          have access to the latest and most effective solutions, making us your
          trusted advisor on your journey towards success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              variants={itemAnim}
              className="block group"
            >
              <div
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl
                transition-shadow duration-300 border-r-4 border-b-4 border-black"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 sm:h-60 lg:h-64 object-contain transition-all
                             duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-semibold mt-4 text-center group-hover:text-blue-300 transition">
                {item.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
