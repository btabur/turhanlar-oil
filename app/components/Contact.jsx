import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <section className='relative bg-[url("/bg-contact.jpg")] pt-20 pl-20 flex flex-col items-start gap-10 bg-cover bg-center bg-no-repeat h-[90vh] mb-20'>
      <div className='absolute inset-0 bg-black/50 z-0'></div>
      
      <div className='relative z-10 flex flex-col lg:gap-10 gap-5'>
        <Image 
          alt='contact-image'
          src={'/contact-image.jpg'}
          width={1800}
          height={900}
          className='lg:w-2/3 w-[80%] object-contain'
        />
        <h2 className='text-3xl font-semibold text-white'>Bir Fikriniz Mi Var ?</h2>
        <p className='text-xl text-white w-[90%]'>Petrolden inşaata iştiraklerimiz olan alanlarla ilgili bize ulaşabilirsiniz…</p>
        <Link href={"/iletişim"} className='py-2 w-32 text-center bg-[#fdc133] text-white'>İletişim</Link>
      </div>

    </section>
  )
}

export default Contact

