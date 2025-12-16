'use client';
import Link from 'next/link';
import Image from 'next/image';

import {
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import ScrollToTopButton from '../Home/ScrollToTopButton';

const Footer = () => {
  return (
    <>
      <ScrollToTopButton />

      <footer className="bg-black text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          {/*COMPANY INFO */}
          <div>
            <Link href="/" className="inline-block mb-4 ">
              <Image
                src="/images/logo-white.png"
                alt="MITworx logo"
                width={175}
                height={175}
                priority
              />
            </Link>
            <p className="text-gray-300 text-sm leading-6">
              Al Moltaqa Al Arabi District, Sheraton, Cairo Governorate, Egypt
            </p>

            <div className="mt-4 space-y-2 text-gray-300 text-sm">
              <p className="flex items-center gap-2">
                <FaPhoneAlt /> +201124368888
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope /> info@MITworx.com
              </p>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 mt-4 text-xl">
              <a href="#" className="hover:text-blue-400">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-blue-300">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-white">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/*OUR SOLUTIONS */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Solutions</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/solutions/ecm" className="hover:text-white">
                  Enterprise Content Management
                </Link>
              </li>
              <li>
                <Link href="/solutions/mps" className="hover:text-white">
                  Managed Print Services
                </Link>
              </li>
              <li>
                <Link href="/solutions/capture" className="hover:text-white">
                  Intelligent Content Capture
                </Link>
              </li>
              <li>
                <Link href="/solutions/education" className="hover:text-white">
                  Educational Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* OUR SERVICES */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services/consulting" className="hover:text-white">
                  Business Consulting
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} MITWORX. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
