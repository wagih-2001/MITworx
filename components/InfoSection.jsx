'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function InfoSection({
  title,
  paragraphs = [],
  listItems = [], // مصفوفة العناصر للقائمة
  imageSrc,
  buttons = [] // مصفوفة الزرار [ { text: 'Button 1', link: '/path' }, ... ]
}) {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-900">{title}</h2>

        {/* Paragraphs */}
        {paragraphs.map((para, idx) => (
          <p key={idx} className="text-lg leading-relaxed text-gray-600 mt-4">
            {para}
          </p>
        ))}

        {/* List */}
        {listItems.length > 0 && (
          <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {/* Buttons */}
        {buttons.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4">
            {buttons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.link}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                {btn.text}
              </a>
            ))}
          </div>
        )}
      </motion.div>

      {/* IMAGE */}
      {imageSrc && (
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          src={imageSrc}
          alt={title}
          className="rounded-3xl shadow-2xl"
        />
      )}
    </section>
  );
}
