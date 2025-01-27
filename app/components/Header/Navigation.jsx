"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from 'next/navigation';
import { IoIosMenu } from "react-icons/io";
import { IoHome } from "react-icons/io5";

const Navigation = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 32) { // 32px = top-8
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menu = [
    {
      text:"Ana Sayfa",
      href:"/"
    },
    {
      text:"Kurumsal",
      sub:[
            {
            text:"Turhanlar Petrol",
            href:"/turhanlar-petrol"
            },
            {
              text:"KVKK",
              href:"/kvkk"
            },
        ]
    },
    {
      text:"Shell Petrol",
      href:"/shell-petrol"
    },
    {
      text:"İletişim",
      href:"/iletişim"
    }
]

  return (
    <article className={`bg-[#fdc133] text-white fixed ${isScrolled ? 'top-0' : 'md:top-8 top-0'} left-0 right-0 z-50 w-full`}>
      <div className="container px-10 md:px-20 py-2 flex items-center md:justify-around justify-between gap-20">
        {/* Logo */}
        <Link
          href={"/"}
          className="flex flex-col items-center text-2xl font-semibold py-1"
        >
          <p className="text-gray-600">Turhanlar</p>
          <p className="-mt-3">Petrol</p>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-5">
          {menu.map((item, index) => {
            if (item.sub) {
              return (
                <div key={index} className="relative group">
                  <p className={`h-full border-[#fdc133] cursor-pointer border-2 p-2 hover:border-2 text-xl
                    ${pathname === item.href ? "border-white" : ""}
                    hover:border-white transition-all font-semibold`}>
                    {item.text}
                  </p>
                  <div className="absolute hidden group-hover:flex flex-col w-44 z-50 bg-white shadow-lg">
                    {item.sub.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="px-4 py-2 border-b border-t 
                        hover:bg-primary_bold text-black font-semibold hover:text-[#fdc133] transition-all"
                      >
                        {subItem.text}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={index}
                className={`h-full border-[#fdc133] border-2 p-2 hover:border-2 
                  ${pathname === item.href ? "border-white" : ""}
                  hover:border-white transition-all font-semibold`}
                href={item.href}
              >
                <p className="text-xl">{item.text}</p>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setIsShowMenu((prev) => !prev)}
          className="md:hidden text-2xl cursor-pointer"
        >
          <IoIosMenu />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isShowMenu && (
        <div className="md:hidden shadow-lg bg-primary_bold text-white">
          {menu.map((item, index) => {
            if (item.sub) {
              return (
                <div key={index}>
                  <p
                    className="block px-4 py-2 border-b cursor-pointer"
                    onClick={() => setIsSubMenuOpen((prev) => !prev)}
                  >
                    {item.text}
                  </p>
                  {isSubMenuOpen && (
                    <div>
                      {item.sub.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          onClick={() => setIsShowMenu(false)}
                          href={subItem.href}
                          className="block py-2 border-b pl-12 bg-primary"
                        >
                          {subItem.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={index}
                onClick={() => setIsShowMenu(false)}
                href={item.href}
                className="block px-4 py-2 border-b"
              >
                {item.text}
              </Link>
            );
          })}
        </div>
      )}
    </article>
  );
};

export default Navigation;