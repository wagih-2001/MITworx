'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Our Solutions',
      dropdown: [
        { name: 'Enterprise Content Management', href: '/solutions/ecm' },
        { name: 'Managed Print Services', href: '/solutions/mps' },
        { name: 'Intelligent Content Capture', href: '/solutions/capture' },
        { name: 'Educational Technology', href: '/solutions/education' }
      ]
    },
    {
      name: 'Our Services',
      dropdown: [
        { name: 'Business Consulting', href: '/services/consulting' },
        { name: 'Digital Marketing', href: '/marketing' }
      ]
    },
    { name: 'Career', href: '/career' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const toggleDropdown = index => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-primary'
      }`}
    >
      <div className="bg-[#02208b] text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div>
            Al Moltaqa Al Arabi District, Sheraton, Cairo Governorate, Egypt
          </div>
          <div className="flex items-center gap-4">CALL US: +201124368888</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-[70px] flex justify-between items-center">
        {/* LOGO */}
        <Link
          href="/"
          className="text-white font-bold text-2xl tracking-wide hover:text-[#8ba6ff]"
        >
          MITworx
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-6 text-white font-medium">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              {item.dropdown ? (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1 uppercase text-sm tracking-wider"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.name}
                    <span
                      className={`transition-transform duration-300 ${
                        openDropdown === index ? 'rotate-180' : ''
                      }`}
                    >
                      ▾
                    </span>
                  </motion.button>

                  {/* DROPDOWN */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      openDropdown === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.3 }}
                    className={`absolute left-0 top-full mt-4 w-72 bg-white text-black rounded-lg shadow-xl overflow-hidden ${
                      openDropdown === index
                        ? 'pointer-events-auto'
                        : 'pointer-events-none'
                    }`}
                  >
                    {item.dropdown.map((dropItem, i) => (
                      <Link
                        key={i}
                        href={dropItem.href}
                        className="block px-6 py-3 hover:bg-gray-100 transition"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </motion.div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="uppercase text-sm tracking-wider hover:text-[#8ba6ff] transition"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* MOBILE ICON */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <HiOutlineX size={28} color="white" />
            ) : (
              <HiOutlineMenu size={28} color="white" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-[#002f47] text-white transform transition-transform duration-500 z-50 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="flex justify-between w-full text-left py-2 uppercase tracking-wider text-sm"
                  >
                    {item.name}
                    <span
                      className={`transition-transform duration-300 ${
                        openDropdown === index ? 'rotate-180' : ''
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  <div
                    className={`pl-4 overflow-hidden transition-all duration-500 ${
                      openDropdown === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    {item.dropdown.map((dropItem, i) => (
                      <Link
                        key={i}
                        href={dropItem.href}
                        className="block py-2 text-sm hover:text-cyan-400"
                        onClick={() => setMobileOpen(false)}
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block py-2 uppercase tracking-wider text-sm hover:text-cyan-400"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
