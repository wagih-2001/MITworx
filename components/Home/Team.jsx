'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaShareAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const team = [
  {
    img: '/images/team/Mostafa-Zaki.png',
    name: 'Mostafa Zaki',
    job: 'CEO & Founder'
  },
  {
    img: '/images/team/team_2.jpg',
    name: 'HR Manager',
    job: 'Engineering'
  },
  {
    img: '/images/team/team_3.jpg',
    name: 'Robert Peter',
    job: 'CTO'
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="uppercase text-[#1447e6] font-bold text-lg tracking-wide text-center">
          Meet the Experts
        </h3>

        <h2 className="text-3xl font-bold mt-2 mb-14 text-center text-black">
          Our Dedicated Team Members
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 ">
          {team.map((item, i) => (
            <TeamCard key={i} data={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ data, index }) {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-0 overflow-hidden relative transition-shadow  border-r-4 border-b-4 border-[#1447e6]"
    >
      {/* Image */}
      <div className="relative h-100">
        <Image
          src={data.img}
          alt={data.name}
          fill
          className="object-cover rounded-t-xl"
        />

        <div className="absolute top-5 right-5 z-20">
          <button
            onClick={() => setShowIcons(!showIcons)}
            className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition"
          >
            <FaShareAlt size={16} />
          </button>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={showIcons ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute right-1 top-2 space-y-3"
            >
              {showIcons && (
                <>
                  <IconBtn icon={<FaFacebookF />} link="#" />
                  <IconBtn icon={<FaLinkedinIn />} link="#" />
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 text-center">
        <h3 className="text-xl text-[#1447e6] font-semibold">{data.name}</h3>
        <p className="text-black mt-1">{data.job}</p>
      </div>
    </motion.div>
  );
}

function IconBtn({ icon, link }) {
  return (
    <a
      href={link}
      className="w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition"
    >
      {icon}
    </a>
  );
}
