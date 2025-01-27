"use client";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

const SliderShell = () => {
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


  return (
    <div className=" relative -mt-5 ">
      {/* Slider görüntüsü */}
      <div className="w-full overflow-hidden">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          className="w-full h-[80vh] bg-cover bg-center transition duration-500"
        />
      </div>

      {/* Slide göstergesi */}
      <div className="absolute bottom-10  right-10 flex flex-col items-center space-y-2">
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
            className={`rounded-full overflow-hidden cursor-pointer transition-all duration-300 bg-cover bg-center ${
              index === currentIndex 
                ? "border-2 border-white w-20 h-20" 
                : "opacity-50 w-12 h-12 hover:opacity-75 border-black"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderShell;