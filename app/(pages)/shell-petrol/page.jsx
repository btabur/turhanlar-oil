import Services from '@/app/components/Services'
import SliderShell from '@/app/components/SliderShell'
import { shellCards, shellInstitutionalCards } from '@/app/utilis/Cards'
import React from 'react'

const ShellPage = () => {
  return (
    <main className='mt-20 '>
        <SliderShell/>

        <article className='flex flex-col items-center w-full mt-10 '>
            <div className='flex items-center w-full gap-6 justify-center '>
                <span className='w-[30%] bg-primary h-[2px]'></span>
                <span className='text-primary font-semibold text-xl'>Sürücüler için Shell</span>
                <span className='w-[30%] bg-primary h-[2px]'></span>
            </div>
            <Services cards={shellCards} />

        </article>

        <article className='flex flex-col items-center w-full mt-10 '>
            <div className='flex items-center w-full gap-6 justify-center '>
                <span className='w-[30%] bg-primary h-[2px]'></span>
                <span className='text-primary font-semibold text-xl'>Kurumsal Müşteriler için Shell</span>
                <span className='w-[30%] bg-primary h-[2px]'></span>
            </div>
            <Services cards={shellInstitutionalCards} />

        </article>

    </main>
  )
}

export default ShellPage