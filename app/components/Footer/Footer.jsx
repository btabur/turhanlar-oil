import React from 'react'
import TopFooter from './TopFooter'
import MiddleFooter from './MiddleFooter'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <section className='w-full flex flex-col'>
        {/* top */}
        <TopFooter/>
        <MiddleFooter/>
        {/* bottom */}
        <article className='flex flex-row  items-center justify-between px-20 border-t py-2 bg-[#1a1c20]'>
            <p className='text-gray-400'>Copyright © 2025 </p>
            <Link href={"https://www.instagram.com/codevionn/"} target="_blank" rel="noopener noreferrer">
                <Image 
                alt='Instagram'
                src={"/logo.jpg"}
                width={1000}
                height={1000}
                className='w-12 h-12 object-contain rounded-lg'/>
            </Link>

        </article>
      
    </section>
  )
}

export default Footer