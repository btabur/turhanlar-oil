import React from 'react'
import { FaFacebookF,FaInstagram  } from "react-icons/fa";

const TopFooter = () => {
  return (
    <article className='w-full flex justify-between flex-col md:flex-row gap-5 items-center px-20 bg-[#535353] pb-10'>
        <div className='relative md:-mt-10'>
            <div className='absolute inset-0 bg-[#363435] transform -skew-x-[30deg] h-12 '></div>
            <span className='relative z-10 top-0 left-0 -translate-x-[50] -translate-y-[50] mt-3 px-8 text-white text-2xl font-semibold '>Turhanlar</span>
        </div>
        <div className='flex items-center gap-5 mt-5 '>
            <p className='text-white'>Sosyal Medyada Bizi Takip Edin...</p>

            <div className='flex items-center gap-2 '>
            <div className='flex items-center justify-center p-3 bg-[#363435] cursor-pointer group '>
                   <FaFacebookF className='text-3xl text-white group-hover:text-primary' />
                </div>
                <div className='flex items-center justify-center p-3 bg-[#363435] cursor-pointer group '>
                   <FaInstagram className='text-3xl text-white group-hover:text-primary' />
                </div>

            </div>
        </div>
       </article>
  )
}

export default TopFooter