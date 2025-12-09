'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhatsappButton() {
  return (
    <motion.a
      href="https://wa.me/01124368888"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Whatsapp Chat"
      className="fixed bottom-6 right-6 bg-white hover:bg-gray-100 text-[#1447e6] rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-50"
      animate={{
        y: [0, -20, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      whileHover={{ scale: 1.2 }}
    >
      <FaWhatsapp className="w-10 h-10" />
    </motion.a>
  );
}
