'use client';
import { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-4 flex items-center justify-center
           bg-primary w-12 h-12 text-white p-3 rounded-full shadow-lg
            hover:bg-gray-800 transition-all duration-300"
          aria-label="Yukarı çık"
        >
          <IoIosArrowUp className='text-2xl ' />
        </button>
      )}
    </>
  );
}