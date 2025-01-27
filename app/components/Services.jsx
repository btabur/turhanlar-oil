import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = ({cards}) => {

  return (
    <section className='grid grid-cols-1 lg:grid-cols-3 gap-10 w-full items-start justify-center px-20 my-10'>
      {cards.map((card, index) => (
        <article key={index} className='flex flex-col items-start gap-3 lg:w-72 w-full'>
         {!card.href ?  <Image
            alt={`services${index + 1}`}
            src={card.imagePath}
            width={1800}
            height={900}
            className='lg:w-72 lg:h-44 w-full object-cover'
          /> :
            <Link className='cursor-pointer ' href={card.href}>
                <Image
                  alt={`services${index + 1}`}
                  src={card.imagePath}
                  width={1800}
                  height={900}
                  className='lg:w-72 lg:h-44 w-full object-cover'
                />
            </Link>
          }
          <h1 className='lg:text-xl text-2xl font-semibold'>{card.title}</h1>
          <p className='text-gray-600 lg:w-72 w-full'>{card.desc}</p>
         {card.btn && <button className='text-white py-2 px-4 bg-[#fdc133]'>{card.btn}</button>}
        </article>
      ))}
    </section>
  )
}

export default Services

