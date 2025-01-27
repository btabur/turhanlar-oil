import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-3 gap-10 w-full items-center justify-center px-20 my-10'>
        {/* services 1 */}
        <article className='flex flex-col items-start gap-3 lg:w-72 w-full'>
            <Image
            alt='services1'
            src={'/slider-2.jpg'}
            width={1800}
            height={900}
            className='lg:w-72 lg:h-44 w-full object-cover'
            />
            <h1 className='lg:text-xl text-2xl font-semibold'>Turhanlar Petrol</h1>
            <p className='text-gray-600 lg:w-72 w-full '>Turhanlar Petrol olarak, her noktada ısınma, taşıma ve endüstriyel ihtiyaçlara yönelik yakıt tedarik ediyoruz.</p>
            <button className='text-white py-2 px-4 bg-[#fdc133] '> Bingöl Turhanlar Petrol</button>

        </article>
        {/* services 2 */}

        <article className='flex flex-col items-start gap-3 lg:w-72 w-full '>
            <Image
            alt='services2'
            src={'/services2.png'}
            width={1800}
            height={900}
             className='lg:w-72 lg:h-44 w-full object-cover'
            />
            <h1 className='lg:text-xl text-2xl font-semibold'>Shell Akaryakıtları</h1>
            <p className='text-gray-600  lg:w-72 w-full '>Yeni Shell V-Power ve Shell FuelSave 250’den fazla araç ve 3 milyon kilometreden fazla mesafede kapsamlı testler yapılmıştır.</p>
            <button className='text-white py-2 px-4 bg-[#fdc133] '> Shell Akaryakıt Ürünleri</button>

        </article>
        {/* services 3 */}

        <article className='flex flex-col items-start gap-3 lg:w-72 w-full'>
                    <Image
                    alt='services3'
                    src={'/slider-1.jpg'}
                    width={1800}
                    height={900}
                    className='lg:w-72 lg:h-44 w-full object-cover'
                    />
                    <h1 className='lg:text-xl text-2xl font-semibold'>Market ve Yıkama Servisi</h1>
                    <p className='text-gray-600  lg:w-72 w-full '>Bingöl Shell Akaryakıt istasyonumuzda hem aracınızın hem de sizlerin ihtiyaçlarına cevap veriyoruz.</p>
                    <button className='text-white py-2 px-4 bg-[#fdc133] '> Market ve Yıkama Servisi</button>

        </article>





    </section>
  )
}

export default Services

