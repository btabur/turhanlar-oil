import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <section className='relative bg-[url("/bg-contact.jpg")] flex flex-col items-start gap-10 bg-cover bg-center bg-no-repeat h-[70vh] mb-20'>
      <div className='absolute inset-0 bg-black/50'></div>

      <Image 
      alt='contact-image'
      
      />

    </section>
  )
}

export default Contact

