import Link from 'next/link';
import React from 'react'
import { FaFacebookF,FaInstagram,FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const TopHeader = () => {
  return (
    <section className='hidden md:flex px-40 justify-between items-center h-8 bg-black text-white'>
        <article className='flex items-center gap-4 justify-start'>
            <Link href={'/'} className='hover:text-primary'>
              <FaFacebookF className='text-xl' />
            </Link>
            <Link href={'/'} className='hover:text-primary'>
             <FaInstagram className='text-xl' />
            </Link>

        </article>
        <article className='flex items-center gap-8'>
        <div className='flex items-center gap-2 cursor-pointer'>
            <FaPhoneAlt />
            <span>444 444 44</span>
        </div>
        <div className='flex items-center gap-2 cursor-pointer'>
            <MdOutlineEmail className='text-xl'/>
            <span>info@turhanlar.com</span>
        </div>

        </article>

    </section>
  )
}

export default TopHeader