import React from 'react'
import Image from 'next/image'
import { ABOUT_TEXT } from '@/constants'

export const AboutDesktop: React.FC = () => {
    return (<section id="about" className='flex justify-between bg-tertiary py-10'>
        <div className='flex flex-col px-20'>
            <h3 className='text-center text-secondary w-full mb-4 border-b border-secondary'>SOBRE</h3>
            <span className='text-secondary ml-4 text-center '>
                {ABOUT_TEXT}
            </span>
        </div>
        <Image
            className='mr-40 rounded-2xl'
            src="/class.jpg"
            alt="logo"
            width={567}
            height={567}
        />
    </section>)
}