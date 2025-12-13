'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function InfoSection({ header, image, content }) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {header && (
            <h2 className="text-4xl font-bold text-blue-700 leading-tight">
              {header}
            </h2>
          )}

          {/* Content */}
          <div className="text-gray-700 text-lg leading-relaxed space-y-4">
            {content}
          </div>
        </motion.div>

        {/* IMAGE */}
        {image && (
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            src={image}
            alt={header}
            className="w-full rounded-[28px] object-cover shadow-xl"
          />
        )}
      </div>
    </section>
  );
}
