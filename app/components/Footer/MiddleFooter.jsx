import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const MiddleFooter = () => {
  return (
    <article className='grid grid-cols-1 lg:grid-cols-3 items-start justify-start gap-5 bg-[#1a1c20] px-20 py-5 '>
        {/* left */}
        <div className='flex flex-col gap-4 '>
            <h2 className='text-white font-semibold text-2xl'>Turhanlar Petrol</h2>
            <p className='text-gray-400'>Karaman’da sektörün öncülerinden olan Çavpet, inşaat ve akaryakıt sektöründe kaliteli hizmet anlayışıyla faaliyetlerine devam ediyor.</p>
        </div>
        {/* middle */}
        <div className='flex flex-col gap-4 w-[80%]'>
            <h2 className='text-xl text-white font-semibold'> Turhanlar Menu</h2>
            <div className='flex items-center gap-2 border-b py-3 cursor-pointer'>
                <div className='flex items-center justify-center p-1 bg-[#2a2c30] '>
                    <IoIosArrowForward className='text-black text-xl' />
                </div>
                <span className='text-gray-400'>Turhanlar Petrol</span>

            </div>
            <div className='flex items-center gap-2 border-b py-3 cursor-pointer'>
                <div className='flex items-center justify-center p-1 bg-[#2a2c30] '>
                    <IoIosArrowForward className='text-black text-xl' />
                </div>
                <span className='text-gray-400'>İletişim</span>

            </div>

        </div>
        {/* right */}
        <div className='flex flex-col gap-4 items-start'>
            <h2 className='text-white font-semibold text-2xl'>Turhanlar İletişim</h2>
            <p className='text-gray-400'>Adres: Saray, Bingöl - Elazığ Yolu, 12000 Bingöl Merkez/Bingöl</p>
            <p className='text-gray-400' >Telefon: 0555 55 55</p>
            <p className='text-gray-400' >Fax: 0426 654 44 22</p>
        </div>
    </article>
  )
}

export default MiddleFooter