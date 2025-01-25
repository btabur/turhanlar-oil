import Link from 'next/link';
import React from 'react'

import TopHeader from './TopHeader';
import Navigation from './Navigation';


const Header = () => {
  return (
    <section className='w-full  flex flex-col'>
        <TopHeader/>
        <Navigation />
    </section>
  )
}

export default Header