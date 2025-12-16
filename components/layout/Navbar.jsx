'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Our Solutions',
      dropdown: [
        { name: 'Enterprise Content Management', href: '/solutions/ecm' },
        { name: 'Managed Print Services', href: '/solutions/mps' },
        { name: 'Intelligent Content Capture', href: '/solutions/capture' },
        { name: 'Educational Technology', href: '/solutions/educations' }
      ]
    },
    {
      name: 'Our Services',
      dropdown: [{ name: 'Business Consulting', href: '/services/consulting' }]
    },
    { name: 'Career', href: '/career' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50">
        {/* TOP BAR */}
        <div className="bg-[#02208b] text-white text-[10px] md:text-xs h-[40px] flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full flex justify-between">
            <span>Al Moltaqa Al Arabi District, Sheraton, Cairo</span>
            <span>CALL US: +201124368888</span>
          </div>
        </div>

        {/* NAV */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-6 h-[70px] flex justify-between items-center font-bold">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={150}
                height={150}
              />
            </Link>

            {/* DESKTOP */}
            <ul className="hidden md:flex items-center gap-6 text-[#02208b]">
              {menuItems.map((item, index) => (
                <li key={index} className="relative">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                        className="uppercase text-sm"
                      >
                        {item.name} ▾
                      </button>

                      {openDropdown === index && (
                        <div className="absolute top-full mt-4 w-72 bg-white rounded-lg shadow-xl">
                          {item.dropdown.map((drop, i) => (
                            <Link
                              key={i}
                              href={drop.href}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-6 py-3 hover:bg-gray-100"
                            >
                              {drop.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} className="uppercase text-sm">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* MOBILE ICON */}
            <button
              className="md:hidden text-[#02208b]"
              onClick={() => {
                setMobileOpen(true);
                setOpenDropdown(null);
              }}
            >
              <HiOutlineMenu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed top-0 right-0 h-screen w-[85%] bg-white z-50 pt-[110px] px-6">
          <button
            className="absolute top-5 right-5 text-[#02208b]"
            onClick={() => setMobileOpen(false)}
          >
            <HiOutlineX size={28} />
          </button>

          <div className="mb-10 flex justify-center">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="logo"
                width={140}
                height={140}
              />
            </Link>
          </div>

          <ul className="flex flex-col gap-6 text-[#02208b] font-bold text-lg">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.dropdown ? (
                  <>
                    <button
                      className="w-full text-left uppercase"
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                    >
                      {item.name} ▾
                    </button>

                    {openDropdown === index && (
                      <ul className="mt-3 ml-4 space-y-3 text-sm">
                        {item.dropdown.map((drop, i) => (
                          <li key={i}>
                            <Link
                              href={drop.href}
                              onClick={() => setMobileOpen(false)}
                            >
                              {drop.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="uppercase"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
