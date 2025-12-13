'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PageHero({
  title,
  subtitle = null, // تيكست إضافي تحت العنوان
  image,
  breadcrumb = null, // breadcrumb اختياري
  breadcrumbWidth = 'max-w-md',
  breadcrumbAlign = 'left'
}) {
  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className="relative py-28 bg-cover bg-center bg-no-repeat "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-white ">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-xl font-bold mt-10 "
        >
          {title}
        </motion.h1>

        {/* Subtitle / Additional Text */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg md:text-l text-gray-200 max-w-3xl"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`mt-4 text-sm text-gray-200 ${breadcrumbWidth} ${
              breadcrumbAlign === 'left'
                ? 'text-left'
                : breadcrumbAlign === 'center'
                ? 'text-center mx-auto'
                : 'text-right ml-auto'
            }`}
          >
            {typeof breadcrumb === 'string' ? (
              <div className="flex items-center gap-2">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <span>/</span>
                <span>{breadcrumb}</span>
              </div>
            ) : (
              breadcrumb
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
