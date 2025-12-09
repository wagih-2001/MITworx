'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

const stats = [
  { number: '20+', label: 'Years of Experience' },
  { number: '50+', label: 'Expert Team' },
  { number: '100+', label: 'Projects Completed' }
];

const AboutYou = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-3xl ">
          <div className="absolute inset-0  from-black/50 via-transparent to-transparent z-10"></div>
          <Image
            src="/images/about.png"
            alt="About MITWORX"
            width={500}
            height={350}
            className="object-cover"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-black font-semibold mb-2 uppercase tracking-wider">
            About Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
            <span className="text-[#1447e6]">We Are a Professional</span>
            <span>
              <br /> Technology Innovation & <br /> Business Consultaning
            </span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Empowering Innovation in the Middle East MITworx is a leading
            technology innovation company with a proven track record of success.
            We established ourselves in the United Arab Emirates (UAE), where
            our team of experts delivered exceptional results. We’re bringing
            our expertise to Egypt, ready to revolutionize the technological
            landscape here.
          </p>

          <div className="grid grid-cols-3 gap-6 my-8">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-md  rounded-xl py-6 text-center shadow-md hover:shadow-xl transition-shadow  border-r-4 border-b-4 border-[#1447e6]"
              >
                <h3 className="text-3xl font-bold text-gray-900">
                  {item.number}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#1447e6] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#8ba6ff] transition-colors"
          >
            Discover More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutYou;
