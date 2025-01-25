"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from 'next/navigation';
import { IoIosMenu } from "react-icons/io";
import { IoHome } from "react-icons/io5";

const Navigation = () => {
  const [isKurumsalOpen, setIsKurumsalOpen] = useState(false);
  const [isFaaliyetOpen, setIsFaaliyetOpen] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const pathname = usePathname();
  return (
    <article className="bg-[#fdc133] text-white">
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

        <Link
            className={`h-full border-[#fdc133] border-2  p-2 hover:border-2 
              ${pathname==="/" ? "border-white  ":""}
              hover:border-white transition-all font-semibold`}
            href={"/"}
          >
            <p className="text-xl">Ana Sayfa</p>
          </Link>
        
          {/* Dropdown Menu */}
          <div className="relative group">
            <p className={`h-full border-[#fdc133] cursor-pointer border-2  p-2 hover:border-2 
              ${pathname==="/kurumsal" ? "border-white  ":""}
              hover:border-white transition-all font-semibold`}>
              Kurumsal
            </p>
            <div className="absolute hidden group-hover:flex flex-col w-44  z-50 bg-white shadow-lg">
              <Link
                href="/hakkimizda"
                className="px-4 py-2 border-b border-t 
                hover:bg-primary_bold text-black font-semibold hover:text-[#fdc133] transition-all"
              >
                Turhanlar Petrol
              </Link>
              <Link
                href="/kvkk"
               className="px-4 py-2 border-b border-t 
                hover:bg-primary_bold text-black font-semibold hover:text-[#fdc133] transition-all"
              >
                KVKK
              </Link>
            </div>
          </div>
          <Link
            className={`h-full border-[#fdc133] border-2  p-2 hover:border-2 
              ${pathname==="/grup-sirketlerimiz" ? "border-white  ":""}
              hover:border-white transition-all font-semibold`}
            href={"/grup-sirketlerimiz"}
          >
            <p>Grup Şirketlerimiz</p>
          </Link>

          <Link
            className={`h-full border-[#fdc133] border-2  p-2 hover:border-2 
              ${pathname==="/shell-petrol" ? "border-white  ":""}
              hover:border-white transition-all font-semibold`}
            href={"/shell-petrol"}
          >
            <p className="text-xl">Shell Petrol</p>
          </Link>

          <Link
           className={`h-full border-[#fdc133] border-2  p-2 hover:border-2 
            ${pathname==="/iletisim" ? "border-white  ":""}
            hover:border-white transition-all font-semibold`}
            href={"/iletisim"}
          >
            <p>İletişim</p>
          </Link>
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
        <div className="md:hidden  shadow-lg bg-primary_bold text-white ">
          <Link onClick={()=>setIsShowMenu(false)} href={"/"} className="block px-4 py-2 border-b">
            <IoHome /> Anasayfa
          </Link>
          <div>
            <p
              className="block px-4 py-2 border-b cursor-pointer"
              onClick={() => setIsKurumsalOpen((prev) => !prev)}
            >
              Kurumsal
            </p>
            {isKurumsalOpen && (
              <div>
                <Link onClick={()=>setIsShowMenu(false)}
                  href="/hakkimizda"
                  className="block  py-2 border-b pl-12 bg-primary"
                >
                  Hakkımızda
                </Link>
                <Link onClick={()=>setIsShowMenu(false)}
                  href="/misyon-vizyon"
                  className="block pl-12 py-2 border-b bg-primary"
                >
                  Misyon ve Vizyon
                </Link>
              </div>
            )}
          </div>
          <Link onClick={()=>setIsShowMenu(false)}
            href={"/grup-sirketlerimiz"}
            className="block px-4 py-2 border-b"
          >
            Grup Şirketlerimiz
          </Link>
          <div>
            <p
              className="block px-4 py-2 border-b cursor-pointer"
              onClick={() => setIsFaaliyetOpen((prev) => !prev)}
            >
              Faaliyet Alanlarımız
            </p>
            {isFaaliyetOpen && (
              <div>
                <Link onClick={()=>setIsShowMenu(false)}
                  href="/opet-otobil"
                  className="block pl-12 bg-primary py-2 border-b"
                >
                  OPET Otobil
                </Link>
                <Link  onClick={()=>setIsShowMenu(false)}
                  href="/opet-yakit-kart"
                  className="block pl-12 bg-primary py-2 border-b"
                >
                  Opet Yakıt Kart
                </Link>
                <Link onClick={()=>setIsShowMenu(false)}
                  href="/opet-otofilo"
                  className="block pl-12 py-2 bg-primary border-b"
                >
                  Opet Otofilo
                </Link>
                <Link onClick={()=>setIsShowMenu(false)}
                  href="/toptan-akaryakit"
                  className="block pl-12 py-2 bg-primary border-b"
                >
                  Toptan Akaryakıt
                </Link>
              </div>
            )}
          </div>
          <Link onClick={()=>setIsShowMenu(false)} href={"/iletisim"} className="block px-4 py-2 border-b">
            İletişim
          </Link>
        </div>
      )}
    </article>
  );
};

export default Navigation;