'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';

import Link from 'next/link';
import InfoSection from '@/components/InfoSection';

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        breadcrumb="About Us"
        image="/images/hero3.jpg"
      />
      <main className="bg-white text-gray-800">
        {/* ================= HERO + BREADCRUMB ================= */}
        {/* ================= INTRO ================= */}
          <InfoSection
            title="Empowering Innovation in the Middle East"
            paragraphs={[
              'MITworx is a leading technology innovation company with a proven track record of success. We established ourselves in the United Arab Emirates (UAE), where our team of experts delivered exceptional results.',
              'We’re bringing our expertise to Egypt, ready to revolutionize the technological landscape here.'
            ]}
            imageSrc="/images/hero2.jpg"
            buttons={[
              { text: 'Contact Us', link: '/contact' }
            ]}
          />
        {/* ================= MISSION & LEGACY ================= */}
        <section
          style={{ backgroundImage: `url('/images/background.png')` }}
          className="py-24 bg-cover bg-center bg-no-repeat"
        >
          {' '}
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Our Mission',
                text: 'At MITworx, we drive innovation and empower businesses with cutting-edge solutions. We leverage our deep understanding of technology to create customized strategies that propel our clients forward.'
              },
              {
                title: 'Our Legacy',
                text: 'We have a strong foundation built on successful projects in the ME.  Our team’s experience and proven ability to deliver results sets us apart. We are committed to replicating that success in Egypt and becoming a trusted partner for businesses looking to unlock their full potential.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
        {/* ================= SYNERGY ================= */}
        <section className="py-24 max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 text-blue-900"
          >
            Synergy for Success
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg max-w-4xl mx-auto text-gray-600 leading-relaxed"
          >
            <span className="text-black">Building the Future Together</span> ,
            At MITworx, we believe in building strong partnerships that fuel
            innovation and empower businesses across the Middle East. We’re
            proud to be a trusted service provider for leading technology
            companies. Our partnerships allow us to offer a comprehensive suite
            of cutting-edge solutions, perfectly tailored to our clients’ unique
            needs. We leverage our expertise to seamlessly integrate these
            best-in-class technologies, ensuring your business benefits from the
            collective power of industry leaders.
          </motion.p>
        </section>
        {/* ================= CTA ================= */}
        <section className="bg-blue-900 py-20 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Together We Innovate
          </motion.h2>
          <p className="max-w-2xl mx-auto text-gray-200">
            We believe the best solutions are built, not bought. That’s why we
            don’t just serve you – we collaborate with you. Working closely with
            our customers gives us invaluable insights into your needs and
            challenges.
          </p>
        </section>
      </main>
    </>
  );
}
