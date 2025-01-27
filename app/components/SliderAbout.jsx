"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const SliderAbout = () => {
  const slides = [
    {
      image: "/slider-about-1.jpg",
    },
    {
      image: "/slider-about-2.jpg",
    },
    {
        image: "/slider-about-3.jpg",
    },
    {
        image: "/slider-about-4.jpg",
    },
    {
        image: "/slider-about-5.jpg",
    },
    {
        image: "/slider-about-6.jpg",
    }
  ]; // Slider'da gösterilecek görsellerin yolları

  const [currentIndex, setCurrentIndex] = useState(0);

  // Otomatik geçiş için useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // 5 saniyede bir kaydır

    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  return (
    <div className=" relative md:mt-0 mt-5 ">
      {/* Slider görüntüsü */}
      <div className="w-full overflow-hidden">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex}`}
          className=" w-full h-96 object-cover  transition duration-500"
        />
       
      </div>

      {/* Sol ok */}
      <button
        className="absolute bottom-0 right-20 transform -translate-y-1/2 bg-white w-8 h-8 flex items-center justify-center 
        text-black text-xl p-2 rounded-full shadow-lg hover:bg-gray-100"
        onClick={prevSlide}
      >
        <FaArrowLeft />
      </button>

      {/* Sağ ok */}
      <button
        className="absolute bottom-0 right-4 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center 
        text-black text-xl
         bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        onClick={nextSlide}
      >
        <FaArrowRight />
      </button>

      {/* Slide göstergesi */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SliderAbout;