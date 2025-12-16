import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to Top"
      className="
        bg-[#1447e6]
        text-white
        w-14
        h-14
        mt-10
        rounded-full
        border-2
        border-white
        flex
        items-center
        justify-center
        shadow-lg
        hover:bg-[#0f3db8]
        transition
        mx-auto
        block
        z-50
      "
      style={{ cursor: 'pointer' }}
    >
      <FaArrowUp className="w-6 h-6" />
    </button>
  );
}
