import Link from 'next/link'
import React from 'react'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { LiaFaxSolid } from "react-icons/lia";
import Map from '@/app/components/Map';



const IletisimPage = () => {
  return (
    <main className='mt-20'>
       {/* top */}
       <article className='flex flex-col items-center justify-center py-10 mx-20 gap-4 border-b-[7px] border-double border-[#fdc133]'>
            <h1 className='text-3xl font-semibold '>İletişim</h1>
            <div className='flex items-center gap-2 text-gray-500'>
                <Link className='hover:underline' href={"/"}>Ana Sayfa</Link> 
                <span>  / İletişim</span>
            </div>

        </article>
        {/* middle */}
        <section className='w-full flex items-start justify-between flex-wrap gap-10 px-20 my-10'>
          <article className='flex items-start gap-4 w-96 '>
            <FaPhoneSquareAlt  className='text-primary text-2xl'/>
            <div className='flex flex-col items-start gap-3'>
              <p className='text-xl font-semibold'>Telefon</p>
              <p className='text-2xl text-gray-500 font-semibold'> 0555 555 55 55</p>
            </div>
          </article>

          <article className='flex items-start gap-4 w-96'>
            <HiOutlineMailOpen   className='text-primary text-2xl'/>
            <div className='flex flex-col items-start gap-3'>
              <p className='text-xl font-semibold'>E Mail</p>
              <p className='text-xl text-gray-500 font-semibold'> info@turhanlar.com.tr</p>
            </div>
          </article>

          <article className='flex items-start gap-4 w-96'>
            <FaLocationDot    className='text-primary text-2xl'/>
            <div className='flex flex-col items-start gap-3'>
              <p className='text-xl font-semibold'>Adres</p>
              <p className='text-xl text-gray-500 font-semibold'> Saray, Bingöl - Elazığ Yolu, 12000 Bingöl Merkez/Bingöl</p>
            </div>
          </article>

          <article className='flex items-start gap-4 w-96'>
            <LiaFaxSolid     className='text-primary text-2xl'/>
            <div className='flex flex-col items-start gap-3'>
              <p className='text-xl font-semibold'>Fax</p>
              <p className='text-xl text-gray-500 font-semibold'> 0426 545 22 22</p>
            </div>
          </article>

        </section>
        {/* bottom */}
        <section className='flex flex-col lg:flex-row lg:items-start items-center  justify-center gap-5 w-full mb-20 '>
          <article className='flex flex-col items-start gap-8 lg:w-[45%] w-[90%] p-10 bg-gray-100 rounded-lg '>
            <h2 className='text-2xl font-semibold'>Bize Ulaşın</h2>
            <Map/>

          </article>
          <article className='lg:w-[45%] w-[90%] p-10 bg-gray-100 rounded-lg'>
              <h2 className='text-2xl font-semibold my-5  '>Bize Yazın</h2>
              <form className='flex flex-col items-start gap-4 w-full'>
                  <div className='flex flex-col items-start gap-2 w-full'>
                      <label className='text-gray-500' htmlFor="name"> İsminiz(*)</label>
                      <input type="text" id='name' className='w-full p-2 text-black outline-none'  />
                  </div>

                  <div className='flex flex-col items-start gap-2 w-full'>
                      <label className='text-gray-500' htmlFor="email"> E Mail(*)</label>
                      <input type="text" id='email' className='w-full p-2 text-black outline-none'  />
                  </div>
                  <div className='flex flex-col items-start gap-2 w-full'>
                      <label className='text-gray-500' htmlFor="title"> Konu</label>
                      <input type="text" id='title' className='w-full p-2 text-black outline-none'  />
                  </div>
                  <div className='flex flex-col items-start gap-2 w-full'>
                      <label className='text-gray-500' htmlFor="message">Mesajınız</label>
                      <textarea type="text" id='message' rows={'5'} className='w-full p-2 text-black outline-none'  />
                  </div>


                  <button className='bg-primary py-2 px-8 text-white '>Gönder</button>

              </form>
          </article>

        </section>
    </main>
  )
}

export default IletisimPage